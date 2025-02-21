import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/lib/ReduxProvider";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "mhapy - mental health chatbot",
  description:
    "mhapy is a mental health chatbot that helps you to track your mood and emotions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased bg-[#fafbff]`}>
        <ReduxProvider>{children}</ReduxProvider>{" "}
        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
