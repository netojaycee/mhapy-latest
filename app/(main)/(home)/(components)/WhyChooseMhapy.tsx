"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WhyChooseMhapy() {
  return (
    <section className='relative w-full py-16  text-center bg-[#5A1DAD] text-white'>
      <div className='max-w-5xl mx-auto px-3 md:px-0'>
        {/* Background Overlay */}
        <div className='absolute inset-0 bg-black/30'></div>

        <div className='relative max-w-4xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold'>Why Choose Mhapy?</h2>
          <p className='mt-3 text-white text-sm md:text-base opacity-80'>
            Our AI-driven matching system ensures you connect with the right
            therapist for your needs. Experience personalized, secure, and
            expert-backed therapy recommendations.
          </p>
        </div>

        {/* Cards Section */}
        <div className='relative grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto'>
          {/* Card 1 - AI Matching */}
          <Card className='bg-white text-black shadow-lg rounded-lg overflow-hidden'>
            <CardContent className='p-0 text-center'>
              <Image
                src='/images/ai-matching.jpg'
                alt='Smart AI Matching'
                width={500}
                height={300}
                className='rounded-lg mb-2 w-full h-[180px] object-cover'
              />
              <div className='p-4 md:p-6'>
                <h3 className='text-lg font-semibold text-[#5A1DAD]'>
                  Smart AI Matching
                </h3>
                <p className='text-sm text-gray-600 mt-2'>
                  Our advanced AI analyzes your responses and pairs you with the
                  best therapist for your unique needs.
                </p>
                <Button
                  variant='outline'
                  className='mt-4 text-[#5A1DAD] border-[#5A1DAD]'
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 - Verified Therapists */}
          <Card className='bg-white text-black shadow-lg rounded-lg overflow-hidden'>
            <CardContent className='p-0 text-center'>
              <Image
                src='/images/verified-therapists.jpg'
                alt='Diverse & Verified Therapists'
                width={500}
                height={300}
                className='rounded-lg mb-2 w-full h-[180px] object-cover object-top'
              />
              <div className='p-4 md:p-6'>
                <h3 className='text-lg font-semibold text-[#5A1DAD]'>
                  Diverse & Verified Therapists
                </h3>
                <p className='text-sm text-gray-600 mt-2'>
                  Get access to a wide range of licensed professionals with
                  various specializations.
                </p>
                <Button
                  variant='outline'
                  className='mt-4 text-[#5A1DAD] border-[#5A1DAD]'
                >
                  Meet Experts
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 - Privacy & Security */}
          <Card className='bg-white text-black shadow-lg rounded-lg overflow-hidden'>
            <CardContent className='p-0 text-center'>
              <Image
                src='/images/secure-privacy.jpg'
                alt='Confidential & Secure'
                width={500}
                height={300}
                className='rounded-lg mb-2 w-full h-[180px] object-cover'
              />
              <div className='p-4 md:p-6'>
                <h3 className='text-lg font-semibold text-[#5A1DAD]'>
                  Confidential & Secure
                </h3>
                <p className='text-sm text-gray-600 mt-2 h-8'>
                  Your personal data and therapy sessions are protected with the
                  highest privacy standards.
                </p>
                <Button
                  variant='outline'
                  className='mt-4 text-[#5A1DAD] border-[#5A1DAD]'
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
