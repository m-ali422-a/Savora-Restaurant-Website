import { Star } from 'lucide-react';
import Animation from '../components/Animation';
import Button from '../sharedComponents/Button';

const Hero = () => {

    const ratingUsers = [
        "/assets/user-1.jpeg",
        "/assets/user-2.jpeg",
        "/assets/user-3.jpeg",
        "/assets/user-4.jpeg"
    ]

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[url('/assets/heroBanner.png')] bg-cover bg-center bg-no-repeat pt-18">
        <Animation y={-20} delay={0.2} className="text-orange-500 tracking-wider">
            <p>WHERE FLAVOR MEETS ELEGANCE</p>
        </Animation>

        <Animation>
            <h1 className='text-6xl w-3xl text-center font-urbanist font-medium mt-6'>Crafted for unforgettable dining moments.</h1>
        </Animation>

        <Animation delay={0.2}>
            <p className='text-zinc-600 w-md text-center mt-4 tracking-wide'>Experience carefully curated menus, fresh local ingredients and impeccable service in a space made for every celebration.</p>
        </Animation>

        <Animation className='mt-8'>
            <Button/>
        </Animation>

        <Animation className="flex items-center justify-start mt-10">
            <div className='flex -space-x-3 pr-3'>
                {ratingUsers?.map((item,index)=>(
                    <img key={index} src={item} className='size-10 border-2 border-slate-50 rounded-full hover:translate-y-px transition'/>
                ))}
            </div>
            <div>
                <div className='flex items-center gap-0.5'>
                    {
                        [...Array(5)].map((index)=>(
                            <Star key={index} className='size-4 fill-orange-500 text-orange-500' />
                        ))
                    }
                </div>
                <p className='text-zinc-800'>4.8/5 Rating - 10,000 reviews</p>
            </div>
        </Animation>
    </section>
  )
}

export default Hero