import { timingData } from "../data/data";
import Button from "../sharedComponents/Button";
import Animation from "./Animation";

const Timing = () => {
  return (
    <section id="timing" className="px-auto mt-40">
      <Animation
        scale={0.8}
        y={0}
        className="w-full max-w-5xl h-162.5 rounded-3xl bg-cover bg-center flex items-center justify-center md:justify-start px-6 md:px-14 overflow-hidden mx-auto bg-[url('/assets/restro-timing.png')]"
      >
        <div className="bg-white rounded-3xl p-8 w-full max-w-xs">
          <Animation delay={0.2}>
            <h3 className="text-xl font-medium mb-8">Opening Time</h3>
          </Animation>

          <div className="space-y-7">
            {timingData.map((item, index) => (
              <Animation
                key={index}
                delay={index * 0.15}
                className="flex justify-between items-center"
              >
                <span className="font-medium text-zinc-500">{item.day}</span>
                <span
                  className={`font-medium ${item.hours === "Closed" ? "text-zinc-400" : "text-zinc-500"}`}
                >
                  {item.hours}
                </span>
              </Animation>
            ))}
            <div className="mx-auto w-fit">
              <Button />
            </div>
          </div>
        </div>
      </Animation>
    </section>
  );
};

export default Timing;
