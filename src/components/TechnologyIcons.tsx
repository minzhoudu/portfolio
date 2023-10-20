import { FC } from "react";

import SingleTechnology from "./SingleTechnologyIcon";
import { technologies } from "../data/technologies";

interface TechnologiesProps {}

const Technologies: FC<TechnologiesProps> = () => {
  return (
    <>
      <h3 className="pb-10 pt-20 font-semibold tracking-wider">Technologies</h3>
      <div className="mx-auto flex flex-wrap justify-center gap-x-10 gap-y-10 text-center text-xl">
        {technologies.map((tech, index) => (
          <SingleTechnology tech={tech} index={index} />
        ))}
      </div>
    </>
  );
};

export default Technologies;
