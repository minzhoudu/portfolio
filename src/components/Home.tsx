import { FC } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { HiArrowNarrowRight } from "react-icons/hi";
import myImg from "../assets/me.jpg";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center bg-primaryGray">
      <div className="m-auto flex w-3/4 flex-row items-center justify-between pt-10">
        <section className="text-5xl leading-snug text-white">
          <h1>
            HI, MY NAME IS{" "}
            <span className="font-extrabold text-primaryLime">PAVLE</span>
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
            width={400}
            height={400}
            alt="dummyimage"
            loading="lazy"
            className="rounded-full"
          />
        </section>
      </div>

      <div className="flex justify-center pb-7">
        <a href="https://github.com/minzhoudu" target="_blank">
          <FaGithub className="mx-6 text-4xl text-white hover:text-primaryLime" />
        </a>
        <a href="https://www.instagram.com/p.jjovanovic/" target="_blank">
          <FaInstagram className="mx-6 text-4xl text-white hover:text-primaryLime" />
        </a>
        <a href="https://www.linkedin.com/in/jovanovixp/" target="_blank">
          <FaLinkedin className="mx-6 text-4xl text-white hover:text-primaryLime" />
        </a>
      </div>
    </main>
  );
};

export default Home;
