"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function MeetRuby({
  downloadSectionRef,
}: {
  downloadSectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  const scrollToDownloadSection = () => {
    downloadSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='max-w-5xl w-full px-3 md:px-0 mx-auto py-16  flex flex-col md:flex-row items-center justify-between gap-10'>
      {/* Left: Text Content */}

      {/* Right: Image */}
      <motion.div
        className='lg:w-1/3 w-full flex justify-center '
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src='/images/brain.png'
          alt='Happy user'
          width={400}
          height={300}
          className=''
        />
      </motion.div>

      <motion.div
        className='lg:w-1/2 text-center lg:text-left space-y-4'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-3xl lg:text-4xl font-bold text-[#441890] mb-4 text-center md:text-left'>
          Meet Ruby{" "}
        </h2>
        <p className='text-gray-600 text-left'>
          Sometimes, you just need to let it out—without worrying about judgment
          or saying the “right” thing.{" "}
          <span className='font-bold'>
            Ruby is here to listen, reflect, and help you make sense of it all.
            FOR FREE!
          </span>{" "}
          <p className='mt-3 text-gray-600 text-left'>
            No pressure, just open conversations Tracks your emotions & turns
            them into insights Helps your therapist understand you better
          </p>
        </p>
        <p className='mt-3 text-gray-600 mb-6 text-left'>
          Because your feelings matter—even when you can&apos;t find the words.
        </p>
        <div className=' w-full flex items-center justify-center md:justify-start'>
          <motion.button
            onClick={scrollToDownloadSection}
            className='bg-[#441890] hover:bg-[#37236c] text-white font-medium px-6 py-3 rounded-md shadow-md transition flex items-center gap-2'
            whileHover={{ scale: 1.05 }}
          >
            Start Talking to Ruby <MessageCircle className='w-5 h-5' />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
