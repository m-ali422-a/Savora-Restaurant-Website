import Animation from "../components/Animation";

const SubTitle = ({ text, y }) => {
  return (
    <div>
      <Animation y={y} delay={0.2} className="text-orange-500 tracking-wider uppercase">
        <p>{text}</p>
      </Animation>
    </div>
  );
};

export default SubTitle;
