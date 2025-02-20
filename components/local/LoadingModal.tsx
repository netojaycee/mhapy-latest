"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

interface LoadingModalProps {
  isLoading: boolean;
}

export default function LoadingModal({ isLoading }: LoadingModalProps) {
  return (
    <Dialog open={isLoading}>
      <DialogContent className="flex flex-col items-center justify-center space-y-4 bg-[#5A1DAD] text-white p-6 rounded-lg shadow-lg">
        <Loader2 className="w-10 h-10 animate-spin text-white" />
        <p className="text-lg font-semibold">Finding the best therapists for you...</p>
      </DialogContent>
    </Dialog>
  );
}
