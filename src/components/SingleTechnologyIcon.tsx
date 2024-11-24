import { FC } from "react";
import { Technology } from "../interfaces";
import { technologies } from "../data/technologies";

interface SingleTechnologyProps {
  tech: Technology;
  index: number;
}

const SingleTechnology: FC<SingleTechnologyProps> = ({ tech, index }) => {
  const delayCalculation =
    (30 / technologies.length) * (technologies.length - index + 1) * -1;

  const size = 200 * technologies.length;

  return (
    <div
      className="animate-infiniteSlider absolute  flex h-40 w-32 flex-col items-center  gap-1"
      style={{
        animationDelay: `${delayCalculation}s`,
        left: `max(${size}px, 100%)`,
      }}
    >
      <div className="flex flex-grow items-center justify-center">
        <img src={tech.img} alt={tech.name} className="my-autos" />
      </div>
    </div>
  );
};

export default SingleTechnology;
