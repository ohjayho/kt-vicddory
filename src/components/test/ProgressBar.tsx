import Image from "next/image";

type TProgressBarProps = {
  progress: number;
}

export default function ProgressBar ({ progress } : TProgressBarProps) {
  return (
    <>
      <div className='relative w-80 h-3 bg-gray-200 rounded-full'>
        <div
          className='absolute top-0 left-0 h-full bg-[#ED2024] rounded-full'
          style={{ width: `${progress}%`}}
        >
          <Image
            src='/svgs/baseballIcon.svg'
            alt='baseballIcon'
            width={30}height={30}
            className="absolute right-0 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>
    </>
  )
}