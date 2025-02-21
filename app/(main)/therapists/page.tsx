"use client";
import TherapistCard from "@/components/local/TherapistCard";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Therapist {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  bio: string;
  booking_link: string;
  score: number;
  tags: string[];
}

export default function Therapists() {
  const [therapists, setTherapists] = useState<Therapist[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("matchedTherapists");
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      if (!parsedData.scores || !parsedData.therapists) return;

      const therapistsWithScores: Therapist[] = parsedData.scores
        .map((scoreData: { id: string; score: number; tags: string[] }) => {
          const therapist = parsedData.therapists.find(
            (t: { id: string }) => t.id === scoreData.id
          );
          return therapist
            ? { ...therapist, score: scoreData.score, tags: scoreData.tags }
            : null;
        })
        .filter(Boolean);

      setTherapists(therapistsWithScores);
    }
  }, []);

  return (
    <div className='max-w-6xl mx-auto py-10'>
      <h1 className='text-3xl font-semibold mb-6 text-center'>
        Matched Therapists
      </h1>
      {therapists.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <AnimatePresence>
            {therapists.map((therapist, index) => (
              <motion.div
                key={therapist.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TherapistCard
                  name={`${therapist.first_name} ${therapist.last_name}`}
                  image={therapist.image}
                  match={therapist.score}
                  tags={therapist.tags}
                  bio={therapist.bio}
                  therapistEmail={therapist.email}
                  bookingLink={therapist.booking_link}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-center text-gray-600'
        >
          No therapists matched your preferences.
        </motion.p>
      )}
    </div>
  );
}
