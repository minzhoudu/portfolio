import { FC } from "react";
import WorkImgDesc from "./WorkImgDesc";
import WorkDescImg from "./WorkDescImg";

import flos from "../assets/work/flos.png";
import bebitalia from "../assets/work/bebitalia.png";
import arclinea from "../assets/work/arclinea.png";
import louispoulsen from "../assets/work/louis.png";

interface WorkComponentProps {}

const WorkComponent: FC<WorkComponentProps> = () => {
  const work = [
    {
      title: "Flos",
      img: flos,
      description:
        "Recognised globally for its iconic design and technological innovation, Flos is a leading high-end Italian lighting Brand in the residential and architectural sectors.",
      url: "https://www.flos.com",
    },
    {
      title: "B&B Italia",
      img: bebitalia,
      description:
        "Leading Italian high-end furniture design Brand, established in 1966 through the inspired vision of Piero Ambrogio Busnelli.",
      url: "https://www.bebitalia.com",
    },
    {
      title: "Arclinea",
      img: arclinea,
      description:
        "Started as an artisanal laboratory specialising in wood-processing and has grown to become an Italian leader in high-end kitchen designs.",
      url: "https://www.arclinea.com",
    },
    {
      title: "Louis Poulsen",
      img: louispoulsen,
      description:
        "Working with world renowned designers to design iconic products. Their impressive product portfolio spans indoor, outdoor and architectural lighting",
      url: "https://www.louispoulsen.com",
    },
  ];

  return (
    <div className="flex flex-col gap-y-20">
      {work.map((item, index) =>
        index % 2 === 0 ? (
          <WorkImgDesc
            src={item.img}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        ) : (
          <WorkDescImg
            src={item.img}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        ),
      )}
    </div>
  );
};

export default WorkComponent;
