import { FC } from "react";
import Tech from "./Technology";
import Paragraph from "./Paragraph";

interface BiographyProps {}

const Biography: FC<BiographyProps> = () => {
  return (
    <>
      <h3 className="pt-20 font-semibold tracking-wider">Biography</h3>

      <Paragraph>
        I'm a passionate developer with a journey that began on the frontend and
        evolved into a full-stack adventure. I am both driven and
        self-motivated, constantly experimenting with new technologies and
        techniques, strive to better myself as a developer, and the development
        community as a whole.
      </Paragraph>

      <Paragraph>
        I have been studying web development since 2017, starting with{" "}
        <Tech>HTML</Tech>, <Tech>CSS</Tech> and vanilla
        <Tech> JavaScript </Tech>
        on a frontend. As I delved deeper into the web development landscape, I
        discovered my fascination with the backend. <Tech>
          Node.js
        </Tech> and <Tech>Express.js</Tech> were my first backend technologies,
        followed by <Tech>ASP.NET Core</Tech> and <Tech>C#</Tech>.
      </Paragraph>

      <Paragraph>
        As i progressed, I started working with frontend frameworks such as{" "}
        <Tech>React</Tech>, <Tech>Angular</Tech> and <Tech>Svelte</Tech>, and
        fell in love with backend framework <Tech>Nest.js</Tech> due to its
        excellent <Tech>TypeScript</Tech> support and robust type safety. Its
        modular structure and highly scalable architecture further solidified my
        appreciation for it.
      </Paragraph>

      <Paragraph>
        My love for backend development led me to learn about databases, and I
        started working with <Tech>MySQL</Tech> and <Tech>Postgres</Tech>, as
        well as NoSQL databases such as <Tech>MongoDB</Tech>.
      </Paragraph>

      <Paragraph>
        The latest technology that caught my attention, and i want to learn
        about, is <Tech>Rust</Tech>.
      </Paragraph>
    </>
  );
};

export default Biography;
