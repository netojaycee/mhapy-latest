import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight, Menu } from "lucide-react";

export default function Header() {
  const nav = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header className='px-2 md:px-10 shadow-md md:shadow-none bg-white'>
      <div className='flex items-center justify-between py-4'>
        <div className=''>
          <Image
            className=''
            src={"/images/logo.png"}
            width={130}
            height={44}
            alt='logo'
            quality={100}
          />
        </div>{" "}
        <nav>
          <ul className='md:space-x-10 space-x-5 items-center flex'>
            {nav.map((item) => (
              <li key={item.name} className='hidden md:inline-block'>
                <Link
                  href={item.href}
                  className='hover:text-primary/80 transition-colors duration-300 text-base font-semibold'
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <Button className="h-10 md:h-12">
              Get Started <ChevronRight className='' />
            </Button>
            <Menu className='md:hidden w-10 h-10' />
          </ul>
        </nav>
      </div>
    </header>
  );
}
