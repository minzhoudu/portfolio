import { FC } from "react";
import WorkImgDesc from "./WorkImgDesc";
import WorkDescImg from "./WorkDescImg";
import { work } from "../data/work";

interface WorkComponentProps {}

const WorkComponent: FC<WorkComponentProps> = () => {
  return (
    <>
      <div className="hidden flex-col gap-y-20 lg:flex">
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

      <div className="flex flex-col lg:hidden">
        <div className="w-[400px]">
          {work.map((item) => (
            <WorkImgDesc
              src={item.img}
              title={item.title}
              description={item.description}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkComponent;
