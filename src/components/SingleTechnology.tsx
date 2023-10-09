import { FC } from "react";
import { Technology } from "../interfaces";

interface SingleTechnologyProps {
  tech: Technology;
  index: number;
}

const SingleTechnology: FC<SingleTechnologyProps> = ({ tech, index }) => {
  return (
    <div className="flex h-52  w-40 flex-col items-center rounded-lg bg-opacity-0 px-5 py-2 font-semibold transition-colors duration-500 ease-in-out hover:bg-white hover:bg-opacity-25">
      <h3
        className={
          index % 2 === 0
            ? "text-primaryLime"
            : "rounded-lg bg-primaryLime px-3 text-primaryGray"
        }
      >
        {tech.name}
      </h3>

      <img src={tech.img} alt={tech.name} className="my-auto" />
    </div>
  );
};

export default SingleTechnology;
