"use client";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How quickly can I get matched with a therapist?",
    answer:
      "Once you complete our simple onboarding process, we can match you with a therapist within 24 to 48 hours. Our system ensures that your match aligns with your needs, preferences, and therapy goals.",
  },
  {
    question: "What is the cost of using Mhapy?",
    answer:
      "Mhapy offers free features like journaling, peer support, and mental health questionnaires. For therapy sessions, pricing varies based on the therapist’s rates, but we ensure affordability by offering flexible plans.",
  },
  {
    question: "Are my journals public?",
    answer:
      "No! Your journals are 100% private. They are securely stored and accessible only to you. If you choose, you can make them public, but that’s entirely up to you.",
  },
  {
    question: "What is Ruby, and how does it help?",
    answer:
      "Ruby is your AI-powered mental health companion that listens, helps track emotions, and turns conversations into actionable insights for you and your therapist. Ruby makes it easier to start therapy without the pressure of knowing what to say.",
  },
  {
    question: "How does peer support work?",
    answer:
      "Mhapy’s peer support groups connect you with others who share similar experiences. Whether you need encouragement, shared advice, or just someone who understands, our community is here for you.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We take privacy seriously! Mhapy uses end-to-end encryption to protect your conversations, journals, and therapy sessions. Your data is never shared without your consent.",
  },
  {
    question: "Can I try Mhapy for free?",
    answer:
      "Yes! You can access journaling, peer support, and mental health questionnaires for free. Therapy sessions and premium features may require a subscription or one-time payment.",
  },
  {
    question: "How long does therapy take to work?",
    answer:
      "Therapy is different for everyone. Some people feel better after a few sessions, while others may take longer. The key is consistency, openness, and finding the right therapist for you.",
  },
  {
    question: "What if I need support at night?",
    answer:
      "Ruby is available 24/7, so you can process emotions, journal, and track your feelings anytime. For immediate crisis support, we also provide emergency resources.",
  },
  {
    question: "How do I get started?",
    answer:
      "It’s simple! Download the App now, take a quick assessment, and start exploring tools that make mental wellness effortless.",
  },
];

export default function Faq() {
  return (
    <div className='relative w-full py-16 text-center max-w-5xl mx-auto'>
      <div className='relative max-w-4xl mx-auto px-3 md:px-0'>
        <h2 className='text-3xl md:text-4xl font-bold text-[#5A1DAD]'>
          Frequently Asked Questions
        </h2>
      </div>
      {/* <h1 className='text-2xl md:text-4xl lg:text-5xl font-nunito font-bold text-center w-full md:w-[70%] lg:w-[55%] mx-auto'>
        Dedicated to help anything people&apos;s needs{" "}
      </h1> */}

      <div className='mt-10 w-full flex md:flex-row flex-col space-y-5 md:space-y-10 lg:space-x-10 lg:space-y-0'>
        <div className='w-full flex flex-col space-y-3'>
          <FaqAccordion />
        </div>

        {/* <div className='w-full md:w-[50%] flex flex-col items-center justify-center space-y-5 md:space-y-10'>
          <div className='relative w-full h-[500px]'>
            <Image
              src='/images/human-faq.png'
              alt='hero'
              className='object-cover'
              layout='fill'
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

function FaqAccordion() {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'
    >
      {faqData.map((faq, index) => (
        <AccordionItem
          className='bg-white rounded-[12px] shadow-md p-2'
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger className='font-nunito font-semibold text-[15px]'>
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
