"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export default function EarnFreeTherapySection({
  downloadSectionRef,
}: {
  downloadSectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  const scrollToDownloadSection = () => {
    downloadSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='max-w-5xl w-full px-3 md:px-0 mx-auto py-16  flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
      {/* Left: Text Content */}
      <motion.div
        className='lg:w-1/2 text-center lg:text-left'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-3xl lg:text-4xl font-bold text-[#441890] mb-4'>
          Earn Free Therapy by Simply Checking In!
        </h2>
        <p className='text-gray-600 mb-6'>
          Stay engaged with your mental health journey by checking in daily.
          Earn points towards free therapy sessions and unlock wellness rewards.
        </p>
        <motion.button
          onClick={scrollToDownloadSection}
          className='bg-[#441890] hover:bg-[#37236c] text-white font-medium px-6 py-3 rounded-md shadow-md transition flex items-center gap-2'
          whileHover={{ scale: 1.05 }}
        >
          Download App <Download className='w-5 h-5' />
        </motion.button>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        className='lg:w-1/3 w-full flex justify-center '
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src='/images/happy.jpg'
          alt='Happy user'
          width={400}
          height={300}
          className='rounded-lg shadow-lg bg-gray-400'
        />
      </motion.div>
    </div>
  );
}
