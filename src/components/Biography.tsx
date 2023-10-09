import { FC } from "react";

interface BiographyProps {}

const Biography: FC<BiographyProps> = () => {
  return (
    <>
      <h3 className="pt-20 font-semibold tracking-wider">Biography</h3>

      <p className="pt-5 text-2xl">
        I'm a passionate developer with a journey that began on the frontend and
        evolved into a full-stack adventure. I am both driven and
        self-motivated, constantly experimenting with new technologies and
        techniques, strive to better myself as a developer, and the development
        community as a whole.
      </p>

      <p className="pt-5 text-2xl">
        I have been studying web development since 2017, starting with{" "}
        <span className="text-primaryLime">HTML</span>,{" "}
        <span className="text-primaryLime">CSS</span> and vanilla
        <span className="text-primaryLime"> JavaScript </span>
        on a frontend. As I delved deeper into the web development landscape, I
        discovered my fascination with the backend.{" "}
        <span className="text-primaryLime">Node.js</span> and{" "}
        <span className="text-primaryLime">Express.js</span> were my first
        backend technologies.
      </p>

      <p className="pt-5 text-2xl">
        As i progressed, I started learning working with frontend frameworks
        such as <span className="text-primaryLime">React</span> and{" "}
        <span className="text-primaryLime">Svelte</span>, and fell in love with
        backend framework <span className="text-primaryLime">Nest.js</span> due
        to its excellent <span className="text-primaryLime">TypeScript</span>{" "}
        support and robust type safety. Its modular structure and highly
        scalable architecture further solidified my appreciation for it.
      </p>

      <p className="pt-5 text-2xl">
        My love for backend development led me to learn about databases, and I
        started working with <span className="text-primaryLime">MySQL</span> and{" "}
        <span className="text-primaryLime">Postgres</span> as well as NoSQL
        databases (<span className="text-primaryLime">MongoDB</span>)
      </p>

      <p className="pt-5 text-2xl">
        The latest technologies that caught my attention are{" "}
        <span className="text-primaryLime">C# .NET</span> and{" "}
        <span className="text-primaryLime">Rust</span>.
      </p>
    </>
  );
};

export default Biography;
