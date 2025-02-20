// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { motion, AnimatePresence } from "framer-motion";
// import Ethnicity from "./(components)/Ethnicity";
// import { ChildFormRef } from "@/lib/types";
// import { ArrowLeft, File } from "lucide-react";
// import Sexuality from "./(components)/Sexuality";
// import Faith from "./(components)/Faith";
// import Gender from "./(components)/Gender";
// import TherapyFor from "./(components)/TherapyFor";
// import Religion from "./(components)/Religion";
// import FinancialPreference from "./(components)/FinancialPreference";

// interface FormDataInterface {
//   ethnicity: {
//     ethnicity: string;
//   };
//   sexuality: {
//     sexuality: string;
//   };
//   faith: {
//     faith: string;
//   };
//   gender: {
//     gender: string;
//   };
//   religion: {
//     religion: string;
//   };
//   therapyFor: {
//     therapyFor: string;
//   };
//   financialPreference: {
//     financialPreference: string;
//   };
// }

// export default function TherapistMatchingForm() {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState<FormDataInterface | null>(null);

//   const ethnicityRef = useRef<ChildFormRef>(null);
//   const sexualityRef = useRef<ChildFormRef>(null);
//   const faithRef = useRef<ChildFormRef>(null);
//   const genderRef = useRef<ChildFormRef>(null);
//   const religionRef = useRef<ChildFormRef>(null);
//   const therapyForRef = useRef<ChildFormRef>(null);
//   const financialPreferenceRef = useRef<ChildFormRef>(null);

//   const forms = [
//     {
//       keyInFormData: "ethnicity",
//       title: "Ethnicity",
//       question:
//         "Which aspect of your identity holds significance for you: Ethnicity",
//       component: (
//         <Ethnicity defaultValues={formData?.ethnicity} ref={ethnicityRef} />
//       ),
//       ref: ethnicityRef,
//     },
//     {
//       keyInFormData: "sexuality",
//       title: "Sexuality",
//       question:
//         "Which aspect of your identity holds significance for you: Sexuality",
//       component: (
//         <Sexuality defaultValues={formData?.sexuality} ref={sexualityRef} />
//       ),
//       ref: sexualityRef,
//     },
//     {
//       keyInFormData: "faith",
//       title: "Faith",
//       question:
//         "Which aspect of your identity holds significance for you: Faith",
//       component: <Faith defaultValues={formData?.faith} ref={faithRef} />,
//       ref: faithRef,
//     },
//     {
//       keyInFormData: "gender",
//       title: "Gender",
//       question: "Is the gender of your therapist important to you?",
//       component: <Gender defaultValues={formData?.gender} ref={genderRef} />,
//       ref: genderRef,
//     },
//     {
//       keyInFormData: "religion",
//       title: "Religion",
//       question: "Is the gender of your therapist important to you?",
//       component: (
//         <Religion defaultValues={formData?.religion} ref={religionRef} />
//       ),
//       ref: religionRef,
//     },
//     {
//       keyInFormData: "therapyFor",
//       title: "Therapy For",
//       question: "Is the gender of your therapist important to you?",
//       component: (
//         <TherapyFor defaultValues={formData?.therapyFor} ref={therapyForRef} />
//       ),
//       ref: therapyForRef,
//     },
//     {
//       keyInFormData: "financialPreference",
//       title: "Financial Preference",
//       question: "Is money tight for you?",
//       component: (
//         <FinancialPreference
//           defaultValues={formData?.financialPreference}
//           ref={financialPreferenceRef}
//         />
//       ),
//       ref: financialPreferenceRef,
//     },
//   ];

//   const maxSteps = forms.length + 2;

//   useEffect(() => {
//     const savedData = localStorage.getItem("therapistFormData");
//     if (savedData) {
//       setFormData(JSON.parse(savedData));
//     }
//   }, []);

//   const handleNext = async () => {
//     // Skip validation for steps 0 and 10
//     if (step === 0 || step === 8) {
//       setStep((prev) => prev + 1);
//       return;
//     }

