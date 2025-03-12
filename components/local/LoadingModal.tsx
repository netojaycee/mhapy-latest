"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
// import { Loader2 } from "lucide-react";
import Image from "next/image";

interface LoadingModalProps {
  isLoading: boolean;
}

export default function LoadingModal({ isLoading }: LoadingModalProps) {
  return (
    <Dialog open={isLoading}>
      <DialogContent className='bg-transparent border-none flex items-center justify-center'>
        <DialogTitle className='sr-only'>Loader</DialogTitle>
        <Image
          src='/loader/loader.gif'
          className=''
          alt='loader'
          width={100}
          height={100}
        />
        {/* <Loader2 className="w-12 h-12 animate-spin text-white drop-shadow-lg" />
        <p className="text-lg font-semibold animate-pulse">
          Finding the best therapists for you...
        </p> */}
      </DialogContent>
    </Dialog>
  );
}
