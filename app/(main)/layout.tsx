import Footer from "@/components/local/Footer";
import Header from "@/components/local/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='max-w-7xl mx-auto flex flex-col min-h-screen overflow-x-hidden'>
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
}
