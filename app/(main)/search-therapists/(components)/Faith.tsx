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
  faith: z.string().min(1, "Please select an option"),
});

type FaithFormValues = z.infer<typeof formSchema>;
interface FaithProps {
  defaultValues?: {question: string; answer: string};
}

const Faith = forwardRef((props: FaithProps, ref) => {
  const form = useForm<FaithFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: props.defaultValues
      ? { faith: props.defaultValues.answer }
      : { faith: "" },
  });

  useEffect(() => {
    if (props.defaultValues?.answer) {
      form.setValue("faith", props.defaultValues.answer);
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
            name='faith'
            render={({ field }) => (
              <FormItem className='space-y-3 w-full'>
                <FormLabel className='font-semibold font-nunito text-base'>
                  Which aspect of your identity holds significance for you?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className='flex flex-col space-y-1'
                  >
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='Christian' />
                      </FormControl>
                      <FormLabel className='font-normal'>Christian</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='Muslim' />
                      </FormControl>
                      <FormLabel className='font-normal'>Muslim</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='Hindu' />
                      </FormControl>
                      <FormLabel className='font-normal'>Hindu</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='Sikh' />
                      </FormControl>
                      <FormLabel className='font-normal'>Sikh</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='Spiritual but not religious' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        Spiritual but not religious
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='Atheist' />
                      </FormControl>
                      <FormLabel className='font-normal'>Atheist</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='Not Significant' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        This does not hold significance for me
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

Faith.displayName = "Faith";
export default Faith;
