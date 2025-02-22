"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSlider() {
  return (
    <section className='w-full py-16 text-center bg-[#EAE6F3] relative'>
      <div className='max-w-5xl mx-auto px-3 md:px-0'>
        <div className='max-w-3xl mx-auto'>
          <p className='text-lg md:text-xl font-semibold text-gray-800'>
            &quot;mhapy made finding a therapist super easy. I just had to fill
            out what I wanted in my ideal therapist. I liked how it ranked the
            therapists so I could pick the best one for me. It&apos;s been a big
            help for my mental health journey.&quot;
          </p>
        </div>

        <div className='mt-6 flex flex-col items-center'>
          <Image
            src='/images/user-avatar.jpg'
            alt='User Testimonial'
            width={50}
            height={50}
            className='rounded-full'
          />
          <p className='text-sm text-[#5A1DAD] font-semibold mt-2'>
            Idowu Adeyemo
          </p>
        </div>

        {/* Navigation Arrows */}
        <button className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600'>
          <ChevronLeft size={30} />
        </button>
        <button className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600'>
          <ChevronRight size={30} />
        </button>

        {/* Indicator Dots */}
        <div className='mt-4 flex justify-center gap-2'>
          <span className='h-2 w-2 bg-gray-500 rounded-full'></span>
          <span className='h-2 w-2 bg-gray-300 rounded-full'></span>
        </div>
      </div>
    </section>
  );
}
