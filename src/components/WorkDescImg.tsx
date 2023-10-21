import { FC } from "react";

interface WorkDescImg {
  title: string;
  description: string;
  src: string;
  url: string;
}

const WorkDescImg: FC<WorkDescImg> = ({ src, title, description, url }) => {
  return (
    <div className="flex items-center justify-center gap-24">
      <div>
        <h2 className="mb-3 text-xl text-primaryLime">{title}</h2>
        <p className="w-[400px] pb-4 text-xl text-white">{description}</p>
        <a
          href={url}
          target="_blank"
          className="text-sm italic text-primaryLime underline underline-offset-4 lg:text-base"
        >
          Visit site
        </a>
      </div>

      <div className="h-60 w-1 rounded-full bg-white"></div>

      <img
        className="rounded-xl lg:transition-all lg:duration-500 lg:ease-in-out lg:hover:scale-110 lg:hover:transform"
        src={src}
        width={400}
        alt="testimg"
      />
    </div>
  );
};

export default WorkDescImg;
