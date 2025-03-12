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
  mini_bio
}: {
  name: string;
  image: string;
  match: number;
  tags: string[];
  bio: string;
  bookingLink: string;
  mini_bio: string;
  therapistEmail: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className=' bg-[#F8F8F8] shadow-lg rounded-md p-4 flex flex-col items-center space-y-4 transition-transform max-w-[400px] 
      min-h-[360px] w-full border border-gray-200'
    >
      <div className='relative h-[360px] w-[340px] rounded-md'>
        <Image
          src={image}
          alt={name}
          width={340}
          height={360}
          className=' object-cover w-full h-full rounded-md'
          quality={100}
        />

        {/* Circular Progress (Top Left) */}
        <div className='absolute top-2 right-2'>
          <CircularProgress value={match} />
        </div>

        <div className='absolute bottom-0 w-full h-[130px] p-2 rounded-b-md space-y-3 bg-gradient-to-r from-[#3e3e3e]/80 to-[#202020]/80'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-lg font-semibold text-white text-center'>
                {name}
              </h2>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className='bg-transparent text-white px-3 py-1 text-sm rounded-md border-gray-300 border hover:bg-[#3a156e] transition'
            >
              See Bio
            </button>
          </div>

          <div className='grid grid-cols-3 justify-center gap-1'>
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className='animate-pulse bg-[#e7e1fa] text-[#441890] text-[10px] px-[1px] py-[2px] line-clamp-1 font-medium rounded-sm text-center'
              >
                {tag}
              </span>
            ))}
          </div>

          <div className='relative'>
            <button
              onClick={() => setOpenForm(!openForm)}
              className='absolute -top-0 left-1/2 transform -translate-x-1/2 bg-[#441890] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#3a156e] transition w-full text-center'
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <p className='text-xs line-clamp-2'>
       {mini_bio}
      </p>
      {/* Modals */}
      <ViewBio
        name={name}
        image={image}
        bio={bio}
        tags={tags}
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

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import TherapistProfile from "@/components/local/TherapistProfile";
import React from "react";
import BookingForm from "./BookingForm";

interface BioProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  bio: string;
  name: string;
  image: string;
  tags: string[];
}

function ViewBio({ bio, open, setOpen, name, image, tags }: BioProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='max-w-[50%] h-auto'>
        <DialogTitle className='sr-only'>Title</DialogTitle>
        <TherapistProfile
          name={name}
          image={image}
          bio={bio}
          tags={tags}
        />{" "}
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
        <DialogTitle className="sr-only">Title</DialogTitle>
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
