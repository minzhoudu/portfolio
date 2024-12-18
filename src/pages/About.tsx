import { FC } from "react";

import Biography from "../components/Biography";
import Technologies from "../components/Technologies";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <main className="flex w-full flex-col bg-primaryGray pb-10 pt-20">
      <div className="select-none self-center py-32 text-5xl text-white lg:text-7xl">
        <h1>
          <span>About</span>{" "}
          <span className="rounded-lg bg-primaryLime-dark px-4">Me</span>
        </h1>
      </div>

      <div className="mx-auto w-10/12 text-xl text-white lg:w-3/5 lg:text-3xl">
        <h1 className="pb-3 text-3xl lg:text-5xl">
          Hello, my name is <span className="text-primaryLime">Pavle</span>
        </h1>

        <h2>
          Full-stack Developer from Novi Sad,{" "}
          <span className="text-primaryLime">Serbia</span>.
        </h2>

        <Biography />
        <Technologies />
      </div>
    </main>
  );
};

export default About;
