import { Separator } from "@/components/ui/separator";
import Features from "./(components)/Features";
import Hero from "./(components)/Hero";
// import Goal from "./(components)/Goal";
// import Protect from "./(components)/Protect";
// import What from "./(components)/What";
import Faq from "./(components)/Faq";
import App from "./(components)/App";
// import { Button } from "@/components/ui/button";
import TherapyRecommendations from "./(components)/TherapyRecommendation";
import WhyChooseMhapy from "./(components)/WhyChooseMhapy";
import TherapistsMatchingSteps from "./(components)/TherapistsMatchingSteps";
import TestimonialSlider from "./(components)/TestimonialSlider";

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <Features />
      <TherapyRecommendations />
      <WhyChooseMhapy />
      <TherapistsMatchingSteps />
      {/* <Goal />
      <Protect />
      <What /> */}
      <TestimonialSlider />
      <Separator />
      <Faq />
      {/* <div className='w-full flex justify-center'>
        <Button className=' text-[20px]'>Earn Free Therapy</Button>
      </div> */}
      <App />
    </div>
  );
}
