import SubTitle from "../sharedComponents/SubTitle";
import Animation from "../components/Animation";
import { featuresData } from "../data/data";
import { ChefHat, Leaf, Heart } from "lucide-react";

const Features = () => {
  const icons = {
    ChefHat,
    Leaf,
    Heart,
  };

  return (
    <section id="features" className="px-auto mt-24 md:mt-40">
      <div className="text-center mb-15">
        <SubTitle text={"What Sets Us Apart"} />
        <Animation delay={0.2}>
          <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance mt-5">
            Crafting memorable dining experiences
          </h2>
        </Animation>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-15 mx-auto">
        <div className="space-y-12">
          {featuresData.map((item, index) => {
            const IconComponent = icons[item.icon];
            return(
                <Animation key={index} y={150} delay={index * 0.15} className='flex items-start gap-4 text-left'>
                    {IconComponent && (
                        <IconComponent className='text-orange-500 size-5 mt-1'/>
                    )}
                    <div>
                        <h3 className="text-xl mb-3">{item.title}</h3>
                        <p className="text-zinc-600 max-w-sm">{item.description}</p>
                    </div>
                </Animation>
            )
          })}
        </div>

        <Animation x={50} y={0}>
          <img
            src="/assets/chef.png"
            alt=""
            className="w-full max-w-sm h-111 object-cover rounded-3xl"
          />
        </Animation>
      </div>
    </section>
  );
};

export default Features;
