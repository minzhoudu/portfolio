import { FC } from "react";
import { Technology } from "../interfaces";

interface SingleTechnologyProps {
  tech: Technology;
  index: number;
}

const SingleTechnology: FC<SingleTechnologyProps> = ({ tech, index }) => {
  return (
    <div className="flex h-40 w-32 flex-col items-center rounded-lg bg-opacity-0 px-5 py-2 font-semibold transition-colors duration-500 ease-in-out hover:bg-white hover:bg-opacity-25 lg:h-52 lg:w-40">
      <h3
        className={
          index % 2 === 0
            ? "text-base text-primaryLime lg:text-xl"
            : "rounded-lg bg-primaryLime px-3 text-base text-primaryGray lg:text-xl"
        }
      >
        {tech.name}
      </h3>

      <img src={tech.img} alt={tech.name} className="my-auto" />
    </div>
  );
};

export default SingleTechnology;
