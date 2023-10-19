import { FC } from "react";
import WorkImgDesc from "./WorkImgDesc";
import WorkDescImg from "./WorkDescImg";
import { work } from "../data/work";

interface WorkComponentProps {}

const WorkComponent: FC<WorkComponentProps> = () => {
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
