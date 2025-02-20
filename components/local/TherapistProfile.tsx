"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function TherapistProfile({ name, image, bio }: { name: string; image: string; bio: string }) {
  // Function to split a long text into readable paragraphs
  const splitIntoParagraphs = (text: string) => {
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text]; // Split at sentence endings
    const paragraphs = [];

    for (let i = 0; i < sentences.length; i += 2) {
      paragraphs.push(sentences.slice(i, i + 2).join(" ")); // Group 2 sentences per paragraph
    }

    return paragraphs;
  };

  const paragraphs = splitIntoParagraphs(bio);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className='max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl overflow-hidden'
    >
      <div className='flex flex-col md:flex-row items-start'>
        {/* Animated Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='w-32 h-32 md:w-40 md:h-40 mr-6 mb-4 md:mb-0 shadow-md rounded-lg overflow-hidden'
        >
          <Image
            src={image}
            alt={name}
            width={160}
            height={160}
            className='rounded-lg object-cover w-full h-full'
          />
        </motion.div>

        {/* Therapist Details */}
        <div className='flex-1'>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className='text-3xl font-bold text-gray-800'
          >
            {name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='mt-4 text-gray-700 space-y-4 leading-relaxed'
          >
            {paragraphs.map((para, index) => (
              <p
                key={index}
                className='relative before:block before:absolute before:-left-3 before:top-2 before:w-1 before:h-6 before:bg-blue-500 before:rounded-full pl-6'
              >
                {para}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