//     const currentStepObj = forms[step - 1];
//     const currentRef = currentStepObj.ref.current;
//     if (!currentRef) return;

//     const { isValid, values } = await currentRef.validateAndGetData();
//     if (isValid) {
//       // Prepare data for this step only
//       const stepData: Record<string, any> = {
//         [currentStepObj.keyInFormData]: values,
//       };
//       console.log(values);

//       // localStorage.setItem("therapistFormData", JSON.stringify(values));
//       //  setFormData((prev) => ({
//       //       ...prev,
//       //       ...stepData,
//       //     }));

//       setStep((prev) => prev + 1);
//     }
//   };

//   const handleBack = () => {
//     if (step > 0) setStep(step - 1);
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         key={step}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className='h-[70vh] max-w-4xl mx-auto py-10 flex items-center justify-center flex-col space-y-6'
//       >
//         <div className='w-full'>
//           {step === 0 ? (
//             <div className='text-center space-y-6'>
//               <h2 className='text-2xl font-semibold text-gray-800'>
//                 Tell us about what is important to you.
//               </h2>
//               <p className='text-gray-600'>
//                 Which aspects of your identity hold the most significance for
//                 you?
//               </p>
//               {/* <Button onClick={handleNext}>Next</Button> */}
//             </div>
//           ) : step === 8 ? (
//             <div className='text-center space-y-6'>
//               <h2 className='text-2xl font-semibold text-gray-800'>
//                 Thank you for sharing.{" "}
//               </h2>
//               {/* <p className='text-gray-600'>
//                 Which aspects of your identity hold the most significance for
//                 you?
//               </p> */}
//               {/* <Button onClick={handleNext}>Next</Button> */}
//             </div>
//           ) : (
//             <div className='px-4 py-4 space-y-6'>
//               <div className='space-y-3'>
//                 <div className='flex justify-between items-center'>
//                   <span className='font-semibold flex gap-2 items-center'>
//                     <span className='bg-[#F8F8F8] p-2 rounded-full text-[#888888]'>
//                       <File className='w-6 h-6' />
//                     </span>{" "}
//                     <>{forms[step - 1].title}</>
//                   </span>
//                   <span className='text-xs text-gray-500'>
//                     Completed {step} of {maxSteps - 2}
//                   </span>
//                 </div>

//                 <div className='mt-2 flex space-x-2'>
//                   {Array.from({ length: maxSteps - 2 }).map((_, index) => {
//                     let bgColor = "bg-gray-300";

//                     if (index === step - 1) {
//                       bgColor = "bg-blue-600";
//                     }
//                     // else if (completedSteps[index]) {
//                     //   bgColor = "bg-green-600";
//                     // }

//                     return (
//                       <div
//                         key={index}
//                         className={`h-3 flex-1
//           ${index === 0 ? "rounded-l-2xl" : ""}
//           ${index === 5 - 1 ? "rounded-r-2xl" : ""}
//           ${bgColor}
//         `}
//                       ></div>
//                     );
//                   })}
//                 </div>
//               </div>
//               <div className='p-6 flex-grow bg-white dark:bg-gray-800 shadow-lg rounded-xl'>
//                 {forms[step - 1].component}
//               </div>
//             </div>
//           )}
//         </div>
//         <div className='flex w-full gap-10 mt-10'>
//           {step > 0 && step < 7 ? (
//             <Button
//               variant='secondary'
//               onClick={handleBack}
//               className='w-1/2 flex items-center'
//             >
//               <ArrowLeft className='mr-auto' />
//               <span className='flex-grow text-center'>Previous</span>
//             </Button>
//           ) : (
//             <div className='w-1/2 ' />
//           )}

//           <Button onClick={handleNext} className='w-1/2 flex items-center'>
//             <span className='flex-grow text-center'>
//               {step === 8
//                 ? "See which therapists match your preferences"
//                 : "Next"}
//             </span>
//           </Button>
//         </div>

