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
  financialPreference: z.string().min(1, "Please select an option"),
});

type FinancialPreferenceFormValues = z.infer<typeof formSchema>;
interface FinancialPreferenceProps {
  defaultValues?: { question: string; answer: string };
}

const FinancialPreference = forwardRef((props: FinancialPreferenceProps, ref) => {
  const form = useForm<FinancialPreferenceFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: props.defaultValues
      ? { financialPreference: props.defaultValues.answer }
      : { financialPreference: "" },
  });

  useEffect(() => {
    if (props.defaultValues?.answer) {
      form.setValue("financialPreference", props.defaultValues.answer);
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
          name='financialPreference'
          render={({ field }) => (
            <FormItem className='space-y-3 w-full'>
              <FormLabel className='font-semibold font-nunito text-base'>
                Is money tight for you?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className='flex flex-col space-y-1'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='Money is not a problem' />
                    </FormControl>
                    <FormLabel className='font-normal'>
                      Money is not a problem
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='I want something affordable' />
                    </FormControl>
                    <FormLabel className='font-normal'>
                      I want something affordable
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='The lower the price, the better for me' />
                    </FormControl>
                    <FormLabel className='font-normal'>
                      The lower the price, the better for me
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='I want a therapist with a sliding scale' />
                    </FormControl>
                    <FormLabel className='font-normal'>
                      I want a therapist with a sliding scale
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

FinancialPreference.displayName = "FinancialPreference";
export default FinancialPreference;
