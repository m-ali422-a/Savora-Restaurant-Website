import Animation from "./Animation";

const About = () => {
  return (
    <section id="about" className="px-auto mt-45">
      <div className="flex flex-col sm:flex-row gap-15 mx-auto max-w-7xl">
        {/* left side  */}
        <Animation scale={0.8} y={0}>
          <img
            src="/assets/about.png"
            className="max-w-130 w-full h-full object-cover rounded-3xl"
            alt=""
          />
        </Animation>

        {/* right side  */}
        <div>
          <Animation scale={0.8} y={0} className="flex items-center gap-2">
            <img src="/assets/iconL.png" alt="" />
            <span className="font-medium uppercase">Crafted with Passion</span>
            <img src="/assets/iconR.png" alt="" />
          </Animation>

          <Animation className="w-130">
            <h2 className="text-5xl mt-5">
              Experience dining beyond expectations
            </h2>
          </Animation>


          <Animation delay={0.2} >
            <p className="text-zinc-600 mt-5 max-w-sm">We combine fresh local ingredients, creative recipes and elegant presentation to deliver a memorable experience with every visit.</p>
          </Animation>

          <Animation className='mt-9 bg-orange-500 text-white p-2 pr-5 rounded-lg flex items-center gap-3 w-fit'>
            <img src="/assets/about.png" className="size-15 rounded-lg object-cover shrink-0" alt="" />
            <div className="flex flex-col gap-2">
                <p className="font-medium">Bistro Royale, NY</p>
                <a href="#">View on Map</a>
            </div>
          </Animation>
        </div>
      </div>
    </section>
  );
};

export default About;