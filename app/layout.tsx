import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased bg-[#fafbff]`}>{children}</body>
    </html>
  );
}
