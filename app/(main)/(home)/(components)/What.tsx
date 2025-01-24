import { Brain } from "lucide-react";
import React from "react";

export default function What() {
  return (
    <div className=' px-2 md:px-16 w-full space-y-5 '>
      <h1 className='text-[18px] font-bold text-center text-primary'>
        Key features
      </h1>
      <h1 className='text-2xl md:text-4xl lg:text-5xl font-nunito font-bold text-center w-full md:w-[70%] lg:w-[55%] mx-auto'>
        Most probably included best features ever
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
        <div className='flex items-start gap-3 bg-white shadow-md p-5 rounded-[12px]'>
          <span className='bg-[#FFC107]/10 p-3 rounded-[12px] group-hover:bg-[#FFC107] flex items-center justify-center h-[50px] w-[50px]'>
            <Brain className='w-10 h-10 text-[#FFC107] group-hover:text-white' />
          </span>
          <div className='flex flex-col items-start gap-3'>
            <h1 className='text-xl font-bold font-nunito'>Talk to Ruby </h1>
            <p className='text-[14px]'>
              Ruby is mhapy&apos;s AI chatbot. You can have open-ended
              conversations, express yourself freely, and even chat like with a
              friend. Ruby can tell jokes, share health news, give weather
              updates, and most importantly, assess your mental health.
            </p>
          </div>
        </div>

        <div className='flex items-start gap-3 bg-white shadow-md p-5 rounded-[12px]'>
          <span className='bg-[#FFC107]/10 p-3 rounded-[12px] group-hover:bg-[#FFC107] flex items-center justify-center h-[50px] w-[50px]'>
            <Brain className='w-10 h-10 text-[#FFC107] group-hover:text-white' />
          </span>
          <div className='flex flex-col items-start gap-3'>
            <h1 className='text-xl font-bold font-nunito'>
              Complete Overview of Mental Health{" "}
            </h1>
            <p className='text-[14px]'>
              Ruby helps you track various aspects of your mental health,
              including Anxiety, Depression, Sleep, Substance use, Suicidal
              ideation, Medication compliance, Mood, Delusions, and more.
            </p>
          </div>
        </div>

        <div className='flex items-start gap-3 bg-white shadow-md p-5 rounded-[12px]'>
          <span className='bg-[#FFC107]/10 p-3 rounded-[12px] group-hover:bg-[#FFC107] flex items-center justify-center h-[50px] w-[50px]'>
            <Brain className='w-10 h-10 text-[#FFC107] group-hover:text-white' />
          </span>
          <div className='flex flex-col items-start gap-3'>
            <h1 className='text-xl font-bold font-nunito'>
              Mental Health Analytics{" "}
            </h1>
            <p className='text-[14px]'>
              Observe patterns in your mental health with detailed graphs of
              mood, sleep quality, and other metrics. Track improvements or
              declines over time to understand your progress.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-3 bg-white shadow-md p-5 rounded-[12px]'>
          <span className='bg-[#FFC107]/10 p-3 rounded-[12px] group-hover:bg-[#FFC107] flex items-center justify-center h-[50px] w-[50px]'>
            <Brain className='w-10 h-10 text-[#FFC107] group-hover:text-white' />
          </span>
          <div className='flex flex-col items-start gap-3'>
            <h1 className='text-xl font-bold font-nunito'>
              Connect with pairs and social journanling{" "}
            </h1>
            <p className='text-[14px]'>
              mhapy connects you with people who share similar struggles for
              support and accountability. Additionally, Ruby helps you organize
              your thoughts in a journal, which you can keep private or share
              with peers for interaction and encouragement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
