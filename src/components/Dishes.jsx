import { dishes } from "../data/data";
import SubTitle from "../sharedComponents/SubTitle";
import Animation from "./Animation";

const Dishes = () => {
  return (
    <section id="dishes" className="px-auto mt-40">
      <div className="text-center mb-15">
        <SubTitle text={"Chef's Signature Selection"} />
        <Animation>
          <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance mt-5">
            Discover our signature dishes
          </h2>
        </Animation>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-18 ">
        {dishes.map((item, index) => (
          <Animation
            key={index}
            y={80}
            delay={index * 0.1}
            className="flex flex-col items-center text-center"
          >
            <div>
              <img
                src={item.img}
                alt={item.title}
                className="size-30 md:size-35"
              />
            </div>
            <p className="mt-4">{item.title}</p>
            <p className="text-zinc-600 mt-1">{item.price}</p>
          </Animation>
        ))}
      </div>
    </section>
  );
};

export default Dishes;
