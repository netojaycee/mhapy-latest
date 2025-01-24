import { Separator } from "@/components/ui/separator";
import Features from "./(components)/Features";
import Hero from "./(components)/Hero";
import Goal from "./(components)/Goal";
import Protect from "./(components)/Protect";
import What from "./(components)/What";
import Faq from "./(components)/Faq";
import App from "./(components)/App";

export default function Home() {
  return (
    <div className='flex flex-col space-y-5 md:space-y-10'>
      <Hero />
      <Features />
      <Separator />
      <Goal />
      <Protect />
      <What />
      <Separator />
      <Faq />
      <App/>
    </div>
  );
}
