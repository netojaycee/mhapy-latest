"use client";
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

    //       <h1 className='text-left text-xl font-bold font-nunito'>Human Interaction</h1>
    //       <p className='text-left text-[14px]'>
    //         We believe in real, human connections that prioritize understanding,
    //         empathy, and emotional support.
    //       </p>
    //     </div>

    //     <div className='flex flex-col space-y-5 group transform transition-transform duration-300 hover:-translate-y-2'>
    //       <span className='bg-[#72EFDD]/10 p-3 rounded-[12px] group-hover:bg-[#72EFDD] flex items-center justify-center h-[80px] w-[80px]'>
    //         <ArrowUpWideNarrow className='w-10 h-10 text-[#72EFDD] group-hover:text-white' />
    //       </span>

    //       <h1 className='text-left text-xl font-bold font-nunito'>Community</h1>
    //       <p className='text-left text-[14px]'>
    //         We foster a sense of belonging and provide a platform where users
    //         and therapists support each other.
    //       </p>
    //     </div>

    //     <div className='flex flex-col space-y-5 group transform transition-transform duration-300 hover:-translate-y-2'>
    //       <span className='bg-[#4FC3F7]/10 p-3 rounded-[12px] group-hover:bg-[#4FC3F7] flex items-center justify-center h-[80px] w-[80px]'>
    //         <ShieldCheck className='w-10 h-10 text-[#4FC3F7] group-hover:text-white' />
    //       </span>

    //       <h1 className='text-left text-xl font-bold font-nunito'>Privacy</h1>
    //       <p className='text-left text-[14px]'>
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

    <div className='max-w-5xl  px-3 md:px-0 mx-auto w-full py-12 md:py-16 lg:py-20 text-center'>
      <div className='max-w-4xl mx-auto'>
        <motion.h1
          className='text-3xl md:text-4xl font-bold text-[#5A1DAD]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Our Core Values
        </motion.h1>

        <motion.p
          className='mt-3 text-gray-600 text-sm md:text-base'
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          Values that shape the future of mental health
        </motion.p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 lg:gap-20 mt-10'>
        {/* Value 1 */}
        <motion.div
          className='flex flex-col space-y-5 group transform transition-transform duration-300 hover:-translate-y-2 items-center'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false }} // Triggers when entering the viewport
        >
          <span className='bg-[#FFC107]/10 p-3 rounded-[12px] group-hover:bg-[#FFC107] flex items-center justify-center h-[80px] w-[80px]'>
            <Brain className='w-10 h-10 text-[#FFC107] group-hover:text-white' />
          </span>
          <h1 className='text-left text-xl font-bold font-nunito'>Values</h1>
          <p className='text-left text-[14px]'>
            At Mhapy, we believe in real connections, not just checklists. A
            space where you can be honest and vulnerable without fear of
            judgment, where privacy is a promise.
          </p>
        </motion.div>

        {/* Value 2 */}
        <motion.div
          className='flex flex-col space-y-5 group transform transition-transform duration-300 hover:-translate-y-2 items-center'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: false }} // Triggers when entering the viewport
        >
          <span className='bg-[#72EFDD]/10 p-3 rounded-[12px] group-hover:bg-[#72EFDD] flex items-center justify-center h-[80px] w-[80px]'>
            <ArrowUpWideNarrow className='w-10 h-10 text-[#72EFDD] group-hover:text-white' />
          </span>
          <h1 className='text-left text-xl font-bold font-nunito'>Mision</h1>
          <p className='text-left text-[14px]'>
            To help people feel seen, heard, and supported. Mhapy bridges the
            gap between what you&apos;re feeling and the care you need.
          </p>
        </motion.div>

        {/* Value 3 */}
        <motion.div
          className='flex flex-col space-y-5 group transform transition-transform duration-300 hover:-translate-y-2 items-center'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: false }} // Triggers when entering the viewport
        >
          <span className='bg-[#4FC3F7]/10 p-3 rounded-[12px] group-hover:bg-[#4FC3F7] flex items-center justify-center h-[80px] w-[80px]'>
            <ShieldCheck className='w-10 h-10 text-[#4FC3F7] group-hover:text-white' />
          </span>
          <h1 className='text-left text-xl font-bold font-nunito'>Vision</h1>
          <p className='text-left text-[14px]'>
            We imagine a world where no one has to struggle in silence—where
            understanding your mental health is as natural as checking in with a
            friend
          </p>
        </motion.div>
      </div>
    </div>
  );
}
