"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, File } from "lucide-react";
import Ethnicity from "./(components)/Ethnicity";
import Sexuality from "./(components)/Sexuality";
import Faith from "./(components)/Faith";
import Gender from "./(components)/Gender";
import TherapyFor from "./(components)/TherapyFor";
import Religion from "./(components)/Religion";
import FinancialPreference from "./(components)/FinancialPreference";
import { ChildFormRef, UserResponse } from "@/lib/types";
import LoadingModal from "@/components/local/LoadingModal";
import { useMatchMutation } from "@/redux/appData";
import Image from "next/image";


export default function TherapistMatchingForm() {
  const [step, setStep] = useState(0);
  // const [setGlobalError] = useState<string>("");
  const [formData, setFormData] = useState<UserResponse>({});
  const [match, { isLoading, isError, isSuccess, data, error }] =
    useMatchMutation();
  const [showAd, setShowAd] = useState(true);

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
      setShowAd(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const router = useRouter(); // Initialize router

  const handleSubmit = async () => {
    try {
      // console.log("Submitted Data:", formData);
      await match(formData).unwrap();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      console.log(data);
      localStorage.setItem("matchedTherapists", JSON.stringify(data));

      localStorage.removeItem("therapistFormData");

      router.push("/therapists");
    } else if (isError) {
      if ("data" in error && typeof error.data === "object") {
        const errorMessage = (error.data as { message?: string })?.message;
        console.log(errorMessage);
        // setGlobalError(errorMessage || "Login failed.");
        // toast.error(errorMessage || "An unexpected error occurred.");
      } else {
        // setGlobalError("An unexpected error occurred.");
        // toast.error("An unexpected error occurred.");
      }
    }
  }, [isSuccess, isError, error, data, router]);

  return (
    <AnimatePresence>
      <motion.div
        key={step}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='h-[70vh] max-w-4xl px-5 md:px-10 mx-auto py-10 flex items-center justify-center flex-col space-y-6'
      >
        <div className='w-full'>
          {step === 0 ? (
            <div className='text-center space-y-6'>
              <h2 className='text-2xl font-semibold text-[#441890]'>
                Tell us about what is important to you.
              </h2>
              <p className='text-gray-600'>
                Which aspects of your identity hold the most significance for
                you?
              </p>
            </div>
          ) : step === 8 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className='text-center space-y-6 bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto'
            >
              <h2 className='text-2xl font-semibold text-[#441890]'>
                You&apos;re all set! 🎉
              </h2>
              <p className='text-gray-600'>
                Click the button below to get matched with therapists tailored
                for you. This may take a few moments.
              </p>

              {/* Loading State */}
              {isLoading ? (
                <>
                  <LoadingModal isLoading={isLoading} />
                  <p className='text-sm text-gray-500'>
                    Analyzing your preferences...
                  </p>
                </>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className='w-full bg-[#441890] hover:bg-[#37236c] text-white'
                >
                  See Your Matched Therapists
                </Button>
              )}
            </motion.div>
          ) : (
            <div className='px-4 py-4 space-y-6'>
              <div className='space-y-3'>
                <div className='flex justify-between items-center'>
                  <span className='font-semibold flex gap-2 items-center'>
                    <span className='bg-[#F8F8F8] p-2 rounded-full text-[#441890]'>
                      <File className='w-6 h-6' />
                    </span>{" "}
                    <>{forms[step - 1].title}</>
                  </span>
                  <span className='text-xs text-gray-500'>
                    Completed {step} of {maxSteps - 2}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className='mt-2 flex space-x-2'>
                  {Array.from({ length: maxSteps - 2 }).map((_, index) => {
                    let bgColor = "bg-gray-300";

                    if (index === step - 1) {
                      bgColor = "bg-[#441890]";
                    }

                    return (
                      <div
                        key={index}
                        className={`h-3 flex-1 
          ${index === 0 ? "rounded-l-2xl" : ""}
          ${index === maxSteps - 3 ? "rounded-r-2xl" : ""}
          ${bgColor}
        `}
                      ></div>
                    );
                  })}
                </div>
              </div>

              {/* Form Component */}
              <div className='p-6 flex-grow bg-white dark:bg-gray-800 shadow-lg rounded-xl'>
                {forms[step - 1].component}
              </div>
            </div>
          )}
        </div>

        {/* Previous & Next Buttons */}
        <div className='flex w-full gap-10 mt-10'>
          {step > 0 && step < 8 ? (
            <Button
              variant='secondary'
              onClick={handleBack}
              className='w-1/2 flex items-center bg-gray-300 hover:bg-gray-400 text-black'
            >
              <ArrowLeft className='mr-auto' />
              <span className='flex-grow text-center'>Previous</span>
            </Button>
          ) : (
            <div className='w-1/2 ' />
          )}

          {step < 8 && (
            <Button
              onClick={handleNext}
              className='w-1/2 flex items-center bg-[#441890] hover:bg-[#37236c] text-white'
            >
              <span className='flex-grow text-center'>
                {step === 8
                  ? "See which therapists match your preferences"
                  : "Next"}
              </span>
            </Button>
          )}
        </div>

        {/* Mobile App Advertisement */}
        <AnimatePresence>
          {showAd && step > 1 && step < 8 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className='fixed bottom-5 right-5 bg-[#6A1B9A] text-white p-4 rounded-lg shadow-lg w-[90%] md:w-80'
            >
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className='text-lg font-semibold'>
                    Get Therapy on the Go
                  </h3>
                  <p className='text-sm text-gray-200'>
                    Download our app for an even better experience!
                  </p>
                </div>
                <button
                  onClick={() => setShowAd(false)}
                  className='text-white text-lg font-bold ml-4'
                >
                  ✖
                </button>
              </div>
              <div className='mt-3 flex space-x-2'>
                <a
                  target='_blank'
                  href='https://play.google.com/store/apps/details?id=com.mobile.mhapy&pli=1'
                >
                  <Button className='bg-white text-primary hover:bg-gray-800 hover:text-white  mt-5 transform transition-transform duration-300 hover:-translate-y-2'>
                    {" "}
                    <Image
                      width={30}
                      height={30}
                      src={"/images/google.png"}
                      alt='google'
                    />{" "}
                    {/* Get it on{" "} */}
                    <span className='text-[#b629b6] font-bold'>
                      Google Play
                    </span>
                  </Button>{" "}
                </a>
                <a
                  href='https://apps.apple.com/ca/app/mhapy-ai-therapy-assistant/id6450757194'
                  target='_blank'
                >
                  <Button className='bg-white text-primary hover:bg-gray-800 hover:text-white  mt-5 transform transition-transform duration-300 hover:-translate-y-2'>
                    <Image
                      width={30}
                      height={30}
                      src={"/images/app.png"}
                      alt='google'
                    />{" "}
                    {/* Download on{" "} */}
                    <span className='text-[#b629b6] font-bold'>App Store</span>
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