//         {/* {step === 2 && (
//           <Form {...form}>
//             <form className='space-y-6'>
//               <FormField
//                 control={form.control}
//                 name='sexuality'
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>
//                       Which aspect of your identity holds significance for you:
//                       Sexuality
//                     </FormLabel>
//                     <RadioGroup
//                       value={field.value}
//                       onValueChange={field.onChange}
//                     >
//                       <RadioGroupItem value='Straight'>Straight</RadioGroupItem>
//                       <RadioGroupItem value='LGBTQ+'>LGBTQ+</RadioGroupItem>
//                       <RadioGroupItem value='Bisexual'>Bisexual</RadioGroupItem>
//                       <RadioGroupItem value='Lesbian'>Lesbian</RadioGroupItem>
//                       <RadioGroupItem value='Queer'>Queer</RadioGroupItem>
//                       <RadioGroupItem value='Not significant'>
//                         This does not hold significance for me
//                       </RadioGroupItem>
//                     </RadioGroup>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button onClick={handleNext}>Next</Button>
//             </form>
//           </Form>
//         )} */}
//       </motion.div>
//     </AnimatePresence>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, File } from "lucide-react";
// import { useMatchTherapistsMutation } from "@/redux/api";
import Ethnicity from "./(components)/Ethnicity";
import Sexuality from "./(components)/Sexuality";
import Faith from "./(components)/Faith";
import Gender from "./(components)/Gender";
import TherapyFor from "./(components)/TherapyFor";
import Religion from "./(components)/Religion";
import FinancialPreference from "./(components)/FinancialPreference";
import { ChildFormRef } from "@/lib/types";
import LoadingModal from "@/components/local/LoadingModal";

interface FormDataInterface {
  [key: string]: { question: string; answer: string };
}

