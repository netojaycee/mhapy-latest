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
    question: "Is Mhapy Clinically Validated?",
    answer:
      "At this point, the tool is still in development and cannot be validated yet. However, Ruby (mhapy’s chatbot) draws from clinically validated screening tools for anxiety, depression, hallucinations, substance use, and more. These tools have been used for decades by psychiatrists, psychologists, and mental health nurses for assessment.",
  },
  {
    question: "Can I find a Therapist on Mhapy?",
    answer:
      "We are working on an update that will allow you to use mhapy to find therapists in your area. We can not wait to share this with you.",
  },
  {
    question: "What is the Privacy Policy?",
    answer:
      "Your discussions with Ruby and with your peers are completely private. We will only view these messages for context whenever a report is made to us for inappropriate comments, hate speech, bullying, or harassment of any kind.",
  },
  {
    question: "What are the rules for what I can share on the platform?",
    answer:
      "Amhapy is committed to being a safe space for you to fully express yourself. Do not hesitate to report any comment you find offensive. We do not tolerate any kind of harassment. No hate speech or bullying. Be kind and courteous and respect everyone’s privacy.",
  },
  {
    question: "How many Accountability Partners Do I Need?",
    answer:
      "Quality is better than quantity. We recommend that you start with only 3-5 accountability partners and cultivate meaningful relationships with them. However, we do not put any limits on how many peers you can have as accountability partners.",
  },
  {
    question: "Is mhapy for me?",
    answer:
      "mhapy is for anyone who wants to improve their mental health. It doesn’t matter what stage of the journey you are at. mhapy is committed to inclusion. We are a no stigma, no judgement digital space to express yourself and connect with peers.",
  },
];

export default function Faq() {
  return (
    <div className='relative w-full py-16 px-4 md:px-8 text-center '>
      <div className='relative max-w-4xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-[#5A1DAD]'>
          Frequently Asked Questions
        </h2>
      </div>
      {/* <h1 className='text-2xl md:text-4xl lg:text-5xl font-nunito font-bold text-center w-full md:w-[70%] lg:w-[55%] mx-auto'>
        Dedicated to help anything people&apos;s needs{" "}
      </h1> */}

      <div className='mt-10 px-2 md:px-10 w-full flex md:flex-row flex-col space-y-5 md:space-y-10 lg:space-x-10 lg:space-y-0'>
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
