"use client"
import { ArrowUpWideNarrow, Brain, ShieldCheck } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    // <div className='px-2 md:px-16 w-full space-y-5'>
    //   <h1 className='text-[18px] font-bold text-center text-primary'>
    //     Our Core Values
    //   </h1>
    //   <h1 className='text-2xl md:text-4xl lg:text-5xl font-nunito font-bold text-center w-full md:w-[70%] lg:w-[55%] mx-auto'>
    //     Values that shape the future of mental health
    //   </h1>

    //   <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 lg:gap-20 mt-5'>
    //     <div className='flex flex-col space-y-5 group transform transition-transform duration-300 hover:-translate-y-2'>
    //       <span className='bg-[#FFC107]/10 p-3 rounded-[12px] group-hover:bg-[#FFC107] flex items-center justify-center h-[80px] w-[80px]'>
    //         <Brain className='w-10 h-10 text-[#FFC107] group-hover:text-white' />
    //       </span>

    //       <h1 className='text-xl font-bold font-nunito'>Human Interaction</h1>
    //       <p className='text-[14px]'>
    //         We believe in real, human connections that prioritize understanding,
    //         empathy, and emotional support.
    //       </p>
    //     </div>

    //     <div className='flex flex-col space-y-5 group transform transition-transform duration-300 hover:-translate-y-2'>
    //       <span className='bg-[#72EFDD]/10 p-3 rounded-[12px] group-hover:bg-[#72EFDD] flex items-center justify-center h-[80px] w-[80px]'>
    //         <ArrowUpWideNarrow className='w-10 h-10 text-[#72EFDD] group-hover:text-white' />
    //       </span>

    //       <h1 className='text-xl font-bold font-nunito'>Community</h1>
    //       <p className='text-[14px]'>
    //         We foster a sense of belonging and provide a platform where users
    //         and therapists support each other.
    //       </p>
    //     </div>

    //     <div className='flex flex-col space-y-5 group transform transition-transform duration-300 hover:-translate-y-2'>
    //       <span className='bg-[#4FC3F7]/10 p-3 rounded-[12px] group-hover:bg-[#4FC3F7] flex items-center justify-center h-[80px] w-[80px]'>
    //         <ShieldCheck className='w-10 h-10 text-[#4FC3F7] group-hover:text-white' />
    //       </span>

    //       <h1 className='text-xl font-bold font-nunito'>Privacy</h1>
    //       <p className='text-[14px]'>
    //         We respect your privacy and ensure that all your personal
    //         information is kept confidential and secure.
    //       </p>
    //     </div>
    //   </div>

    //   <h1 className='text-[18px] font-bold text-center text-primary mt-10'>
    //     Our Mission
    //   </h1>
    //   <h1 className='text-2xl md:text-4xl lg:text-5xl font-nunito font-bold text-center w-full md:w-[70%] lg:w-[55%] mx-auto'>
    //     Empowering Connections for Mental Wellness
    //   </h1>
    //   <p className='text-center text-[16px] text-gray-600 mt-4'>
    //     Our mission is to empower individuals to connect with their therapists
    //     and each other as accountability partners in their mental health
    //     journey.
    //   </p>

    //   <h1 className='text-[18px] font-bold text-center text-primary mt-10'>
    //     Our Vision
    //   </h1>
    //   <h1 className='text-2xl md:text-4xl lg:text-5xl font-nunito font-bold text-center w-full md:w-[70%] lg:w-[55%] mx-auto'>
    //     Transforming Mental Health with Chatbot Technology
    //   </h1>
    //   <p className='text-center text-[16px] text-gray-600 mt-4'>
    //     We envision a world where chatbot technology revolutionizes the way
    //     people approach mental health care, making it more accessible,
    //     personalized, and impactful.
    //   </p>
    // </div>


<div className="px-2 md:px-16 w-full space-y-5">
  {/* Title */}
  <motion.h1
    className="text-[18px] font-bold text-center text-primary"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false }} // Allows it to trigger when it comes into view each time
  >
    Our Core Values
  </motion.h1>

  {/* Subtitle */}
  <motion.h1
    className="text-2xl md:text-4xl lg:text-5xl font-nunito font-bold text-center w-full md:w-[70%] lg:w-[55%] mx-auto"
    initial={{ y: -50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: false }} // Keeps triggering when scrolled back into view
  >
    Values that shape the future of mental health
  </motion.h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 lg:gap-20 mt-5">
    {/* Value 1 */}
    <motion.div
      className="flex flex-col space-y-5 group transform transition-transform duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: false }} // Triggers when entering the viewport
    >
      <span className="bg-[#FFC107]/10 p-3 rounded-[12px] group-hover:bg-[#FFC107] flex items-center justify-center h-[80px] w-[80px]">
        <Brain className="w-10 h-10 text-[#FFC107] group-hover:text-white" />
      </span>
      <h1 className="text-xl font-bold font-nunito">Human Interaction</h1>
      <p className="text-[14px]">
        We believe in real, human connections that prioritize understanding, empathy, and emotional support.
      </p>
    </motion.div>

    {/* Value 2 */}
    <motion.div
      className="flex flex-col space-y-5 group transform transition-transform duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      viewport={{ once: false }} // Triggers when entering the viewport
    >
      <span className="bg-[#72EFDD]/10 p-3 rounded-[12px] group-hover:bg-[#72EFDD] flex items-center justify-center h-[80px] w-[80px]">
        <ArrowUpWideNarrow className="w-10 h-10 text-[#72EFDD] group-hover:text-white" />
      </span>
      <h1 className="text-xl font-bold font-nunito">Community</h1>
      <p className="text-[14px]">
        We foster a sense of belonging and provide a platform where users and therapists support each other.
      </p>
    </motion.div>

    {/* Value 3 */}
    <motion.div
      className="flex flex-col space-y-5 group transform transition-transform duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      viewport={{ once: false }} // Triggers when entering the viewport
    >
      <span className="bg-[#4FC3F7]/10 p-3 rounded-[12px] group-hover:bg-[#4FC3F7] flex items-center justify-center h-[80px] w-[80px]">
        <ShieldCheck className="w-10 h-10 text-[#4FC3F7] group-hover:text-white" />
      </span>
      <h1 className="text-xl font-bold font-nunito">Privacy</h1>
      <p className="text-[14px]">
        We respect your privacy and ensure that all your personal information is kept confidential and secure.
      </p>
    </motion.div>
  </div>
</div>

  );
}
