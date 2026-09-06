
const Button = ({style}) => {
  return (
    <div>
      <a
        className={`hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-medium px-6 py-3 rounded-full ${style}`}
        href="#booking-process"
      >
        Book a Table
      </a>
    </div>
  );
};

export default Button;
