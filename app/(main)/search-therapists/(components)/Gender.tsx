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
  gender: z.string().min(1, "Please select an option"),
});

type GenderFormValues = z.infer<typeof formSchema>;
interface GenderProps {
  defaultValues?: { question: string; answer: string };
}

const Gender = forwardRef((props: GenderProps, ref) => {
 const form = useForm<GenderFormValues>({
   resolver: zodResolver(formSchema),
   defaultValues: props.defaultValues
     ? { gender: props.defaultValues.answer }
     : { gender: "" },
 });

  useEffect(() => {
    if (props.defaultValues?.answer) {
      form.setValue("gender", props.defaultValues.answer);
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
            name='gender'
            render={({ field }) => (
              <FormItem className='space-y-3 w-full'>
                <FormLabel className='font-semibold font-nunito text-base'>
                  Is the gender of your therapist important to you?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className='flex flex-col space-y-1'
                  >
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='No, this is not important' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        No, this is not important
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='I prefer a woman' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        I prefer a woman
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='I prefer a man' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        I prefer a man
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='I prefer a non-binary person' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        I prefer a non-binary person
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

Gender.displayName = "Faith";
export default Gender;
