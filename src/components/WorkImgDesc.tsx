import { FC } from "react";

interface WorkImgDesc {
  title: string;
  description: string;
  src: string;
  url: string;
}

const WorkImgDesc: FC<WorkImgDesc> = ({ src, description, title, url }) => {
  return (
    <div className="flex items-center justify-center gap-24">
      <img src={src} width={400} alt="testimg" />

      <div className="h-60 w-1 rounded-full bg-white"></div>

      <div>
        <h2 className="mb-3 text-xl text-primaryLime">{title}</h2>
        <p className="w-[400px] pb-4 text-xl text-white">{description}</p>
        <a
          href={url}
          target="_blank"
          className="rounded-full bg-primaryLime-dark px-3 py-1 text-white"
        >
          Visit site
        </a>
      </div>
    </div>
  );
};

export default WorkImgDesc;
