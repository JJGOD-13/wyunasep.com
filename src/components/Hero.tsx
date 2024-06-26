import Link from 'next/link'
import Image from 'next/image' // Import the 'Image' component from the correct package
import Oildrop from '../../public/images/WyunaOilDrop.jpg'

export default function Hero() {
    return (
        <div className=" hero min-h-screen relative" >
            <Image src={Oildrop} alt={'Oil Drop in water'} fill={true} className='object-fill opacity-25 -z-1' />
            <div className='hero-overlay bg-opacity-60'></div>
            <div className='hero-content text-center text-neutral-content'>
                <div className=' max-w-md'>
                    <h1 className=' mb-5 text-5xl font-bold capitalize '> Giving Water A Second Chance </h1>
                    <p className='mb-5 capitalize'> India’s Leading solution for Oil Water separation technology</p>
                    <Link href='/contact' className='btn btn-primary'>Get Quote</Link>

                </div>
            </div>
        </div>
    )
}