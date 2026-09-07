import { MenuIcon, XIcon } from "lucide-react";
import { navLinks } from "../data/data";
import { useEffect, useState } from "react";
import Button from "../sharedComponents/Button";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-20 px-6 sm:px-35 w-full transition-all duration-300 ${scroll ? "bg-white/70 backdrop-blur-md" : "bg-transparent"} `}
    >
      <div className="flex items-center justify-between py-4">
        <a href="/">
          <img className="w-30" src="/assets/Logo.png" alt="" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks?.map((item) => (
            <a
              className="hover:text-zinc-600 font-medium"
              key={item.name}
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </div>

        <Button />

        <button
          onClick={() => setMobileMenu(true)}
          className="md:hidden bg-zinc-800 text-white p-2 rounded-md cursor-pointer"
        >
          <MenuIcon />
        </button>

        {/* Menu for small screens */}

        <div
          className={`md:hidden flex flex-col justify-center items-center p-8 fixed inset-0 bg-white/70 backdrop-blur-md z-40 transition-all duration-300 ${mobileMenu ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"}`}
        >
          <div className="flex flex-col items-center space-y-6 font-medium">
            {navLinks.map((item) => (
              <a
                onClick={() => setMobileMenu(false)}
                className="text-2xl text-zinc-800 hover:text-orange-500 transition"
                key={item.name}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
            <a
              onClick={() => setMobileMenu(false)}
              href="#booking-process"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition"
            >
              Book a Table
            </a>
            <button
              onClick={() => setMobileMenu(false)}
              className="bg-zinc-800 text-white p-2 rounded-md cursor-pointer"
            >
              <XIcon />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
