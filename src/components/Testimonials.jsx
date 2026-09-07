import SubTitle from "../sharedComponents/SubTitle"
import Animation from "../components/Animation"
import { testimonials } from "../data/data"
import { StarIcon } from "lucide-react"

const Testimonials = () => {
  return (
    <section className="px-auto mt-24 md:mt-40">

        <div className="text-center mb-15">
        <SubTitle text={"LOVED BY FOOD LOVERS"} />
        <Animation delay={0.2}>
          <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance mt-5">
          What Our Guests Say
          </h2>
        </Animation>
      </div>

        {/* Card data  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                testimonials.map((item,index)=>(
                    <Animation key={index} y={80} delay={index * 0.1} className='border border-slate-200 hover:bg-slate-50/50 rounded-2xl p-6 flex flex-col justify-between text-left'>
                        <div>
                            <div className="flex gap-1 mb-4">
                                {[...Array(item.rating)].map((i)=>(
                                    <StarIcon key={i} className="size-4 fill-orange-500 text-orange-500"/>
                                ))}
                            </div>
                            <p className="text-zinc-600 mb-6 leading-relaxed">"{item.review}"</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <img src={item.img} alt={item.name} className="size-11 rounded-full object-cover" />
                        <div>
                            <p className="font-medium leading-tight">{item.name}</p>
                            <p className="text-zinc-600">{item.location}</p>
                        </div>
                        </div>
                    </Animation>
                ))
            }
        </div>

    </section>
    
  )
}

export default Testimonials