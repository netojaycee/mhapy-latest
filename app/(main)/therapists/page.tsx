"use client";
import TherapistCard from "@/components/local/TherapistCard";
import React from "react";

export default function Therapists() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 mx-auto max-w-6xl'>
      {Array.from({ length: 6 }).map((_, index) => (
        <TherapistCard
          key={index}
          name='Dr. Jane Doe'
          image='/images/therapist.jpg'
          match={87} // Match percentage
          tags={["Anxiety", "Depression", "CBT"]}
          bio={
            "'Dr. Jane Doe is a licensed therapist specializing in cognitive behavioral therapy. She has over 10 years of experience helping clients manage stress, anxiety, and depression. She believes in a holistic approach to mental health and works closely with each client to create personalized treatment plans. Outside of therapy, she enjoys mindfulness practices and nature walks. Her approach blends scientific research with compassionate care.'"
          }
          onBook={() => console.log("Book Appointment clicked")}
        />
      ))}{" "}
    </div>
  );
}
