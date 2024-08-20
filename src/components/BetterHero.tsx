'use client'
import '../styles/BetterHero.css'
import bg from '../../public/images/WyunaOilDrop.jpg'
import Image from 'next/image';

export default function BetterHero(){
    return (
      <section
      className="min-h-auto bg-white flex justify-center items-center overflow-hidden text-primary-content"
      // style={
      //   {
      //     backgroundImage : `url(${bg.src})`,
      //   }
      // }
      >
      <div className=' font-extrabold font'>
        Hello world
      </div>
      <Image
        src={bg.src}
        alt="Oil Drop"
        className="overflow-hidden translate-x-1/3 -translate-y-56 opacity-90"
        width={1000}
        height={1000}
      />
      </section>
    );
}