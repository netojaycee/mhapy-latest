"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useEffect, useImperativeHandle, forwardRef } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  therapyFor: z.string().min(1, "Please select an option"),
});

type TherapyForFormValues = z.infer<typeof formSchema>;
interface TherapyForProps {
  defaultValues?: { question: string; answer: string };
}

const TherapyFor = forwardRef((props: TherapyForProps, ref) => {
  const form = useForm<TherapyForFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: props.defaultValues
      ? { therapyFor: props.defaultValues.answer }
      : { therapyFor: "" },
  });

  useEffect(() => {
    if (props.defaultValues?.answer) {
      form.setValue("therapyFor", props.defaultValues.answer);
    }
  }, [props.defaultValues, form]);

  useImperativeHandle(ref, () => ({
    async validateAndGetData() {
      let isValid = false;
      let values = form.getValues();

      await form.handleSubmit(
        (data) => {
          isValid = true;
          values = data;
        },
        () => {
          isValid = false;
        }
      )();

      return { isValid, values };
    },
  }));

 return (
   <div className='w-full'>
     <Form {...form}>
       <form className='space-y-2'>
         <FormField
           control={form.control}
           name='therapyFor'
           render={({ field }) => (
             <FormItem className='space-y-3 w-full'>
               <FormLabel className='font-semibold font-nunito text-base'>
                 Who are you seeking therapy for?
               </FormLabel>
               <FormControl>
                 <RadioGroup
                   onValueChange={field.onChange}
                   value={field.value}
                   className='flex flex-col space-y-1'
                 >
                   <FormItem className='flex items-center space-x-3 space-y-0'>
                     <FormControl>
                       <RadioGroupItem value='For myself' />
                     </FormControl>
                     <FormLabel className='font-normal'>For myself</FormLabel>
                   </FormItem>
                   <FormItem className='flex items-center space-x-3 space-y-0'>
                     <FormControl>
                       <RadioGroupItem value='For myself and my partner as a couple' />
                     </FormControl>
                     <FormLabel className='font-normal'>
                       For myself and my partner as a couple
                     </FormLabel>
                   </FormItem>
                   <FormItem className='flex items-center space-x-3 space-y-0'>
                     <FormControl>
                       <RadioGroupItem value='For my whole family' />
                     </FormControl>
                     <FormLabel className='font-normal'>
                       For my whole family
                     </FormLabel>
                   </FormItem>
                   <FormItem className='flex items-center space-x-3 space-y-0'>
                     <FormControl>
                       <RadioGroupItem value='For a child (12 and under)' />
                     </FormControl>
                     <FormLabel className='font-normal'>
                       For a child (12 and under)
                     </FormLabel>
                   </FormItem>
                   <FormItem className='flex items-center space-x-3 space-y-0'>
                     <FormControl>
                       <RadioGroupItem value='For a teen' />
                     </FormControl>
                     <FormLabel className='font-normal'>For a teen</FormLabel>
                   </FormItem>
                   <FormItem className='flex items-center space-x-3 space-y-0'>
                     <FormControl>
                       <RadioGroupItem value='For someone else (another adult)' />
                     </FormControl>
                     <FormLabel className='font-normal'>
                       For someone else (another adult)
                     </FormLabel>
                   </FormItem>
                 </RadioGroup>
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />
       </form>
     </Form>
   </div>
 );


});

TherapyFor.displayName = "TherapyFor";
export default TherapyFor;
