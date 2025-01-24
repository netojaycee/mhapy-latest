"use client"
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    // <div className='px-2 md:px-10 w-full flex items-center lg:flex-row flex-col space-y-5 md:space-y-10 lg:space-x-10 lg:space-y-0 mt-10 md:mt-0'>
    //   <div className='w-full md:w-[70%] flex flex-col items-center justify-center space-y-5 md:space-y-10'>
    //     <h1 className='text-4xl lg:text-6xl font-nunito font-bold text-center lg:text-left'>
    //       Your Digital Companion for Mental Wellness
    //     </h1>
    //     <p className='text-[18px] lg:text-lg text-center lg:text-left text-gray-600'>
    //       Meet mhapy — your personal mental health chatbot and social journal.
    //       Track your mental health journey, manage symptoms, receive customized
    //       assessments, and stay connected with your mental health professional.
    //       Designed to empower you with insights for a happier, healthier you.
    //     </p>
    //     <div className='flex space-x-5 items-start justify-center lg:justify-start w-full'>
    //       <Button className=''>
    //         Start Your Journey <ChevronRight className='w-5 h-5' />
    //       </Button>
    //     </div>
    //   </div>

    //   <Image
    //     src='/images/phone-hero.png'
    //     alt='mhapy chatbot preview'
    //     className='w-full h-full object-cover'
    //     width={808}
    //     height={534}
    //   />
    // </div>




<div className="px-2 md:px-10 w-full flex items-center lg:flex-row flex-col space-y-5 md:space-y-10 lg:space-x-10 lg:space-y-0 mt-10 md:mt-0">
  <motion.div
    className="w-full md:w-[70%] flex flex-col items-center justify-center space-y-5 md:space-y-10"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }} // Triggers only once when it enters the viewport
  >
    <motion.h1
      className="text-4xl lg:text-6xl font-nunito font-bold text-center lg:text-left"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Your Digital Companion for Mental Wellness
    </motion.h1>

    <motion.p
      className="text-[18px] lg:text-lg text-center lg:text-left text-gray-600"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Meet mhapy — your personal mental health chatbot and social journal.
      Track your mental health journey, manage symptoms, receive customized
      assessments, and stay connected with your mental health professional.
      Designed to empower you with insights for a happier, healthier you.
    </motion.p>

    <motion.div
      className="flex space-x-5 items-start justify-center lg:justify-start w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Button>
        Start Your Journey <ChevronRight className="w-5 h-5" />
      </Button>
    </motion.div>
  </motion.div>

  <motion.div
    className="w-full h-full object-cover"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <Image
      src="/images/phone-hero.png"
      alt="mhapy chatbot preview"
      className="w-full h-full object-cover"
      width={808}
      height={534}
    />
  </motion.div>
</div>

  );
}
