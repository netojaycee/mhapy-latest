"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    text: "mhapy made finding a therapist super easy. I just had to fill out what I wanted in my ideal therapist. I liked how it ranked the therapists so I could pick the best one for me. It's been a big help for my mental health journey.",
    name: "Idowu Adeyemo",
    image: "/images/adeyemo.jpg",
  },
  // {
  //   text: "I never knew finding the right therapist could be this seamless. mhapy's ranking system was spot on!",
  //   name: "Sarah Johnson",
  //   image: "/images/user-avatar.jpg",
  // },
  // {
  //   text: "The process was smooth and efficient. I love how intuitive the platform is.",
  //   name: "Michael Smith",
  //   image: "/images/user-avatar.jpg",
  // },
];

export default function TestimonialSlider() {
  return (
    <section className='w-full py-16 text-center bg-[#EAE6F3] relative'>
      <div className='max-w-5xl mx-auto px-3 md:px-0'>
        <Carousel className='w-full max-w-3xl mx-auto'>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className='p-1'>
                  <div >
                    <div className='flex flex-col items-center justify-center p-6'>
                      <p className='text-lg md:text-xl font-semibold text-gray-800'>
                        &apos;{testimonial.text}&apos;
                      </p>
                      <div className='mt-6 flex flex-col items-center'>
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className='rounded-full object-cover w-20 h-20'
                        />
                        <p className='text-sm text-[#5A1DAD] font-semibold mt-2'>
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
