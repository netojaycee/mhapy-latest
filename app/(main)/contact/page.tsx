"use client";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useState } from "react";
import ErrorMessage from "@/components/local/errorMessage";
import { contactSchema } from "@/lib/zodSchema";
import { Textarea } from "@/components/ui/textarea";

// import { toast } from "sonner";

export default function Contact() {
  const [globalError, setGlobalError] = useState<string>("");

  //   const [
  //     login,
  //     {
  //       isLoading: isLoadingLogin,
  //       isSuccess: isSuccessLogin,
  //       isError: isErrorLogin,
  //       error: errorLogin,
  //       data: dataLogin,
  //     },
  //   ] = useLoginMutation();
  const isLoading = false;
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    setGlobalError("");
    try {
      console.log(values);

      //   await login(values);
    } catch (error) {
      //   const message =
      //     (error as { data?: { message?: string } })?.data?.message ||
      //     "An unexpected error occurred.";
      //   toast.error(message);
      //   setGlobalError(message);
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className='flex flex-col space-y-8 px-2 md:px-10'>
      <span className='flex flex-col items-center space-y-4'>
        <p className='text-base text-primary font-semibold'>Get in Touch </p>
        <h2 className='text-4xl font-bold w-[50%] text-center'>
          Connecting People With Knowledge
        </h2>
      </span>

      <div className='rounded-[12px] bg-gradient-to-br from-primary/80 to-primary/50 min-h-10 p-5 grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='bg-white flex flex-col gap-3 items-center p-3 shadow-md'>
          <PhoneCall className='' />
          <p className=''>+1 (555) 123-4567</p>
        </div>

        <div className='bg-white flex flex-col gap-3 items-center p-3 shadow-md'>
          <Mail className='' />
          <p className=''>+1 (555) 123-4567</p>
        </div>

        <div className='bg-white flex flex-col gap-3 items-center p-3 shadow-md'>
          <MapPin className='' />
          <p className=''>+1 (555) 123-4567</p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <AnimatePresence>
          <motion.div
            key='signInForm' // Make sure key is constant for this component to animate once
            initial={{ opacity: 0, y: 20 }} // Starting animation state
            animate={{ opacity: 1, y: 0 }} // Ending animation state
            transition={{ duration: 1 }} // Transition duration
          >
            <div className=''>
              {globalError && <ErrorMessage error={globalError} />}

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-4'
                >
                  {/* Name & Email */}
                  <div className='flex flex-col md:flex-row gap-5'>
                    <FormField
                      control={form.control}
                      name='name'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormLabel className='font-semibold text-base'>
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              className='w-full'
                              type='text'
                              placeholder='Enter your full name'
                              autoComplete='off'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormLabel className='font-semibold text-base'>
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              className='w-full'
                              type='email'
                              placeholder='Enter your email'
                              autoComplete='off'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Subject & Phone */}
                  <div className='flex flex-col md:flex-row gap-5'>
                    <FormField
                      control={form.control}
                      name='subject'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormLabel className='font-semibold text-base'>
                            Subject
                          </FormLabel>
                          <FormControl>
                            <Input
                              className='w-full'
                              type='text'
                              placeholder='Enter subject'
                              autoComplete='off'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='phone'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormLabel className='font-semibold text-base'>
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input
                              className='w-full'
                              type='tel'
                              placeholder='Enter your phone number'
                              autoComplete='off'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Message */}
                  <div className='flex flex-col gap-5'>
                    <FormField
                      control={form.control}
                      name='message'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormLabel className='font-semibold text-base'>
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              className='w-full'
                              placeholder='Type your message here...'
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className='w-1/3 mt-5'>
                    {isLoading ? (
                      <Button
                        disabled
                        className='flex items-center justify-center gap-1 w-full'
                        type='submit'
                      >
                        <span>Please wait</span>
                        <Loader2 className='animate-spin' />
                      </Button>
                    ) : (
                      <Button className='w-full' type='submit'>
                        Send Message
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
