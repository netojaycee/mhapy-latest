"use client";
import TherapistCard from "@/components/local/TherapistCard";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Therapist {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  bio: string;
  booking_link: string;
  mini_bio: string;
  score: number;
  tags: string[];
}

// const mockTherapists: Therapist[] = [
//   {
//     id: "1",
//     first_name: "Johnson",
//     last_name: "Kuriappilly",
//     email: "johnson.k@example.com",
//     image: "/images/therapist.png",
//     bio: "\nJohnson Kuriappilly, MDiv., MPS., CSCP., CSAT (C), EMDR Trained - Registered Psychotherapist\n\nEducation & Professional Background:\nJohnson Kuriappilly is a Registered Psychotherapist who is committed to helping people achieve emotional wellness. He has a Master of Divinity and a Master of Psycho-Spiritual Care and is certified as a Certified Sex Addiction Therapist (CSAT-C), with additional training in EMDR. He has worked as a Psychospiritual Caregiver in healthcare settings for nine years, which has enriched his understanding of various religions, cultures, and individuals from diverse backgrounds.\n\nPhilosophy and Approach:\nJohnson believes in understanding each individual's unique story, thoughts, feelings, and experiences. He is a person-centered therapist who believes in the inherent capacity for growth, development, and self-healing in every person. His approach is rooted in collaboration, co-creation, and providing unwavering support, empathy, and unconditional positive regard.\n\nAreas of Expertise:\nJohnson specializes in person-centered therapy and adds an existential touch to help clients find their purpose and meaning in their lives. He works with individuals, couples, and those seeking spiritual direction. Johnson draws from his experiences as a Psychospiritual Caregiver to create a safe and comfortable environment for his clients. His goal is to bring a sense of peace, calm, and understanding to those he serves.\n\nCounseling Services:\nJohnson offers a range of counseling services tailored to individual needs, including a free 30-minute Initial Consultation, Individual Therapy at $180 per 60 minutes, Couple's Therapy at $200 per 60 minutes, and Spiritual Direction at $150.00 per 60 minutes. Sessions can be conducted online or in person. Johnson emphasizes the affordability of therapy with a sliding scale for special circumstances.\n",
//     mini_bio:
//       "Passionate about helping clients find peace and purpose through faith-based counseling.",
//     booking_link: "https://example.com/book/johnson",
//     score: 85,
//     tags: ["Christian therapist", "Person-centered therapy", "Sliding scale"],
//   },
//   {
//     id: "2",
//     first_name: "Karen",
//     last_name: "Goslin",
//     email: "karen.g@example.com",
//     image: "/images/therapist.png",
//     bio: "I’m a licensed cognitive-behavioral therapist specializing in anxiety and stress-related disorders, with over 10 years of experience. I use evidence-based CBT techniques to help clients break free from negative thought patterns and build resilience. My approach is collaborative, focusing on practical strategies to manage anxiety and achieve meaningful change. I’m passionate about creating a safe, nonjudgmental space where clients feel empowered to grow. Beyond therapy, I share insights through workshops and digital resources to make mental health support more accessible. My goal is to help you cultivate self-compassion and take steps toward a calmer, more fulfilling life..",
//     mini_bio:
//       "Empowering individuals through mindfulness and family-centered therapy.",
//     booking_link: "https://example.com/book/karen",
//     score: 76,
//     tags: ["Holistic approach", "Family counseling", "Mindfulness"],
//   },
//   {
//     id: "3",
//     first_name: "Michael",
//     last_name: "Andrews",
//     email: "michael.a@example.com",
//     image: "/images/therapist.png",
//     bio: "\nRachel (Rae) Massop is a registered social worker and social entrepreneur with a mission to bridge the gap in mental health access for lower-income Canadian households.\n\nEarly Beginnings:\nIn 2021, Rae founded Aworie Health to reduce the barriers to accessing mental health support. Aworie provides remote psychotherapy that is specifically tailored to lower-income Canadian households.\n\nPhilosophy and Approach:\nRae's mission is to connect low-income Canadians to psychotherapists who offer counseling services at rates that are geared to their income. She is supported by Futurpreneur Canada, Black Business and Professional Association, and the PARO Centre for Women's Enterprise. Rae is always open to new strategic partnerships and initiatives.\n\nAreas of Expertise:\nRae is an expert in providing individual psychotherapy. She offers a safe space for personal growth and well-being, life coaching, and meditation coaching. Rae specializes in individual psychotherapy where clients can achieve self-awareness, improved coping skills, better relationship dynamics, increased self-esteem, healing from trauma, and more.\n\nShe also specializes in life coaching, focusing on clarified goals, increased accountability, improved time management, increased motivation, enhanced confidence, and more.\n\nAdditionally, Rae specializes in meditation coaching, which focuses on reduced stress and anxiety, improved focus and concentration, enhanced emotional regulation, increased self-awareness, and greater overall well-being and inner peace.\n\nCounseling Services:\nRae offers a range of services to cater to individual needs, including a free 30-minute initial consultation. Rae emphasizes the affordability of therapy with a sliding scale for special circumstances. Here's a breakdown of the counseling services:\n\nIntake and Administrative Support:\n- Intake Session (15 min): A free session for new clients to connect with an intake coordinator.\n\nIndividual Psychotherapy / Mental Health:\n- Online Psychotherapy Initial Assessment (60 min): $135 for new clients.\n- Online Psychotherapy Subsequent Session (60 min): $135 for current clients.\n- Online Psychotherapy Initial Assessment (Sliding Scale, 60 min): $90 for new clients.\n- Online Psychotherapy Subsequent Session (Sliding Scale, 60 min): $90 for current clients.\n- Online Psychotherapy Subsequent Session (202290, 60 min): For current clients.\n- Online Psychotherapy Initial Assessment (2022135, 60 min): For new clients.\n- Online Psychotherapy Subsequent Session (2022135, 60 min): For current clients.\n- Online Psychotherapy Initial Assessment (30 Minutes): $50 for new clients.\n\nLife Coaching:\n- Online Life Coaching Subsequent Session (30 Minutes): $50 for current clients.\n",
//     mini_bio:
//       "Helping clients overcome anxiety and depression with CBT techniques. Specialist in cognitive behavioral therapy (CBT) with over 10 years of experience helping individuals with anxiety and depression",
//     booking_link: "https://example.com/book/michael",
//     score: 92,
//     tags: ["CBT", "Anxiety", "Depression"],
//   },
// ];

