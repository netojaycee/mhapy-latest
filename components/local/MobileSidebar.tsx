"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import React from "react";

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className='md:hidden w-10 h-10 cursor-pointer' />
      </SheetTrigger>
      <SheetContent className='z-[9999] overflow-y-auto h-screen' side={"left"}>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetClose asChild>
            <Link href='/' className='w-[164px] h-[44px] '>
              <Image
                className='object-cover w-full h-full'
                width={164}
                height={44}
                src='/images/logo.png'
                alt='mhapy logo'
              />
            </Link>
          </SheetClose>
        </SheetHeader>
        <div className='grid gap-4 py-4 mt-3'>
          <p className='mt-5 text-gray-300'>Site Navigation</p>
          <Separator className='' />
          <ul className=''>
            <li className='py-3'>
              <SheetClose asChild>
                <Link href='/' className='hover:text-primary'>
                  Home
                </Link>
              </SheetClose>
            </li>
            <Separator className='' />

            <li className='py-3'>
              <SheetClose asChild>
                <Link href='/search-therapist' className='hover:text-primary'>
                  Search Therapist
                </Link>
              </SheetClose>
            </li>
            <Separator className='' />
            <li className='py-3 '>
              <SheetClose asChild>
                <Link href='/pricing' className='hover:text-primary'>
                 Pricing
                </Link>
              </SheetClose>
            </li>
            <Separator className='' />

            <li className='py-3'>
              <SheetClose asChild>
                <Link href='/contact' className='hover:text-primary'>
                  Contact
                </Link>
              </SheetClose>
            </li>
            <Separator className='' />

            <li className='py-3'>
              <SheetClose asChild>
                <Link href='/blog' className='hover:text-primary'>
                  Blog
                </Link>
              </SheetClose>
            </li>
            <Separator className='' />
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
