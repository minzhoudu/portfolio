import { FC } from "react";

// import { HiArrowNarrowRight } from "react-icons/hi";
import myImg from "../assets/me.jpg";
import SocialIcons from "./SocialIcons";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center bg-primaryGray">
      <div className="m-auto flex h-full w-11/12 flex-col items-center justify-evenly pt-10 md:w-3/4 md:flex-row md:gap-5">
        <section className="text-center text-3xl leading-snug text-white md:text-left xl:text-5xl">
          <h1>
            HI, MY NAME IS
            <span className="font-extrabold text-primaryLime"> PAVLE</span>
          </h1>
          <p>
            I'm a Full
            <span className="font-extrabold text-primaryLime">Stack</span> Web
            <span className="font-extrabold text-primaryLime"> Developer</span>
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

      <div>
        <SocialIcons />
      </div>
    </main>
  );
};

export default Home;
