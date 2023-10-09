import { FC } from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import ts from "../assets/typescript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import next from "../assets/nextjs.png";
import node from "../assets/node.png";
import nest from "../assets/nest.png";
import mysql from "../assets/mysql.png";
import postgres from "../assets/postgresql.png";
import mongo from "../assets/mongo.png";
import github from "../assets/github.png";

interface TechnologiesProps {}
interface Technology {
  name: string;
  img: string;
}

const Technologies: FC<TechnologiesProps> = () => {
  const technologies: Technology[] = [
    {
      name: "HTML",
      img: html,
    },
    {
      name: "CSS",
      img: css,
    },
    {
      name: "JavaScript",
      img: js,
    },
    {
      name: "TypeScript",
      img: ts,
    },
    {
      name: "React",
      img: react,
    },
    {
      name: "Next.js",
      img: next,
    },
    {
      name: "Node.js",
      img: node,
    },
    {
      name: "Nest.js",
      img: nest,
    },
    {
      name: "MySQL",
      img: mysql,
    },
    {
      name: "PostgreSQL",
      img: postgres,
    },
    {
      name: "MongoDB",
      img: mongo,
    },
    {
      name: "Tailwind",
      img: tailwind,
    },
    {
      name: "GitHub",
      img: github,
    },
  ];

  return (
    <div className="mx-auto flex flex-wrap justify-center gap-x-10 gap-y-10 pt-5 text-center text-xl">
      {technologies.map((tech, index) => (
        <div className="flex h-52  w-40 flex-col items-center rounded-lg bg-opacity-0 px-5 py-2 font-semibold transition-colors duration-500 ease-in-out hover:bg-white hover:bg-opacity-25">
          <h3
            className={
              index % 2 === 0
                ? "text-primaryLime"
                : "rounded-lg bg-primaryLime px-3 text-primaryGray"
            }
          >
            {tech.name}
          </h3>

          <img src={tech.img} alt={tech.name} className="my-auto" />
        </div>
      ))}
    </div>
  );
};

export default Technologies;
