"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Protect() {
  return (
    // <div className='bg-gradient-to-r from-[#441890] to-[#6a1b9a] text-white py-16 px-2 md:pr-10 md:pl-16 w-full flex items-center md:flex-row flex-col space-y-5 md:space-y-10 lg:space-x-10 lg:space-y-0 mt-10 md:mt-0'>
    //   <div className='w-full md:w-[50%] flex flex-col  space-y-3 '>
    //     <h1 className='text-[18px] font-bold  text-white'>Our Goal</h1>
    //     <h1 className='text-2xl md:text-4xl lg:text-5xl font-nunito font-bold  w-full'>
    //       Deal with your mental health issues
    //     </h1>
    //     <div className='mt-3 flex flex-col gap-3'>
    //       <span className='flex items-center gap-3 group'>
    //         <span className='bg-[#b629b6] p-3 rounded-full flex items-center justify-center h-9 w-9 md:h-[40px] md:w-[40px] group-hover:bg-white'>
    //           <Check className='md:w-10 md:h-10 w-6 h-6 text-white group-hover:text-[#b629b6] ' />
    //         </span>
    //         <p className='font-semibold md:text-xl'>Recommender systems</p>
    //       </span>

    //       <span className='flex items-center gap-3 group'>
    //         <span className='bg-[#b629b6] p-3 rounded-full flex items-center justify-center h-9 w-9 md:h-[40px] md:w-[40px] group-hover:bg-white'>
    //           <Check className='md:w-10 md:h-10 w-6 h-6 text-white group-hover:text-[#b629b6] ' />
    //         </span>
    //         <p className='font-semibold md:text-xl'>Recommender systems</p>
    //       </span>

    //       <span className='flex items-center gap-3 group'>
    //         <span className='bg-[#b629b6] p-3 rounded-full flex items-center justify-center h-9 w-9 md:h-[40px] md:w-[40px] group-hover:bg-white'>
    //           <Check className='md:w-10 md:h-10 w-6 h-6 text-white group-hover:text-[#b629b6] ' />
    //         </span>
    //         <p className='font-semibold md:text-xl'>Recommender systems</p>
    //       </span>
    //     </div>
    //     <div className='flex space-x-5 items-start justify-start w-full '>
    //       <Button className='bg-white text-primary hover:bg-gray-800 hover:text-white  mt-5'>
    //         Get Started Now <ChevronRight className='w-5 h-5' />
    //       </Button>
    //     </div>
    //   </div>

    //   <div className='w-full md:w-[50%] flex flex-col items-center justify-center space-y-5 md:space-y-10'>
    //     <Image
    //       src='/images/phones-protect.png'
    //       alt='hero'
    //       className='w-full h-full object-cover'
    //       width={531}
    //       height={500}
    //     />
    //   </div>
    // </div>
    <div className='bg-gradient-to-r from-[#441890] to-[#6a1b9a] text-white w-full'>
      <div className='max-w-5xl mx-auto px-3 md:px-0  py-16  w-full flex items-center md:flex-row flex-col space-y-5 md:space-y-10 lg:space-x-10 lg:space-y-0 mt-10 md:mt-0'>
        <div className='w-full md:w-[50%] flex flex-col space-y-3'>
          <h1 className='text-[18px] font-bold text-white'>Our Goal</h1>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-nunito font-bold w-full'>
            Measurement-based care to enhance mental health
          </h1>
          <div className='mt-3 flex flex-col gap-3'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className='flex items-center gap-3'>
                <span className='bg-[#b629b6] p-3 rounded-full flex items-center justify-center h-9 w-9 md:h-[40px] md:w-[40px] group-hover:bg-white'>
                  <Check className='md:w-10 md:h-10 w-6 h-6 text-white group-hover:text-[#b629b6]' />
                </span>
                <p className='font-semibold md:text-xl'>
                  Administer homework and mental health assessments
                </p>
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className='flex items-center gap-3'>
                <span className='bg-[#b629b6] p-3 rounded-full flex items-center justify-center h-9 w-9 md:h-[40px] md:w-[40px] group-hover:bg-white'>
                  <Check className='md:w-10 md:h-10 w-6 h-6 text-white group-hover:text-[#b629b6]' />
                </span>
                <p className='font-semibold md:text-xl'>
                  Real-time mental health analysis of clients
                </p>
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <span className='flex items-center gap-3'>
                <span className='bg-[#b629b6] p-3 rounded-full flex items-center justify-center h-9 w-9 md:h-[40px] md:w-[40px] group-hover:bg-white'>
                  <Check className='md:w-10 md:h-10 w-6 h-6 text-white group-hover:text-[#b629b6]' />
                </span>
                <p className='font-semibold md:text-xl'>
                  Prioritize resources based on client acuity
                </p>
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className='flex items-center gap-3'>
                <span className='bg-[#b629b6] p-3 rounded-full flex items-center justify-center h-9 w-9 md:h-[40px] md:w-[40px] group-hover:bg-white'>
                  <Check className='md:w-10 md:h-10 w-6 h-6 text-white group-hover:text-[#b629b6]' />
                </span>
                <p className='font-semibold md:text-xl'>
                  Track symptoms and visualize results over time
                </p>
              </span>
            </motion.div>
          </div>
          <div className='flex space-x-5 items-start justify-start w-full'>
            <Button className='bg-white text-primary hover:bg-gray-800 hover:text-white mt-5'>
              Get Started Now <ChevronRight className='w-5 h-5' />
            </Button>
          </div>
        </div>

        <div className='w-full md:w-[50%] flex flex-col items-center justify-center space-y-5 md:space-y-10'>
          <div className=''>
            <Image
              src='/images/mhapy-android.png'
              alt='hero'
              className='w-full h-full object-cover'
              width={531}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
