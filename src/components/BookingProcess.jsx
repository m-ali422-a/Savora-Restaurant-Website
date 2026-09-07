import { Star } from "lucide-react";
import { bookingSteps, bookingTestimonial } from "../data/data";
import SubTitle from "../sharedComponents/SubTitle";
import Animation from "./Animation";

const BookingProcess = () => {
  return (
    <section id="booking-process" className="px-auto mt-24 md:mt-40">
      <div className="grid md:grid-cols-2 gap-15 md:gap-25">
        {/* left side */}
        <div className="flex flex-col text-center md:text-left">
          <SubTitle text={"Table Reservation Process"} />

          <Animation delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 mb-10 md:mb-15 text-balance">Reserve your table in three simple steps</h2>
          </Animation>

          <Animation className='flex gap-1 mb-6 justify-center md:justify-start'>
            {
                [...Array(bookingTestimonial.rating)].map((i)=>(
                    <Star key={i} className="size-4 fill-amber-500 text-orange-500"/>
                ))
                
            }
          </Animation>

          <Animation delay={0.2}>
            <p className="text-zinc-600 max-w-xs mb-4">{bookingTestimonial.quote}</p>
          </Animation>

          <Animation delay={0.2}  className="flex items-center justify-center md:justify-start gap-3">
            <img className="size-12 rounded-full object-cover" src={bookingTestimonial.authorImg} alt="" />
            <span className="text-lg">{bookingTestimonial.authorName}</span>
          </Animation>

        </div>

        {/* right side  */}
        <div className="space-y-14 text-left">
            {
                bookingSteps.map((item,index)=>(
                    <Animation key={index} y={150} delay={index * 0.15} className='flex items-start gap-7'>
                        <span className="text-orange-500 font-medium text-lg">{item.number}</span>
                        <div className="flex flex-col">
                            <h3 className="text-xl mb-4">{item.title}</h3>
                            <p className="text-zinc-600">{item.description}</p>
                        </div>
                    </Animation>
                ))
            }
        </div>


      </div>
    </section>
  );
};

export default BookingProcess;
