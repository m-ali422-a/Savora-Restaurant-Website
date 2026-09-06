import { statsData } from "../data/data";
import Animation from "../components/Animation";

const Stats = () => {
  return (
    <section id="stats" className="mt-30 px-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-25">
            {
                statsData.map((item,index)=>(
                    <Animation key={index} delay={0.2} className='flex flex-col items-center text-center' >
                        <span className="text-5xl">{item.number}</span>
                        <h3 className="text-2xl mt-5">{item.title}</h3>
                        <p className="font-light text-zinc-600 w-65 mt-3">{item.description}</p>
                    </Animation>
                ))
            }
        </div>
    </section>
  )
}

export default Stats