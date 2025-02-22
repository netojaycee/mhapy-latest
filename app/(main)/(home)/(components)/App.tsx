import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function App({
  downloadSectionRef,
}: {
  downloadSectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className='bg-[#F6F4FC]'>
      <div
        ref={downloadSectionRef}
        className=' py-16 max-w-5xl px-3 md:px-0 mx-auto w-full flex items-center md:flex-row flex-col space-y-5 md:space-y-10 lg:space-x-10 lg:space-y-0 mt-10 md:mt-0'
      >
        <div className='w-full md:w-[50%] flex flex-col  space-y-3 '>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold font-nunito'>
            Download <span className='text-primary'>mhapy app</span> now!
          </h1>
          <h1 className='text-sm font-bold  w-full'>
            Let&apos;s get your free copy from Apple and Play store{" "}
          </h1>

          <div className='flex space-x-5 md:flex-row flex-col items-start justify-start w-full '>
            <a
              target='_blank'
              href='https://play.google.com/store/apps/details?id=com.mobile.mhapy&pli=1'
            >
              <Button className='bg-white text-primary hover:bg-gray-800 hover:text-white  mt-5 transform transition-transform duration-300 hover:-translate-y-2'>
                {" "}
                <Image
                  width={30}
                  height={30}
                  src={"/images/google.png"}
                  alt='google'
                />{" "}
                Get it on{" "}
                <span className='text-[#b629b6] font-bold'>Google Play</span>
              </Button>{" "}
            </a>
            <a
              href='https://apps.apple.com/kw/app/mhapy-ai-therapy-assistant/id6450757194'
              target='_blank'
            >
              <Button className='bg-white text-primary hover:bg-gray-800 hover:text-white  mt-5 transform transition-transform duration-300 hover:-translate-y-2'>
                <Image
                  width={30}
                  height={30}
                  src={"/images/app.png"}
                  alt='google'
                />{" "}
                Download on{" "}
                <span className='text-[#b629b6] font-bold'>App Store</span>
              </Button>
            </a>
          </div>
        </div>

        <div className='w-full md:w-[50%] flex flex-col items-center justify-center space-y-5 md:space-y-10'>
          <Image
            src='/images/mockup.png'
            alt='hero'
            className='w-full h-full object-cover'
            width={531}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