export default function Therapists() {
  const [therapists, setTherapists] = useState<Therapist[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("matchedTherapists");
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      if (!parsedData.scores || !parsedData.therapists) return;

      const therapistsWithScores: Therapist[] = parsedData.scores
        .map(
          (scoreData: {
            id: string;
            score: number;
            tags: string[];
            mini_bio: string;
          }) => {
            const therapist = parsedData.therapists.find(
              (t: { id: string }) => t.id === scoreData.id
            );
            return therapist
              ? {
                  ...therapist,
                  score: scoreData.score,
                  tags: scoreData.tags,
                  mini_bio: scoreData.mini_bio,
                }
              : null;
          }
        )
        .filter(Boolean);

      setTherapists(therapistsWithScores);
    }
  }, []);

  // useEffect(() => {
  //   setTherapists(mockTherapists);
  // }, []);

  return (
    <div className='max-w-6xl mx-auto py-10'>
      <h1 className='text-3xl font-semibold mb-6 text-center'>
        Matched Therapists
      </h1>
      {therapists.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center w-[90%] md:w-full mx-auto'>
          <AnimatePresence>
            {therapists.map((therapist, index) => (
              <motion.div
                key={therapist.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TherapistCard
                  name={`${therapist.first_name} ${therapist.last_name}`}
                  image={therapist.image}
                  match={therapist.score}
                  tags={therapist.tags}
                  bio={therapist.bio}
                  mini_bio={therapist.mini_bio}
                  therapistEmail={therapist.email}
                  bookingLink={therapist.booking_link}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-center text-gray-600'
        >
          No therapists matched your preferences.
        </motion.p>
      )}
    </div>
  );
}
