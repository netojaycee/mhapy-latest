"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function TherapyRecommendations() {
  return (
    <section className='w-full py-12 md:py-16 lg:py-20  text-center bg-[#F6F4FC]'>
      <div className="max-w-5xl mx-auto px-3 md:px-0">
      <div className='max-w-4xl mx-auto'>
        <motion.h1
          className='text-3xl md:text-4xl font-bold text-[#5A1DAD]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Personalized Therapy Recommendations, Just for You
        </motion.h1>
        <motion.p
          className='mt-3 text-gray-600 text-sm md:text-base'
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          mhapy makes finding the right therapist easier by offering
          personalized recommendations tailored to your unique needs. Whether
          you&aapos;re dealing with anxiety, depression, relationship struggles, or
          just looking to improve your well-being, mhapy matches you with a
          therapist who fits your goals and preferences.
        </motion.p>
      </div>

      <div className='grid md:grid-cols-3 gap-6 mt-8'>
        {/* Card 1 */}
        <div className='overflow-hidden'>
          <div className='p-4 md:p-6'>
            <Image
              src='/images/matching-algorithm.jpg'
              alt='Advanced Matching Algorithm'
              width={500}
              height={300}
              className='rounded-lg mb-4 w-full h-40 bg-gray-400 object-cover'
            />
            <h3 className='text-left text-lg font-semibold text-[#5A1DAD]'>
              Advanced Matching Algorithm
            </h3>
            <p className='text-left  text-sm text-gray-600 mt-2'>
              Our AI-powered algorithm considers therapy type, specialization,
              location, availability, and your preferences to provide highly
              accurate therapist recommendations.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='overflow-hidden mt-0 md:mt-10'>
          <div className='p-4 md:p-6'>
            <Image
              src='/images/therapy-goals.jpg'
              alt='Customized Therapy Goals'
              width={500}
              height={300}
              className='rounded-lg mb-4 w-full h-40 bg-gray-400 object-cover'
            />
            <h3 className='text-left  text-lg font-semibold text-[#5A1DAD]'>
              Customized Therapy Goals
            </h3>
            <p className='text-left  text-sm text-gray-600 mt-2'>
              Input your specific therapy goals, preferences, and requirements
              to receive personalized therapist recommendations that align with
              your needs.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='overflow-hidden mt-0 md:mt-20'>
          <div className='p-4 md:p-6'>
            <Image
              src='/images/user-reviews.jpg'
              alt='Trusted User Reviews'
              width={500}
              height={300}
              className='rounded-lg mb-4 w-full h-40 bg-gray-400 object-cover'
            />
            <h3 className='text-left  text-lg font-semibold text-[#5A1DAD]'>
              Trusted User Reviews
            </h3>
            <p className='text-left  text-sm text-gray-600 mt-2'>
              Make informed decisions based on user reviews and ratings for
              therapists. Choose therapists with a proven track record of
              providing quality therapy services.
            </p>
          </div>
        </div>
      </div>
    </div></section>
  );
}
