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
  sexuality: z.string().min(1, "Please select an option"),
});

type SexualityFormValues = z.infer<typeof formSchema>;
interface SexualityProps {
  defaultValues?: { question: string; answer: string };
}

const Sexuality = forwardRef((props: SexualityProps, ref) => {
 const form = useForm<SexualityFormValues>({
   resolver: zodResolver(formSchema),
   defaultValues: props.defaultValues
     ? { sexuality: props.defaultValues.answer }
     : { sexuality: "" },
 });

  useEffect(() => {
    if (props.defaultValues?.answer) {
      form.setValue("sexuality", props.defaultValues.answer);
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
            name='sexuality'
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
                        <RadioGroupItem value='Straight' />
                      </FormControl>
                      <FormLabel className='font-normal'>Straight</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='LGBTQ+' />
                      </FormControl>
                      <FormLabel className='font-normal'>LGBTQ+</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='Bisexual' />
                      </FormControl>
                      <FormLabel className='font-normal'>Bisexual</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='Lesbian' />
                      </FormControl>
                      <FormLabel className='font-normal'>Lesbian</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='Queer' />
                      </FormControl>
                      <FormLabel className='font-normal'>Queer</FormLabel>
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

Sexuality.displayName = "Sexuality";
export default Sexuality;
