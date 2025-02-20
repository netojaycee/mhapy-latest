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
          onViewBio={() => console.log("View Bio clicked")}
          onBook={() => console.log("Book Appointment clicked")}
        />
      ))}{" "}
    </div>
  );
}
