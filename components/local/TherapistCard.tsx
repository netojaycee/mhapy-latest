"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CircularProgress from "./CircularProgress";

export default function TherapistCard({
  name,
  image,
  match,
  tags,
  bio,
  onBook,
}: {
  name: string;
  image: string;
  match: number;
  tags: string[];
  bio: string;
  onBook: () => void;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className='relative bg-white shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4 transition-transform  max-w-md'
    >
      {/* Circular Progress (Top Left) & View Bio (Top Right) */}
      <div className='absolute top-4 left-4'>
        <CircularProgress value={match} />
      </div>
      <button
        onClick={() => setOpen(!open)}
        className='absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 text-sm rounded-md shadow hover:bg-blue-700 transition'
      >
        View Bio
      </button>

      {/* Profile Image */}
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className='w-25 h-25 rounded-full border-4 border-blue-500 shadow-md'
      />

      {/* Name */}
      <h2 className='text-lg font-semibold text-gray-800'>{name}</h2>

      {/* Tags (Specialties) */}
      <div className='flex flex-wrap justify-center gap-2'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className='bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full'
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Appointment Button */}
      <button
        onClick={onBook}
        className='mt-2 bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-600 transition'
      >
        Book Appointment
      </button>
      <ViewBio bio={bio} open={open} setOpen={(open) => setOpen(open)} />
    </motion.div>
  );
}

import { Dialog, DialogContent } from "@/components/ui/dialog";
import TherapistProfile from "@/components/local/TherapistProfile";
import React from "react";

interface LoadingModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  bio: string;
}

function ViewBio({ bio, open, setOpen }: LoadingModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='flex flex-col items-center justify-center space-y-4 bg-[#5A1DAD] text-white p-6 rounded-lg shadow-lg'>
        <TherapistProfile
          name='Dr. Jane Doe'
          image='/images/therapist.jpg'
          bio={bio}
        />{" "}
      </DialogContent>
    </Dialog>
  );
}
