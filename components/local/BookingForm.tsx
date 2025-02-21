"use client";
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
import { useBookMutation } from "@/redux/appData";

const bookingSchema = z.object({
  name: z
    .string({ required_error: "name is required" })
    .min(1, "Name is required"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
});

export default function BookingForm({
  bookingLink,
  therapistName,
  therapistEmail,
  setOpenForm,
}: {
  bookingLink: string;
  therapistName: string;
  therapistEmail: string;
  setOpenForm: (value: boolean) => void;
}) {
  const [globalError, setGlobalError] = useState<string>("");

  const [book, { isLoading, isSuccess, isError, error, data }] =
    useBookMutation();

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof bookingSchema>) => {
    setGlobalError("");
    try {
      // console.log(values);
      const credentials = {
        therapistName: therapistName,
        // therapistEmail: therapistEmail,
        therapistEmail: "netojaycee@gmail.com",
        name: values.name,
        email: values.email,
        // bookingLink: bookingLink,
      };

      await book(credentials);
      console.log(credentials, therapistEmail);
    } catch (error) {
      const message =
        (error as { data?: { message?: string } })?.data?.message ||
        "An unexpected error occurred.";
      setGlobalError(message);
      console.error("An error occurred:", error);
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      //   console.log(data);
      setOpenForm(false);
      window.open(bookingLink, "_blank");
    } else if (isError) {
      if ("data" in error && typeof error.data === "object") {
        const errorMessage = (error.data as { message?: string })?.message;
        setGlobalError(errorMessage || "Login failed.");
      } else {
        setGlobalError("An unexpected error occurred.");
      }
    }
  }, [isSuccess, isError, error, data, bookingLink, setOpenForm]);

  return (
    <div className='flex flex-col items-center justify-center w-full '>
      <AnimatePresence>
        <motion.div
          key='bookingForm' // Make sure key is constant for this component to animate once
          initial={{ opacity: 0, y: 20 }} // Starting animation state
          animate={{ opacity: 1, y: 0 }} // Ending animation state
          transition={{ duration: 1 }} // Transition duration
        >
          <div className='w-full border p-6 rounded-[16px]'>
            {/* <h1 className='text-[24px] font-bold text-[#161616] dark:text-gray-300 font-satoshi mb-5'>
              Secure Your Session
            </h1> */}
            <h1 className='text-xl lg:text-[30px] font-medium mb-4 font-satoshi'>
              Book an Appointment
            </h1>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>
              You&apos;re one step closer to prioritizing your well-being.
              Please provide your details below, and we&apos;ll notify your
              therapist. After submission, you&apos;ll be redirected to their
              scheduling page.
            </p>

            <div className=''>
              {globalError && <ErrorMessage error={globalError} />}

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-4'
                >
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='font-semibold text-base'>
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className='w-full'
                            type='text'
                            placeholder='John Doe'
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
                            placeholder='johndoe@gmail.com'
                            autoComplete='off'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className='w-full mt-5'>
                    {isLoading ? (
                      <Button
                        disabled
                        className='flex items-center justify-center gap-1 w-full'
                        type='submit'
                      >
                        {" "}
                        <span>Please wait</span>
                        <Loader2 className='animate-spin' />
                      </Button>
                    ) : (
                      <Button className='w-full' type='submit'>
                        Submit
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
