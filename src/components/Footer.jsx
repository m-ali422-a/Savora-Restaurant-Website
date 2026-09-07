import { Mail, Phone } from "lucide-react";
import { quickLinks, sitemapLinks, socialLinks } from "../data/data";
import Animation from "./Animation";

const Footer = () => {

    const date = new Date();
    const latestYear = date.getFullYear();
  return (
    <footer className="px-auto relative mt-24 md:mt-40">
      <div className="flex flex-wrap gap-6 justify-between pb-8 ">
        {/* column 1 */}

        <div className="flex flex-col items-start text-left mr-">
          <Animation>
            <img className="w-30" src="/assets/Logo.png" alt="" />
          </Animation>

          <Animation delay={0.2}>
            <p className="mt-3 text-sm text-zinc-600 max-w-80">
              Serving freshly prepared dishes with authentic flavors, premium
              ingredients and exceptional hospitality every day.
            </p>
          </Animation>

          <div className="flex items-center gap-2 mt-6">
            {socialLinks.map((item, index) => (
              <Animation key={index} delay={index * 0.05}>
                <a
                  href={item.href}
                  className="size-7 rounded-full border border-slate-300 grid place-content-center"
                >
                  {item.icon}
                </a>
              </Animation>
            ))}
          </div>
        </div>

        {/* column 2 */}
        <div>
          <p className="font-medium mb-5">Quick Links</p>
          <div className="flex flex-col gap-3">
            {quickLinks.map((item, index) => (
              <Animation key={index} delay={index * 0.05}>
                <a
                  className="text-zinc-600 hover:text-zinc-700"
                  href={item.href}
                >
                  {item.name}
                </a>
              </Animation>
            ))}
          </div>
        </div>
        {/* column 3 */}
        <div>
          <p className="font-medium mb-5">Get in Touch</p>
          <div className="flex flex-col gap-3">
            <Animation>
              <a
                className="flex items-center gap-1 text-zinc-600 hover:text-zinc-700 break-all"
                href="mailto:mali0004222@gmail.com"
              >
                <Mail size={16} />
                mali0004222@gmail.com
              </a>
            </Animation>

            <Animation delay={0.2}>
              <a
                className="flex items-center gap-1 text-zinc-600 hover:text-zinc-700"
                href="tel:+92-321-6539927"
              >
                <Phone size={16} />
                +92-321-6539927
              </a>
            </Animation>
          </div>
        </div>
        {/* column 4 */}
        <div>
          <p className="font-medium mb-5">Sitemap</p>
          <div className="flex flex-col gap-3">
            {sitemapLinks.map((item, index) => (
              <Animation key={index} delay={index * 0.05}>
                <a
                  href={item.href}
                  className="text-zinc-600 hover:text-zinc-700"
                >
                  {item.name}
                </a>
              </Animation>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full border-t text-zinc-500 border-slate-200 py-4.5 flex justify-center items-center">
        <p>© {latestYear}. All Right Reserved.</p>
        {/* <p>Designed by M Ali</p> */}
      </div>
    </footer>
  );
};

export default Footer;
