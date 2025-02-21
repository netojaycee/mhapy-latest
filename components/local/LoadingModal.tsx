"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

interface LoadingModalProps {
  isLoading: boolean;
}

export default function LoadingModal({ isLoading }: LoadingModalProps) {
  
  return (
    <Dialog open={isLoading}>
      <DialogContent className="flex flex-col items-center justify-center space-y-4 bg-gradient-to-br from-[#5A1DAD] to-[#441890] text-white p-6 rounded-lg shadow-xl">
        <Loader2 className="w-12 h-12 animate-spin text-white drop-shadow-lg" />
        <p className="text-lg font-semibold animate-pulse">
          Finding the best therapists for you...
        </p>
      </DialogContent>
    </Dialog>

  );
}
