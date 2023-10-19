import { FC } from "react";

import html from "../assets/technologies/html.png";
import css from "../assets/technologies/css.png";
import js from "../assets/technologies/javascript.png";
import ts from "../assets/technologies/typescript.png";
import react from "../assets/technologies/react.png";
import tailwind from "../assets/technologies/tailwind.png";
import next from "../assets/technologies/nextjs.png";
import node from "../assets/technologies/node.png";
import express from "../assets/technologies/express.png";
import nest from "../assets/technologies/nest.png";
import mysql from "../assets/technologies/mysql.png";
import postgres from "../assets/technologies/postgresql.png";
import mongo from "../assets/technologies/mongo.png";
import github from "../assets/technologies/github.png";
import bitbucket from "../assets/technologies/bitbucket.png";

import SingleTechnology from "./SingleTechnologyIcon";
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
      name: "Express.js",
      img: express,
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
    {
      name: "Bitbucket",
      img: bitbucket,
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
