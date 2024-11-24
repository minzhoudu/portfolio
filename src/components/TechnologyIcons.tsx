import { FC } from "react";

import SingleTechnology from "./SingleTechnologyIcon";
import { technologies } from "../data/technologies";

interface TechnologiesProps {}

const Technologies: FC<TechnologiesProps> = () => {
  return (
    <>
      <h3 className="pb-10 pt-20 font-semibold tracking-wider">Technologies</h3>
      <div className="mask-gradientMask relative h-44 overflow-hidden">
        {technologies.map((tech, index) => (
          <SingleTechnology tech={tech} index={index} key={index} />
        ))}
      </div>
    </>
  );
};

export default Technologies;
