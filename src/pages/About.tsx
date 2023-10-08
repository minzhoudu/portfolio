import { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <main className="flex w-full flex-col bg-primaryGray pb-10 pt-20">
      <div className="self-center py-32 text-7xl text-white">
        <h1>
          <span>About</span>{" "}
          <span className="rounded-lg bg-primaryLime px-2">Me</span>
        </h1>
      </div>

      <div className="mx-auto w-10/12 text-3xl text-white lg:w-3/5">
        <h1 className="pb-3 text-5xl">
          Hello, my name is <span className="text-primaryLime">Pavle</span>
        </h1>

        <h2>
          Full-stack Developer from Novi Sad,{" "}
          <span className="text-primaryLime">Serbia</span>.
        </h2>

        <h3 className="pt-20 font-semibold tracking-wider">Biography</h3>

        <p className="pt-5 text-2xl">
          I'm a passionate developer with a journey that began on the frontend
          and evolved into a full-stack adventure. I am both driven and
          self-motivated, constantly experimenting with new technologies and
          techniques, strive to better myself as a developer, and the
          development community as a whole.
        </p>

        <p className="pt-5 text-2xl">
          I have been studying web development since 2017, starting with{" "}
          <span className="text-primaryLime">HTML</span>,{" "}
          <span className="text-primaryLime">CSS</span> and vanilla
          <span className="text-primaryLime"> JavaScript </span>
          on a frontend. As I delved deeper into the web development landscape,
          I discovered my fascination with the backend.{" "}
          <span className="text-primaryLime">Node.js</span> and{" "}
          <span className="text-primaryLime">Express.js</span> were my first
          backend technologies.
        </p>

        <p className="pt-5 text-2xl">
          As i progressed, I started learning working with frontend frameworks
          such as <span className="text-primaryLime">React</span> and{" "}
          <span className="text-primaryLime">Svelte</span>, and fell in love
          with backend framework{" "}
          <span className="text-primaryLime">Nest.js</span> because of its built
          with <span className="text-primaryLime">TypeScript</span> in mind for
          type safety, and it has modular and highly scalable architecture.
        </p>

        <p className="pt-5 text-2xl">
          My love for backend development led me to learn about databases, and I
          started working with <span className="text-primaryLime">MySQL</span>{" "}
          and <span className="text-primaryLime">Postgres</span> as well as
          NoSQL databases (<span className="text-primaryLime">MongoDB</span>)
        </p>
      </div>
    </main>
  );
};

export default About;
