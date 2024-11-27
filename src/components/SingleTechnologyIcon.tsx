import { FC } from "react";
import { technologies } from "../data/technologies";
import { Technology } from "../interfaces";

interface SingleTechnologyProps {
  tech: Technology;
  index: number;
  onClick: (techId: string) => void;
}

const SingleTechnology: FC<SingleTechnologyProps> = ({
  tech,
  index,
  onClick,
}) => {
  const delayCalculation =
    (30 / technologies.length) * (technologies.length - index + 1) * -1;

  const size = 200 * technologies.length;

  return (
    <>
      <div
        className="absolute flex h-40 w-32 animate-infiniteSlider cursor-pointer flex-col  items-center gap-1 hover:scale-125"
        style={{
          animationDelay: `${delayCalculation}s`,
          left: `max(${size}px, 100%)`,
        }}
        onClick={() => onClick(tech.id)}
      >
        <div className="flex flex-grow items-center justify-center">
          <img src={tech.img} alt={tech.name} className="my-autos" />
        </div>
      </div>
    </>
  );
};

export default SingleTechnology;
