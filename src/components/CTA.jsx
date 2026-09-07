import { ArrowRight } from "lucide-react"
import Animation from "./Animation"

const CTA = () => {

    const dishes = [
        {src: '/assets/dish1.png', className: "top-6 left-4 md:top-10 md:left-[6%] lg:left-[10%]"},
        {src: '/assets/dish3.png', className: "bottom-6 left-6 md:bottom-10 md:left-[10%] lg:left-[14%]"},
        {src: '/assets/dish5.png', className: "top-6 right-4 md:top-10 md:right-[6%] lg:right-[10%]"},
        {src: '/assets/dish4.png', className: "bottom-6 right-6 md:bottom-10 md:right-[10%] lg:right-[14%]"},
    ]

  return (
    <section id="cta" className="relative overflow-hidden bg-orange-500 px-6 py-16 md:py-0 flex flex-col justify-center items-center min-h-100 md:min-h-110 mt-24 md:mt-40">
        <div className="absolute inset-0 w-full pointer-events-none hidden sm:block">
            {
                dishes.map((item,index)=>(
                    <img key={index} src={item.src} alt="" className={`absolute size-20 md:size-28 lg:size-35 rounded full object-cover pointer-events-auto transition-all duration-300 hover:scale-105 ${item.className} `} />
                ))
            }
        </div>

        <div className="relative z-10 text-center max-w-95">
            <Animation>
                <h1 className="text-3xl md:text-[40px] font-medium text-white font-urbanist">Every Meal Is Made To Be Remembered</h1>
            </Animation>

            <Animation y={20} delay={0.2}>
                <p className="mt-4 text-white max-w-sm">Join us for fresh ingredients, signature recipes and an unforgettable dining experience.</p>
            </Animation>

            <Animation delay={0.2} className='flex items-center justify-center'>
                <a href="#booking-process" className="flex items-center gap-3 bg-white text-black pl-5 pr-2 py-2 mt-5 rounded-full">
                    Book Your Table
                    <span className="size-7 rounded-full bg-black text-white grid place-content-center"><ArrowRight size={16}/></span>
                </a>
            </Animation>
        </div>
    </section>
  )
}

export default CTA