import { MatchedTherapist, Therapist, UserResponse } from "@/lib/types";
import { NextResponse } from "next/server";
import OpenAI from "openai";


const fetchTherapists = async (): Promise<Therapist[]> => {
    const token = process.env.TOKEN;
    const url = "https://mahppy-apis.nn.r.appspot.com/api/v1/therapists";
    const headers = {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
    };

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) throw new Error("Failed to fetch therapists");

        const therapists = await response.json();
        return therapists;
    } catch (error) {
        console.error("Error fetching therapists:", error);
        return [];
    }
};



const matchTherapistsWithAI = async (userResponses: UserResponse): Promise<MatchedTherapist[]> => {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    try {
        // Fetch therapists
        const therapists = await fetchTherapists();

        if (!therapists.length) throw new Error("No therapists found");
        // console.log(therapists);
        // Prepare OpenAI prompt with user responses and therapist data


        //     const prompt = `
        //   You are an AI assistant that matches users to therapists based on their preferences.

        //   ### **User Preferences**
        //   ${JSON.stringify(userResponses, null, 2)}

        //   ### **Available Therapists and Their Profiles**
        //   ${therapists.map((t) => `ID: ${t.id}, Bio: ${t.bio}`).join("\n")}

        //   ### **Task**
        //   1. **Rank the top 6 most suitable therapists** based on the user's preferences and therapist profiles.
        //      - Use a **similarity score between 0 and 100** to indicate match strength.
        //      - The higher the score, the better the match.

        //   2. **Generate relevant tags** that explain why the therapist is a good match.
        //      - Tags should be a mix of:
        //        - **Therapist’s specializations** (from their bio)
        //        - **User's preferences** (from the responses)
        //        - **Keywords that show strong overlap between both**

        //   ### **Return Format (Strictly JSON Only)**
        //   Return only JSON **without any additional text**, in this exact format:
        //   [
        //     { "id": "therapist_id", "score": similarity_score, "tags": ["OverlappingTag1", "OverlappingTag2"] }
        //   ]
        //   Do not include explanations, markdown formatting, or any extra text.
        // `;

        const prompt = `
      You are an AI assistant that matches users to therapists based on their preferences.

      ### **User Preferences**
      ${JSON.stringify(userResponses, null, 2)}

      ### **Available Therapists and Their Profiles**
      ${therapists.map((t) => `ID: ${t.id}, Bio: ${t.bio}`).join("\n")}

      ### **Task**
      1. **Rank the top 6 most suitable therapists** based on the user's preferences and therapist profiles.
         - Use a **similarity score between 0 and 100** to indicate match strength.
         - The higher the score, the better the match.

      2. **Generate relevant tags** that explain why the therapist is a good match.
         - Tags should be a mix of:
           - **Therapist’s specializations** (from their bio)
           - **User's preferences** (from the responses)
           - **Keywords that show strong overlap between both**

      3. **Provide a short 2 line summary of each therapist’s bio** to give the user a quick overview of their expertise and approach.

      ### **Return Format (Strictly JSON Only)**
      Return only JSON **without any additional text**, in this exact format:
      [
        { 
          "id": "therapist_id", 
          "score": similarity_score, 
          "tags": ["OverlappingTag1", "OverlappingTag2"], 
          "mini_bio": "A concise 2 sentence summary of the therapist’s bio." 
        }
      ]
      Do not include explanations, markdown formatting, or any extra text.
    `;


        const completion = await openai.chat.completions.create({
            model: "gpt-4-turbo",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 500,
        });

        if (!completion?.choices || completion.choices.length === 0) {
            throw new Error("No valid AI response received.");
        }
        // Extract AI response
        let aiResponse = completion.choices[0].message?.content?.trim() ?? "";

        // **Fix for Markdown-Formatted JSON**
        // If OpenAI wraps JSON inside ```json ... ```, extract the valid JSON part
        const jsonMatch = aiResponse.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch) {
            aiResponse = jsonMatch[1].trim(); // Extract only the JSON content
        }

        // Ensure response is valid JSON
        if (!aiResponse.startsWith("[") && !aiResponse.startsWith("{")) {
            console.error("AI returned non-JSON response:", aiResponse);
            throw new Error("Invalid JSON response from AI");
        }

        const rankedTherapists = JSON.parse(aiResponse);
        return rankedTherapists; // Returns [{ id, score, tags }]
    } catch (error) {
        console.error("Error matching therapists with AI:", error);
        return [];
    }
};

