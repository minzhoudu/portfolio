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

import SingleTechnology from "./SingleTechnology";
import { Technology } from "../interfaces";

interface TechnologiesProps {}

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
    <>
      <h3 className="pb-10 pt-20 font-semibold tracking-wider">Technologies</h3>
      <div className="mx-auto flex flex-wrap justify-center gap-x-10 gap-y-10 text-center text-xl">
        {technologies.map((tech, index) => (
          <SingleTechnology tech={tech} index={index} />
        ))}
      </div>
    </>
  );
};

export default Technologies;
