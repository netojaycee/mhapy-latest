"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TherapistMatchingSteps() {
  return (
    <section className='w-full py-16 max-w-5xl mx-auto text-center px-3 md:px-0'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-[#5A1DAD]'>
          Find Your Perfect Therapist in 3 Simple Steps
        </h2>
      </div>

      <div className='relative max-w-5xl mx-auto mt-10 flex flex-col space-y-10'>
        {/* Step 1 */}
        <div className='flex flex-col md:flex-row items-center md:items-start text-left gap-6'>
          <div className='w-full md:w-1/2'>
            <h3 className='text-lg font-semibold text-[#5A1DAD]'>
              1. Tell us about yourself
            </h3>
            <p className='text-sm text-gray-600 mt-2'>
              Answer a few questions about your needs, preferences, and any
              specific requirements you may have.
            </p>
            <Button
              variant='outline'
              className='mt-4 text-[#5A1DAD] border-[#5A1DAD]'
            >
              Learn More
            </Button>
          </div>
          <div className='w-full md:w-1/2 flex '>
            <Image
              src='/images/step-1.jpg'
              alt='Tell us about yourself'
              width={350}
              height={250}
              className='rounded-lg object-cover bg-gray-400'
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className='flex flex-col md:flex-row-reverse items-center md:items-start text-left gap-6'>
          <div className='w-full md:w-1/2'>
            <h3 className='text-lg font-semibold text-[#5A1DAD]'>
              2. Discover personalized recommendations
            </h3>
            <p className='text-sm text-gray-600 mt-2'>
              Our AI algorithm analyzes your information and provides a list of
              therapists who best match your needs.
            </p>
            <Button
              variant='outline'
              className='mt-4 text-[#5A1DAD] border-[#5A1DAD]'
            >
              Learn More
            </Button>
          </div>
          <div className='w-full md:w-1/2 flex'>
            <Image
              src='/images/step-2.jpg'
              alt='Discover personalized recommendations'
              width={350}
              height={250}
              className='rounded-lg object-cover bg-gray-400'
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className='flex flex-col md:flex-row items-center md:items-start text-left gap-6'>
          <div className='w-full md:w-1/2'>
            <h3 className='text-lg font-semibold text-[#5A1DAD]'>
              3. Choose your therapist and start your journey
            </h3>
            <p className='text-sm text-gray-600 mt-2'>
              Review therapist profiles, read user reviews, and select the
              therapist that resonates with confidence.
            </p>
            <Button
              variant='outline'
              className='mt-4 text-[#5A1DAD] border-[#5A1DAD]'
            >
              Learn More
            </Button>
          </div>
          <div className='w-full md:w-1/2 flex '>
            <Image
              src='/images/step-3.jpg'
              alt='Choose your therapist and start your journey'
              width={350}
              height={250}
              className='rounded-lg object-cover bg-gray-400'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
