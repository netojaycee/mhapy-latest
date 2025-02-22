"use client";
import { motion } from "framer-motion";

// import { Button } from "@/components/ui/button";
// import { Check, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Goal() {
  return (
    // <div className='px-2 md:px-10 w-full flex items-center md:flex-row flex-col space-y-5 md:space-y-10 lg:space-x-10 lg:space-y-0 mt-10 md:mt-0'>
    //   <div className='w-full md:w-[50%] flex flex-col items-center justify-center space-y-5 md:space-y-10'>
    //     <Image
    //       src='/images/phone-goal.png'
    //       alt='hero'
    //       className='w-full h-full object-cover'
    //       width={531}
    //       height={500}
    //     />
    //   </div>

    //   <div className='w-full md:w-[50%] flex flex-col  space-y-3 '>
    //     <h1 className='text-[18px] font-bold  text-primary'>Our Goal</h1>
    //     <h1 className='text-2xl md:text-4xl lg:text-5xl font-nunito font-bold  w-full'>
    //       Deal with your mental health issues
    //     </h1>
    //     <div className='mt-3 flex flex-col gap-3'>
    //       <span className='flex items-center gap-3 group'>
    //         <span className='bg-[#b629b6] p-3 rounded-full flex items-center justify-center h-9 w-9 md:h-[40px] md:w-[40px] group-hover:bg-primary'>
    //           <Check className='md:w-10 md:h-10 w-6 h-6 text-primary group-hover:text-white ' />
    //         </span>
    //         <p className='font-semibold md:text-xl'>Recommender systems</p>
    //       </span>

    //       <span className='flex items-center gap-3 group'>
    //         <span className='bg-[#b629b6] p-3 rounded-full flex items-center justify-center h-9 w-9 md:h-[40px] md:w-[40px] group-hover:bg-primary'>
    //           <Check className='md:w-10 md:h-10 w-6 h-6 text-primary group-hover:text-white ' />
    //         </span>
    //         <p className='font-semibold md:text-xl'>Recommender systems</p>
    //       </span>

    //       <span className='flex items-center gap-3 group'>
    //         <span className='bg-[#b629b6] p-3 rounded-full flex items-center justify-center h-9 w-9 md:h-[40px] md:w-[40px] group-hover:bg-primary'>
    //           <Check className='md:w-10 md:h-10 w-6 h-6 text-primary group-hover:text-white ' />
    //         </span>
    //         <p className='font-semibold md:text-xl'>Recommender systems</p>
    //       </span>
    //     </div>
    //     <div className='flex space-x-5 items-start justify-start w-full '>
    //       <Button className='mt-5'>
    //         Get Started Now <ChevronRight className='w-5 h-5' />
    //       </Button>
    //     </div>
    //   </div>
    // </div>

    <div className='max-w-5xl px-3 md:px-0 mx-auto w-full flex items-center md:flex-row flex-col space-y-5 md:space-y-10 lg:space-x-10 lg:space-y-0 mt-10 md:mt-0'>
      {/* Left Image Section */}
      <motion.div
        className='w-full md:w-[50%] flex flex-col items-center justify-center space-y-5 md:space-y-10'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} // Triggers only once when it enters the viewport
      >
        <Image
          src='/images/brain.png'
          alt='hero'
          className='w-full h-full object-cover'
          width={531}
          height={500}
        />
      </motion.div>

      {/* Text and List Section */}
      {/* <motion.div
        className='w-full md:w-[50%] flex flex-col space-y-3'
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} // Triggers only once when it enters the viewport
      >
        <h1 className='text-[18px] font-bold text-primary'>Our Goal</h1>
        <motion.h1
          className='text-2xl md:text-4xl lg:text-5xl font-nunito font-bold w-full'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Deal with your mental health issues
        </motion.h1>

        <div className='mt-3 flex flex-col gap-3'>
          <span className='flex items-center gap-3 group'>
            <span className='bg-[#b629b6] p-3 rounded-full flex items-center justify-center h-9 w-9 md:h-[40px] md:w-[40px] group-hover:bg-primary'>
              <Check className='md:w-10 md:h-10 w-6 h-6 text-primary group-hover:text-white' />
            </span>
            <p className='font-semibold md:text-xl'>Recommender systems</p>
          </span>

          <span className='flex items-center gap-3 group'>
            <span className='bg-[#b629b6] p-3 rounded-full flex items-center justify-center h-9 w-9 md:h-[40px] md:w-[40px] group-hover:bg-primary'>
              <Check className='md:w-10 md:h-10 w-6 h-6 text-primary group-hover:text-white' />
            </span>
            <p className='font-semibold md:text-xl'>Recommender systems</p>
          </span>

          <span className='flex items-center gap-3 group'>
            <span className='bg-[#b629b6] p-3 rounded-full flex items-center justify-center h-9 w-9 md:h-[40px] md:w-[40px] group-hover:bg-primary'>
              <Check className='md:w-10 md:h-10 w-6 h-6 text-primary group-hover:text-white' />
            </span>
            <p className='font-semibold md:text-xl'>Recommender systems</p>
          </span>
        </div>

        <motion.div
          className='flex space-x-5 items-start justify-start w-full'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Button className='mt-5'>
            Get Started Now <ChevronRight className='w-5 h-5' />
          </Button>
        </motion.div>
      </motion.div> */}

      {/* New Content Section (Mental Health Chatbot Integration) */}
      <motion.div
        className='w-full mt-10'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} // Triggers only once when it enters the viewport
      >
        <motion.h2
          className='text-2xl md:text-3xl lg:text-4xl font-nunito font-bold text-primary'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get your own mental health chatbot.
        </motion.h2>

        <motion.p
          className='text-[16px] md:text-lg text-gray-600 mt-5'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Do you have a website or mobile application? You can integrate a
          mental health chatbot into your website or application. Depending on
          your needs, clients can book appointments, learn about common mental
          health conditions and receive basic mental health support with a
          chatbot. You can also use a chatbot as a means to generate leads to
          get new clients.
        </motion.p>
      </motion.div>
    </div>
  );
}
