import Footer from "@/components/local/Footer";
import Header from "@/components/local/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='max-w-8xl mx-auto space-y-5 md:space-y-10'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
