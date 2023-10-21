import { FC } from "react";

interface WorkImgDesc {
  title: string;
  description: string;
  src: string;
  url: string;
}

const WorkImgDesc: FC<WorkImgDesc> = ({ src, description, title, url }) => {
  return (
    <div className="mx-auto mb-20 flex w-[90%] flex-col items-center justify-center gap-5 lg:mb-0 lg:w-full lg:flex-row lg:gap-24">
      <img className="rounded-xl" src={src} width={400} alt="testimg" />

      <div className="hidden h-60 w-1 rounded-full bg-white lg:block"></div>

      <div className="w-full lg:w-auto">
        <h2 className="mb-3 text-sm text-primaryLime lg:text-xl">{title}</h2>

        <p className="pb-4 text-sm text-white lg:w-[400px] lg:text-xl">
          {description}
        </p>

        <a
          href={url}
          target="_blank"
          className="text-sm italic text-primaryLime underline underline-offset-4 lg:text-base"
        >
          Visit site
        </a>
      </div>
    </div>
  );
};

export default WorkImgDesc;
