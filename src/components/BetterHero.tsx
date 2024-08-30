'use client'
import '../styles/BetterHero.css'
import bg from '@/public/images/WyunaOilDrop.jpg'
import Image from 'next/image';

export default function BetterHero(){
    return (
      <section
      className="min-h-auto bg-white flex justify-center items-center overflow-y-hidden  text-primary-content"
      // style={
      //   {
      //     backgroundImage : `url(${bg.src})`,
      //   }
      // }
      >
<div className=' flex flex-col pl-40 w-1/2 pb-40 gap-2 '>

      <div className=' font-extrabold text-5xl align-baseline capitalize overflow-x-visible'>
      Giving water a second Chance 
      </div>
      <div className=' text-wrap'>India's Premiere Oil Water Water seperation solutions provider.</div>

</div>
      <div className="relative">
      <Image
        src={bg.src}
        alt="Oil Drop"
        className="overflow-hidden opacity-90 -translate-y-28"
        width={1000}
        height={1000}
      />
      </div>
      </section>
    );
}