export async function POST(req: Request) {
    try {
        const userResponses: UserResponse = await req.json();
        const matchedTherapists: MatchedTherapist[] = await matchTherapistsWithAI(userResponses);
        // Fetch full therapist details using IDs from AI response
        const therapistIds = matchedTherapists.map((t) => t.id);
        const allTherapists: Therapist[] = await fetchTherapists();
        const filteredTherapists = allTherapists.filter((t) => therapistIds.includes(t.id));

        return NextResponse.json({ therapists: filteredTherapists, scores: matchedTherapists }, { status: 200 });
    } catch (error) {
        console.error("Error in matching process:", error);
        return NextResponse.json({ error: "Failed to match therapists" }, { status: 500 });
    }
};



// {
//     "therapists": [
//         {
//             "id": "a6143ef8-541a-4e4d-9ee4-fd60dabb4719",
//             "user": "be3d06ab-4b29-4e8f-8cb5-f20188e6ed33",
//             "email": "kuriappilly55@outlook.com",
//             "phone": "+2349054834575",
//             "image": "https://res.cloudinary.com/dm5oyz29j/image/upload/v1708834624/WhatsApp_Image_2024-02-23_at_11.09.25_m38ha6.jpg",
//             "first_name": "Johnson",
//             "last_name": "Kuriappilly",
//             "bio": "\nJohnson Kuriappilly, MDiv., MPS., CSCP., CSAT (C), EMDR Trained - Registered Psychotherapist\n\nEducation & Professional Background:\nJohnson Kuriappilly is a Registered Psychotherapist who is committed to helping people achieve emotional wellness. He has a Master of Divinity and a Master of Psycho-Spiritual Care and is certified as a Certified Sex Addiction Therapist (CSAT-C), with additional training in EMDR. He has worked as a Psychospiritual Caregiver in healthcare settings for nine years, which has enriched his understanding of various religions, cultures, and individuals from diverse backgrounds.\n\nPhilosophy and Approach:\nJohnson believes in understanding each individual's unique story, thoughts, feelings, and experiences. He is a person-centered therapist who believes in the inherent capacity for growth, development, and self-healing in every person. His approach is rooted in collaboration, co-creation, and providing unwavering support, empathy, and unconditional positive regard.\n\nAreas of Expertise:\nJohnson specializes in person-centered therapy and adds an existential touch to help clients find their purpose and meaning in their lives. He works with individuals, couples, and those seeking spiritual direction. Johnson draws from his experiences as a Psychospiritual Caregiver to create a safe and comfortable environment for his clients. His goal is to bring a sense of peace, calm, and understanding to those he serves.\n\nCounseling Services:\nJohnson offers a range of counseling services tailored to individual needs, including a free 30-minute Initial Consultation, Individual Therapy at $180 per 60 minutes, Couple's Therapy at $200 per 60 minutes, and Spiritual Direction at $150.00 per 60 minutes. Sessions can be conducted online or in person. Johnson emphasizes the affordability of therapy with a sliding scale for special circumstances.\n",
//             "booking_link": "https://www.londonpsychotherapy.ca/contact"
//         },
//         {
//             "id": "7ebfab18-27eb-4497-8dce-367f65b5b683",
//             "user": "2ebab1b0-9977-4993-bd05-2ed629cbb6f0",
//             "email": "malikachandra27@gmail.com",
//             "phone": "+16476382727",
//             "image": "https://res.cloudinary.com/dm5oyz29j/image/upload/v1708834651/WhatsApp_Image_2024-02-23_at_11.11.27_kzv9m3.jpg",
//             "first_name": "Malika",
//             "last_name": "Chandra",
//             "bio": "Malika Chandra is a registered Psychotherapist (Qualifying) with experience spanning across various age groups, including children, adults, and seniors. Having received specialized training and practical experience with diverse populations, Malika incorporates holistic approaches to psychotherapy. Employing a personalized, multicultural, and integrative lens, she offers consultations virtually.\n\nDrawing from a blend of scientific knowledge and the art of psychotherapy, Malika's practice combines educational expertise with ongoing research to deliver high-quality services. While the scientific aspect involves leveraging education and staying abreast of cutting-edge techniques, the art lies in the unique therapeutic relationship formed during each session. The intricacies of human existence unfold through this interaction, where the therapist engages deeply, using science as a guiding tool.\n\nMalika's aim is to facilitate an understanding of clients' internal selves and values, often obscured by external layers that can be unraveled together. Her goal is to assist individuals in reducing barriers to happiness and well-being while amplifying sources of fulfillment. By guiding clients toward congruence between their internal and external selves, she strives to unveil the depths of their internal world, offering insights into underlying issues and navigating paths toward wholeness.\n\nIn therapy, Malika employs a personalized and multicultural approach, acknowledging the complex interplay of various life aspects. Sessions encompass exploring emotions, untangling thought-behavior patterns, and addressing the complexities of relationships, acknowledging the impact of past experiences on the present. She uses the following modalities: Psychodynamic, Humanistic, CBT, Mindfulness-based Interventions, Attachment Theory and Emotion-focused.  Her practice provides a safe environment for open dialogue, gently unraveling defenses and fostering resilience in challenging times.\n\nMalika encourages individuals to initiate consultations to explore collaborative avenues for their personal growth and transformation. She looks forward to contributing to their journey toward self-discovery and well-being. She helps clients work through relationship issues, holistic well-being, depression, anxiety, family issues, trauma, childhood issues, attachment injury, low self-esteem, peer relationship issues, and addictions.\n\nRate - 150/hour regular\nSliding scale is also available if you do not have insurance.\n\nEducation – Malika has a master’s and bachelor’s degrees in psychology from the University of Toronto",
//             "booking_link": "http://calendly.com/malikachandra"
//         },
//         {
//             "id": "1cb9f0f3-c39e-4c8a-9b17-f94aa214a16b",
//             "user": "4a0b4c0d-9457-4644-b00b-bbc6391f7aa9",
//             "email": "saidym@kairoscounsellingservices.com",
//             "phone": "+16474504325",
//             "image": "https://res.cloudinary.com/dm5oyz29j/image/upload/v1708834651/WhatsApp_Image_2024-02-23_at_11.10.10_kqbozp.jpg",
//             "first_name": "SAIDY",
//             "last_name": "MAURER",
//             "bio": "\nSaidy Maurer is a Clinical Social Worker and Therapist who specializes in working with children, youth, and families. She has an extensive background in this field, starting as a Child and Youth Worker and providing support in various settings such as residential treatment, mental health, and education.\n\nEducation and Professional Background:\nSaidy completed her Master's in Social Work at the University of Toronto in 2012. Saidy is a registered practitioner with the Ontario College of Social Workers and Social Service Workers and the Ontario Association of Social Workers. She has a diverse professional background that equips her with a unique set of skills to address the complex needs of her clients.\n\nPhilosophy and Approach:\nSaidy's approach to therapy is relational and emotion-focused. She believes that therapy provides a non-judgmental space for individuals to explore and make sense of their experiences. She meets clients where they are in the moment, fostering trust in their ability to identify their needs. Saidy's role is to provide a supportive environment for deep self-reflection and collaboration in establishing tools for personal growth.\n\nAreas of Expertise:\nSaidy's expertise lies in relational and emotion-focused therapy, which allows her to address a wide range of challenges individuals face in their lives. She believes in the untapped knowledge and expertise that each person possesses.\n\nPersonal Connection:\nSaidy's personal experiences as a Child and Youth Worker and a parent enable her to connect more intimately with her clients' struggles and joys. She understands that life is an ongoing learning process, and parenting comes with its own unique challenges that require support. This personal connection enhances her empathy and relatability in supporting clients through various life experiences.\n\nCounseling Services:\nSaidy is affiliated with Kairos Counselling and Therapeutic Service, where she offers a range of counseling services to meet the unique needs of her clients. These include Individual Sessions that last 50 minutes at $170.00, Initial Individual Counseling sessions that last 55 minutes at $170.00, Free 15-minute Consultations for individuals to explore their needs and therapist fit, and 30-minute counseling sessions at $90.00, ideal for follow-ups, brief check-ins, or skill-building for children/teens.\n\nFor individuals seeking connection or exploring fit, Saidy encourages a free 15-minute consultation. This allows clients to express their needs, goals, and concerns while getting to know Saidy's individual style. Understanding the role of the client-therapist connection, this consultation serves as an opportunity to assess compatibility.\n\nAll counseling sessions with Saidy are web-based, providing convenient and accessible support. To connect with Saidy Maurer and embark on a journey of self-discovery and growth. Take the first step toward positive change with a therapist who values collaboration, empathy, and the unique strengths inherent in every individual.\n",
//             "booking_link": "https://kairoscounsellingservices.janeapp.com/#staff_member/1"
//         },
//         {
//             "id": "7fbbdefc-0560-473e-abc8-5523d52f9d0d",
//             "user": "13ca68e2-ecb4-4b93-9d81-e7398ff82c52",
//             "email": "raemassop@aworie.com",
//             "phone": "+14166194956",
//             "image": "https://res.cloudinary.com/dm5oyz29j/image/upload/v1708834623/WhatsApp_Image_2024-02-23_at_11.09.53_a1r2yw.jpg",
//             "first_name": "Rae",
//             "last_name": "Massop",
//             "bio": "\nRachel (Rae) Massop is a registered social worker and social entrepreneur with a mission to bridge the gap in mental health access for lower-income Canadian households.\n\nEarly Beginnings:\nIn 2021, Rae founded Aworie Health to reduce the barriers to accessing mental health support. Aworie provides remote psychotherapy that is specifically tailored to lower-income Canadian households.\n\nPhilosophy and Approach:\nRae's mission is to connect low-income Canadians to psychotherapists who offer counseling services at rates that are geared to their income. She is supported by Futurpreneur Canada, Black Business and Professional Association, and the PARO Centre for Women's Enterprise. Rae is always open to new strategic partnerships and initiatives.\n\nAreas of Expertise:\nRae is an expert in providing individual psychotherapy. She offers a safe space for personal growth and well-being, life coaching, and meditation coaching. Rae specializes in individual psychotherapy where clients can achieve self-awareness, improved coping skills, better relationship dynamics, increased self-esteem, healing from trauma, and more.\n\nShe also specializes in life coaching, focusing on clarified goals, increased accountability, improved time management, increased motivation, enhanced confidence, and more.\n\nAdditionally, Rae specializes in meditation coaching, which focuses on reduced stress and anxiety, improved focus and concentration, enhanced emotional regulation, increased self-awareness, and greater overall well-being and inner peace.\n\nCounseling Services:\nRae offers a range of services to cater to individual needs, including a free 30-minute initial consultation. Rae emphasizes the affordability of therapy with a sliding scale for special circumstances. Here's a breakdown of the counseling services:\n\nIntake and Administrative Support:\n- Intake Session (15 min): A free session for new clients to connect with an intake coordinator.\n\nIndividual Psychotherapy / Mental Health:\n- Online Psychotherapy Initial Assessment (60 min): $135 for new clients.\n- Online Psychotherapy Subsequent Session (60 min): $135 for current clients.\n- Online Psychotherapy Initial Assessment (Sliding Scale, 60 min): $90 for new clients.\n- Online Psychotherapy Subsequent Session (Sliding Scale, 60 min): $90 for current clients.\n- Online Psychotherapy Subsequent Session (202290, 60 min): For current clients.\n- Online Psychotherapy Initial Assessment (2022135, 60 min): For new clients.\n- Online Psychotherapy Subsequent Session (2022135, 60 min): For current clients.\n- Online Psychotherapy Initial Assessment (30 Minutes): $50 for new clients.\n\nLife Coaching:\n- Online Life Coaching Subsequent Session (30 Minutes): $50 for current clients.\n",
//             "booking_link": "https://aworie.janeapp.com/#/staff_member/1"
//         },
//         {
//             "id": "19b685c2-3b7b-44b8-a892-f7658ca6241f",
//             "user": "7a0b2525-01e8-4a5e-ab88-dec1be8c129c",
//             "email": "karenrsw@yahoo.ca",
//             "phone": "+14163167686",
//             "image": "https://res.cloudinary.com/dm5oyz29j/image/upload/v1709619800/WhatsApp_Image_2024-03-04_at_14.17.36_n0ugvk.jpg",
//             "first_name": "Karen",
//             "last_name": "Goslin",
//             "bio": "Karen Goslin, MSW, RSW  Education: - Bachelor of Social Work (BSW) from McMaster University in 1986 - Master of Social Work (MSW) from the University of Toronto in 1990  Professional Background: Karen Goslin is a psychotherapist and registered social worker with a career spanning over 35 years. For the past 25 years, she has run her private practice, Karen Goslin & Associates, where she leads a team of skilled therapists. Before starting her private practice, Karen worked in an integrated mental health therapy program for a decade, gaining experience in providing therapy to individuals, couples, families, and groups.  Philosophy and Approach: Karen is passionate about accountable therapy and has developed a comprehensive approach that includes a specific assessment process. Her treatment plans are characterized by clear clinical formulations and utilize a range of therapeutic modalities. These include here-and-now self-care strategies, cognitive-behavioral therapy (CBT), dialectical-behavioral therapy (DBT), and relapse prevention tools. In addition, she incorporates emotionally focused therapy to address deeper emotional wounds and strengthen the healthy self.  Areas of Expertise: Karen specializes in helping children, teens, and adults navigate their lives, relationships, and families. Her expertise extends to a diverse range of issues, including anxiety, depression, anger, trauma, grief, chronic pain, addiction, separation, divorce, blended family, parenting issues post-traumatic stress disorder (PTSD), relationship issues, and sleep disorders.  Counseling Services: Karen offers a 3-stage program of recovery that includes self-care, CBT, DBT, and deeper healing approaches. Her psychotherapy program focuses on self-care management, changing thought patterns under stress, building emotional regulation, and addressing underlying wounds. Karen provides counseling services at an affordable rate, ranging from $49.99 to $299.  Clients often share that they wish they had sought therapy sooner, emphasizing the positive impact Karen's psychotherapy program has on their lives.  Contact Information: You can email Karen Goslin at karenrsw@yahoo.ca   Karen Goslin & Associates: Karen is the lead therapist at Karen Goslin & Associates, a practice with a mission to help clients reach their full potential in life. Clients commend her for the straight, honest, and compassionate talk that motivates them toward positive change.",
//             "booking_link": "https://karen-goslin.appointlet.com/s/initial-assessment-2"
//         },
//         {
//             "id": "47ee3730-f1d5-4cca-9ca0-c4b93f08a8f4",
//             "user": "21f08aa9-83b0-4bb6-ac1c-fcb4af007ca0",
//             "email": "yusupovaoks@gmail.com",
//             "phone": "+14169066787",
//             "image": "https://res.cloudinary.com/dcghexyif/image/upload/v1719774438/gbtndmqol5r0pg8puqye.jpg",
//             "first_name": "Oksana",
//             "last_name": "Yusupova",
//             "bio": "Education and Professional Background: Oksana Yusupova is an experienced Registered Psychotherapist based in Canada. With over two decades of experience since beginning her career in 2001, she is dedicated to understanding and helping others navigate their emotions.  Oksana holds a master’s degree in psychology and offer a range of psychotherapy services (individual, family, couple). In addition to one-on-one sessions, she leads workshops, events, and courses on emotions and emotional intelligence for schools, universities, and organizations. She is an author of a book for children and teenagers about emotions, titled \"Focus on Emotions. The Kids’ Guide to Themselves.\"   Philosophy and Approach: Clients describe Oksana’s approach to therapy as \"gentle yet deep.\" She is committed to adhering to all psychotherapeutic principles while addressing the root of each client’s problem. Her method emphasizes psychological education, ensuring that both children and adults understand why they experience certain emotions, how bodily processes work, and what they can expect from themselves. Oksana believes in the importance of honesty in her practice, living and experiencing each nuance of her clients’ lives to identify the true cause of their issues and provide personalized, effective recommendations.  Areas of Expertise: Oksana specializes in Emotion Focused Therapy, working with children, families, and adults. She focuses on: i. Addressing emotional issues ii. Building self-esteem and self-confidence iii. Improving relationships with family and friends iv. Exploring self-understanding and identity v. Managing mood swings and stress vi. Coping with anger effectively vii. Fostering friendships viii. Enhancing parent child relationships ix. Treating emotional trauma x. Addressing behavioral and social issues xi. Managing anxiety and depression xii. Navigating life challenges  In her work with parents, she assists in overcoming communication difficulties with their children, helping them understand their child’s perspective on problems, comprehend the reasons behind their behavior and reactions, and become aware of their own responses. Oksana educates parents on gentle influencing methods, ensuring that they learn how to speak and act in ways that make their children feel heard and understood.  Personal Connection: Oksana’s practice is deeply inspired by her love for people and her personal experiences as a mother of two children. Her life values revolve around family and kin, and she places a high value on creating warm, nurturing family relationships. She strives to cultivate an atmosphere where everyone looks forward to coming home after school or work, enjoying weekends together, and sharing pleasant moments. Witnessing positive changes in her clients’ lives motivates her, and she always works with love, recognizing and highlighting each individual’s strengths.  Counseling Services: Oksana offers a range of psychotherapeutic services, including: 1. Individual sessions for children, teenagers, and parents 2. Family therapy sessions 3. Couple therapy sessions 4. Workshops and educational sessions on improving emotional intelligence and communication skills for schools, universities, and organizations  For new clients, Oksana provides a 15minute introductory session, which is available online and free of charge. This session allows potential clients to get to know Oksana and her approach before committing to a full hour session.  Additional Endeavors: Oksana is also a content creator and speaker. She runs a YouTube channel, \"Focus On Emotions,\" and has been a guest speaker on Spotify. As an author, she has written a book for children and teenagers about emotions, titled \"Focus on Emotions: The Kids’ Guide to Themselves.\" She is passionate about emotions, the brain, and psychology and she explores the powerful connections between these areas.  Her services are at affordable prices  Family session 50 min $190  Individual session 50 min $170  Contact Information: Booking Page: https://yusupovapsy.com/booking15",
//             "booking_link": "https://yusupovapsy.com/booking15"
//         }
//     ],
//         "scores": [
//             {
//                 "id": "a6143ef8-541a-4e4d-9ee4-fd60dabb4719",
//                 "score": 75,
//                 "tags": [
//                     "Christian background",
//                     "person-centered therapy",
//                     "spiritual direction",
//                     "EMDR trained",
//                     "woman therapist preference"
//                 ]
//             },
//             {
//                 "id": "7ebfab18-27eb-4497-8dce-367f65b5b683",
//                 "score": 72,
//                 "tags": [
//                     "multicultural approach",
//                     "woman therapist preference",
//                     "Christian client",
//                     "integrative therapy",
//                     "CBT"
//                 ]
//             },
//             {
//                 "id": "19b685c2-3b7b-44b8-a892-f7658ca6241f",
//                 "score": 70,
//                 "tags": [
//                     "woman therapist preference",
//                     "Christian background",
//                     "individual and family therapy",
//                     "over 35 years experience",
//                     "holistic approach"
//                 ]
//             },
//             {
//                 "id": "7fbbdefc-0560-473e-abc8-5523d52f9d0d",
//                 "score": 67,
//                 "tags": [
//                     "affordable therapy",
//                     "individual psychotherapy",
//                     "life coaching",
//                     "meditation coaching",
//                     "woman therapist preference"
//                 ]
//             },
//             {
//                 "id": "1cb9f0f3-c39e-4c8a-9b17-f94aa214a16b",
//                 "score": 64,
//                 "tags": [
//                     "family-focused therapy",
//                     "emotion-focused therapy",
//                     "woman therapist preference",
//                     "online sessions"
//                 ]
//             },
//             {
//                 "id": "47ee3730-f1d5-4cca-9ca0-c4b93f08a8f4",
//                 "score": 62,
//                 "tags": [
//                     "Emotion Focused Therapy",
//                     "family and couple therapy",
//                     "education on emotions",
//                     "woman therapist preference"
//                 ]
//             }
//         ]
// }