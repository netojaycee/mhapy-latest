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
  bookingLink,
  therapistEmail,
}: {
  name: string;
  image: string;
  match: number;
  tags: string[];
  bio: string;
  bookingLink: string;
  therapistEmail: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className='relative bg-white shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4 transition-transform max-w-md 
      min-h-[360px] w-full border border-gray-200'
    >
      {/* Circular Progress (Top Left) */}
      <div className='absolute top-4 left-4'>
        <CircularProgress value={match} />
      </div>

      {/* View Bio Button (Top Right) */}
      <button
        onClick={() => setOpen(!open)}
        className='absolute top-4 right-4 bg-[#441890] text-white px-3 py-1 text-sm rounded-md shadow hover:bg-[#3a156e] transition'
      >
        View Bio
      </button>

      {/* Profile Image (Fixed Size) */}
      <div className='w-24 h-24 rounded-full overflow-hidden border-4 border-[#441890] shadow-md'>
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className='object-cover w-full h-full'
        />
      </div>

      {/* Name */}
      <h2 className='text-lg font-semibold text-gray-800 text-center'>
        {name}
      </h2>

      {/* Tags (Fixed Height, Evenly Spaced) */}
      <div className='flex flex-col justify-center gap-2 min-h-[50px]'>
        {tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className='bg-[#e7e1fa] text-[#441890] text-xs font-medium px-3 py-1 rounded-[16px] text-center'
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Appointment Button */}
      <button
        onClick={() => setOpenForm(!openForm)}
        className='mt-2 bg-[#441890] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#3a156e] transition w-full text-center'
      >
        Book Appointment
      </button>

      {/* Modals */}
      <ViewBio
        name={name}
        image={image}
        bio={bio}
        open={open}
        setOpen={(open) => setOpen(open)}
      />
      <BookingDialog
        bookingLink={bookingLink}
        openForm={openForm}
        setOpenForm={setOpenForm}
        therapistEmail={therapistEmail}
        therapistName={name}
      />
    </motion.div>
  );
}

import { Dialog, DialogContent } from "@/components/ui/dialog";
import TherapistProfile from "@/components/local/TherapistProfile";
import React from "react";
import BookingForm from "./BookingForm";

interface BioProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  bio: string;
  name: string;
  image: string;
}

function ViewBio({ bio, open, setOpen, name, image }: BioProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='w-full h-auto'>
        <TherapistProfile name={name} image={image} bio={bio} />{" "}
      </DialogContent>
    </Dialog>
  );
}

interface BookingProps {
  openForm: boolean;
  setOpenForm: (openForm: boolean) => void;
  bookingLink: string;
  therapistEmail: string;
  therapistName: string;
}

function BookingDialog({
  bookingLink,
  openForm,
  setOpenForm,
  therapistEmail,
  therapistName,
}: BookingProps) {
  return (
    <Dialog open={openForm} onOpenChange={setOpenForm}>
      <DialogContent className='w-full h-auto'>
        <BookingForm
          bookingLink={bookingLink}
          therapistEmail={therapistEmail}
          therapistName={therapistName}
          setOpenForm={setOpenForm}
        />
      </DialogContent>
    </Dialog>
  );
}
