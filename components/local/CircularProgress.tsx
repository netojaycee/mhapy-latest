"use client";
export default function CircularProgress({ value }: { value: number }) {
  const radius = 20; // Circle radius
  const circumference = 2 * Math.PI * radius; // Full circle circumference
  const offset = circumference - (value / 100) * circumference; // Calculate stroke offset

  return (
    <div className='relative w-20 h-20 animate-bounce'>
      <svg className='w-full h-full transform -rotate-90'>
        {/* Background Circle */}
        <circle
          cx='50%'
          cy='50%'
          r={radius}
          strokeWidth='8'
          className='stroke-gray-200 fill-none'
        />
        {/* Progress Circle */}
        <circle
          cx='50%'
          cy='50%'
          r={radius}
          strokeWidth='8'
          stroke='#441890' /* Brand color */
          fill='none'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
          className='transition-all duration-300'
        />
      </svg>
      {/* Number in the Middle */}
      <div className='absolute inset-0 flex items-center justify-center text-xs font-bold text-[#441890]'>
        {value}%
      </div>
    </div>
  );
}