export default function TherapistMatchingForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormDataInterface>({});
  // const [matchTherapists, { isLoading }] = useMatchTherapistsMutation();

  const ethnicityRef = useRef<ChildFormRef>(null);
  const sexualityRef = useRef<ChildFormRef>(null);
  const faithRef = useRef<ChildFormRef>(null);
  const genderRef = useRef<ChildFormRef>(null);
  const religionRef = useRef<ChildFormRef>(null);
  const therapyForRef = useRef<ChildFormRef>(null);
  const financialPreferenceRef = useRef<ChildFormRef>(null);

  const forms = [
    {
      keyInFormData: "ethnicity",
      title: "Ethnicity",
      question:
        "Which aspect of your identity holds significance for you: Ethnicity",
      component: (
        <Ethnicity defaultValues={formData?.ethnicity} ref={ethnicityRef} />
      ),
      ref: ethnicityRef,
    },
    {
      keyInFormData: "sexuality",
      title: "Sexuality",
      question:
        "Which aspect of your identity holds significance for you: Sexuality",
      component: (
        <Sexuality defaultValues={formData?.sexuality} ref={sexualityRef} />
      ),
      ref: sexualityRef,
    },
    {
      keyInFormData: "faith",
      title: "Faith",
      question:
        "Which aspect of your identity holds significance for you: Faith",
      component: <Faith defaultValues={formData?.faith} ref={faithRef} />,
      ref: faithRef,
    },
    {
      keyInFormData: "gender",
      title: "Gender",
      question: "Is the gender of your therapist important to you?",
      component: <Gender defaultValues={formData?.gender} ref={genderRef} />,
      ref: genderRef,
    },
    {
      keyInFormData: "religion",
      title: "Religion",
      question: "Is the religion of your therapist important to you?",
      component: (
        <Religion defaultValues={formData?.religion} ref={religionRef} />
      ),
      ref: religionRef,
    },
    {
      keyInFormData: "therapyFor",
      title: "Therapy For",
      question: "Who are you seeking therapy for?",
      component: (
        <TherapyFor defaultValues={formData?.therapyFor} ref={therapyForRef} />
      ),
      ref: therapyForRef,
    },
    {
      keyInFormData: "financialPreference",
      title: "Financial Preference",
      question: "Is money tight for you?",
      component: (
        <FinancialPreference
          defaultValues={formData?.financialPreference}
          ref={financialPreferenceRef}
        />
      ),
      ref: financialPreferenceRef,
    },
  ];

  const maxSteps = forms.length + 2;

  useEffect(() => {
    const savedData = localStorage.getItem("therapistFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleNext = async () => {
    if (step === 0 || step === 8) {
      setStep((prev) => prev + 1);
      return;
    }

    const currentStepObj = forms[step - 1];
    const currentRef = currentStepObj.ref.current;
    if (!currentRef) return;

    const { isValid, values } = await currentRef.validateAndGetData();
    if (isValid) {
      const updatedData = {
        ...formData,
        [currentStepObj.keyInFormData]: {
          question: currentStepObj.question,
          answer: values[currentStepObj.keyInFormData],
        },
      };
      setFormData(updatedData);
      localStorage.setItem("therapistFormData", JSON.stringify(updatedData));
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      console.log("Submitted Data:", formData);
      // const response = await matchTherapists(formData).unwrap();
      // console.log("Submitted Data:", response);
      // localStorage.removeItem("therapistFormData");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key={step}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='h-[70vh] max-w-4xl mx-auto py-10 flex items-center justify-center flex-col space-y-6'
      >
        <div className='w-full'>
          {step === 0 ? (
            <div className='text-center space-y-6'>
              <h2 className='text-2xl font-semibold text-gray-800'>
                Tell us about what is important to you.
              </h2>
              <p className='text-gray-600'>
                Which aspects of your identity hold the most significance for
                you?
              </p>
              {/* <Button onClick={handleNext}>Next</Button> */}
            </div>
          ) : step === 8 ? (
            <div className='text-center space-y-6'>
              <h2 className='text-2xl font-semibold text-gray-800'>
                Thank you for sharing.
              </h2>
              <Button
                onClick={handleSubmit}
                // disabled={isLoading}
                className='w-full'
              >
                {"See which therapists match your preferences"}
              </Button>
              <LoadingModal isLoading={false} />
            </div>
          ) : (
            <div className='px-4 py-4 space-y-6'>
              <div className='space-y-3'>
                <div className='flex justify-between items-center'>
                  <span className='font-semibold flex gap-2 items-center'>
                    <span className='bg-[#F8F8F8] p-2 rounded-full text-[#888888]'>
                      <File className='w-6 h-6' />
                    </span>{" "}
                    <>{forms[step - 1].title}</>
                  </span>
                  <span className='text-xs text-gray-500'>
                    Completed {step} of {maxSteps - 2}
                  </span>
                </div>

                <div className='mt-2 flex space-x-2'>
                  {Array.from({ length: maxSteps - 2 }).map((_, index) => {
                    let bgColor = "bg-gray-300";

                    if (index === step - 1) {
                      bgColor = "bg-blue-600";
                    }
                    // else if (completedSteps[index]) {
                    //   bgColor = "bg-green-600";
                    // }

                    return (
                      <div
                        key={index}
                        className={`h-3 flex-1 
          ${index === 0 ? "rounded-l-2xl" : ""}
          ${index === 5 - 1 ? "rounded-r-2xl" : ""}
          ${bgColor}
        `}
                      ></div>
                    );
                  })}
                </div>
              </div>
              <div className='p-6 flex-grow bg-white dark:bg-gray-800 shadow-lg rounded-xl'>
                {forms[step - 1].component}
              </div>
            </div>
          )}
        </div>
        <div className='flex w-full gap-10 mt-10'>
          {step > 0 && step < 7 ? (
            <Button
              variant='secondary'
              onClick={handleBack}
              className='w-1/2 flex items-center'
            >
              <ArrowLeft className='mr-auto' />
              <span className='flex-grow text-center'>Previous</span>
            </Button>
          ) : (
            <div className='w-1/2 ' />
          )}

          <Button onClick={handleNext} className='w-1/2 flex items-center'>
            <span className='flex-grow text-center'>
              {step === 8
                ? "See which therapists match your preferences"
                : "Next"}
            </span>
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
