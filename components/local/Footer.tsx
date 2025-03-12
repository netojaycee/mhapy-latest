"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FacebookIcon, Instagram, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNewsletterMutation } from "@/redux/appData";

const newsletterSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
});

export default function Footer() {
  const [newsletter, { isLoading, isSuccess, isError, error }] =
    useNewsletterMutation();

  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof newsletterSchema>) => {
    // setGlobalError("");
    try {
      console.log(values);

      await newsletter(values);
    } catch (error) {
      const message =
        (error as { data?: { message?: string } })?.data?.message ||
        "An unexpected error occurred.";
      toast.error(message);
      // setGlobalError(message);
      console.error("An error occurred:", error);
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      toast.success(`Subscribed Successfully`);
      form.reset();
    } else if (isError) {
      if ("data" in error && typeof error.data === "object") {
        const errorMessage = (error.data as { message?: string })?.message;
        //  setGlobalError(errorMessage || "Login failed.");
        toast.error(errorMessage || "Request failed.");
      } else {
        //  setGlobalError("An unexpected error occurred.");
        toast.error("An unexpected error occurred.");
      }
    }
  }, [isSuccess, isError, error, form]);
  return (
    <footer className='bg-primary text-white'>
      {/* Top Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20 py-10 '>
        {/* About Section */}
        {/* <div className='space-y-5'>
          <h1 className='text-3xl font-bold'>mhapy</h1>
          <p className=' leading-relaxed'>
            mhapy is a mental health accountability platform that helps you
            track your mental health progress and connect with mental health
            professionals.
          </p>
        </div> */}
        <AnimatePresence>
          <motion.div
            key='newsletter' // Make sure key is constant for this component to animate once
            initial={{ opacity: 0, y: 20 }} // Starting animation state
            animate={{ opacity: 1, y: 0 }} // Ending animation state
            transition={{ duration: 1 }} // Transition duration
          >
            <div className='max-w-md'>
              <h2 className='text-3xl font-bold'>mhapy</h2>
              {/* <p className='mt-4 text-lg text-[#C5B7DD]'></p> */}

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-4'
                >
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem className='w-full mt-4'>
                        <FormLabel className='font-semibold text-base text-[#C5B7DD]'>
                          Subscribe to our newsletter
                        </FormLabel>
                        <FormControl>
                          <div className='mt-2 relative'>
                            <Input
                              className='w-full px-2 py-2 h-10 pr-20 rounded-md border-none outline-none bg-white text-black'
                              type='email'
                              placeholder='Enter your email address'
                              autoComplete='off'
                              {...field}
                            />

                            <div className='absolute right-1 top-1/2 transform -translate-y-1/2 '>
                              {isLoading ? (
                                <button
                                  disabled
                                  className='flex items-center justify-center gap-1 w-full bg-primary text-white hover:bg-primary/80 px-4 py-1.5 rounded-md font-semibold'
                                  type='submit'
                                >
                                  {" "}
                                  <span>Please wait</span>
                                  <Loader2 className='animate-spin' />
                                </button>
                              ) : (
                                <button
                                  onClick={form.handleSubmit(onSubmit)}
                                  className='w-full bg-primary text-white hover:bg-primary/80 px-4 py-1.5 rounded-md font-semibold'
                                  type='submit'
                                >
                                  Subscribe{" "}
                                </button>
                              )}
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Links */}
        <div className='space-y-5'>
          <h1 className='text-xl font-semibold'>Quick Links</h1>
          {/* <ul className='space-y-2'>
            {["Home", "Blog", "Pricing", "Contact"].map((link, idx) => (
              <li key={idx}>
                <a
                  href={`/${link === "Home" ? "" : link.toLowerCase()}`}
                  className=' hover:text-[#b282f4] transition duration-300'
                >
                  {link}
                </a>
              </li>
            ))}
          </ul> */}

          <ul className='space-y-2'>
            {["Home", "Search Therapists"].map((link, idx) => (
              <li key={idx}>
                <a
                  href={`/${link === "Home" ? "" : link.toLowerCase()}`}
                  className=' hover:text-[#b282f4] transition duration-300'
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className='space-y-5'>
          <h1 className='text-xl font-semibold'>Contact</h1>
          <p className=''>
            1234, 5th Avenue, New York, NY 10001, United States
          </p>
          <p className=''>Email: projectmhapy@gmail.com</p>
          <p className=''>Phone: +1 (555) 123-4567</p>
        </div>
      </div>

      {/* Separator */}
      <Separator />
      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row items-center justify-between px-5 md:px-20 py-5'>
        {/* Footer Branding */}
        <p className='text-sm '>&copy; 2025 mhapy. All Rights Reserved.</p>
        <Image
          src='/images/logo.png'
          alt='mhapy logo'
          width={130}
          height={50}
          className='mt-5 md:mt-0'
        />

        {/* Social Media Links */}
        <div className='flex items-center space-x-5 mt-5 md:mt-0'>
          <a
            href='https://m.facebook.com/mentalhealthaccountability'
            target='_blank'
            className='bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition duration-300'
          >
            <FacebookIcon className='w-6 h-6 text-primary' />
          </a>
          <a
            href='#'
            target='_blank'
            className='bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition duration-300'
          >
            <Instagram className='w-6 h-6 text-primary' />
          </a>
          <a
            href='https://mobile.twitter.com/mhapy_ai'
            target='_blank'
            className='bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition duration-300'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='24'
              height='24'
              viewBox='0 0 50 50'
              fill='#441890'
            >
              <path d='M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z'></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
