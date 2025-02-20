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
  ethnicity: z.string().min(1, "Please select an option"),
});

type EthnicityFormValues = z.infer<typeof formSchema>;

interface EthnicityProps {
  defaultValues?: { question: string; answer: string };
}
const Ethnicity = forwardRef((props: EthnicityProps, ref) => {
  const form = useForm<EthnicityFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: props.defaultValues
      ? { ethnicity: props.defaultValues.answer }
      : { ethnicity: "" },
  });

  useEffect(() => {
    if (props.defaultValues?.answer) {
      form.setValue("ethnicity", props.defaultValues.answer);
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
            name='ethnicity'
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
                        <RadioGroupItem value='asian' />
                      </FormControl>
                      <FormLabel className='font-normal'>Asian</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='black' />
                      </FormControl>
                      <FormLabel className='font-normal'>Black</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='Hispanic and Latino' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        Hispanic and Latino
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='Indigenous Heritage' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        Indigenous Heritage
                      </FormLabel>
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

Ethnicity.displayName = "Ethnicity";
export default Ethnicity;
