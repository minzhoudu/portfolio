import { FC } from "react";

import myImg from "../assets/me.jpg";
import SocialIcons from "../components/SocialIcons";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <main className="flex h-screen flex-col items-center overflow-y-hidden bg-primaryGray">
      <div className="my-auto flex w-11/12 flex-col items-center justify-evenly gap-y-20 pt-10 md:w-3/4 md:flex-row md:gap-5">
        <section className="text-center text-3xl leading-snug text-white md:text-left xl:text-5xl">
          <h1>
            HI, MY NAME IS
            <span className="font-bold text-primaryLime"> PAVLE</span>.
          </h1>
          <p>
            I'm a Full
            <span className="font-bold text-primaryLime">Stack</span> Web
            <span className="font-bold text-primaryLime"> Developer</span>.
          </p>
        </section>

        <section>
          <img
            src={myImg}
            alt="dummyimage"
            loading="lazy"
            className="w-[200px] rounded-full xl:w-[400px]"
          />
        </section>
      </div>

      <SocialIcons />
    </main>
  );
};

export default Home;
