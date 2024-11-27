import html from "../assets/technologies/html.png";
import css from "../assets/technologies/css.png";
import js from "../assets/technologies/javascript.png";
import ts from "../assets/technologies/typescript.png";
import react from "../assets/technologies/react.png";
import angular from "../assets/technologies/angular.png";
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
import csharp from "../assets/technologies/csharp.png";
import aws from "../assets/technologies/aws.png";

import { Technology } from "../interfaces";

export const technologies: Technology[] = [
  {
    id: "html",
    name: "HTML",
    img: html,
    description:
      "HTML is the fundamental building block of the web. It defines the structure of web pages using a system of tags and attributes to organize content such as headings, paragraphs, images, links, and more. It provides the semantic foundation for web content, enabling search engines and assistive technologies to understand the page's layout and content.",
  },
  {
    id: "css",
    name: "CSS",
    img: css,
    description:
      "CSS is a stylesheet language used to describe the visual presentation of HTML documents. It enables developers to define the layout, colors, fonts, and spacing for web pages, ensuring a consistent look and feel across devices. Modern CSS includes advanced features like grid systems, flexbox, animations, and media queries for responsive design.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    img: js,
    description:
      "JavaScript is a high-level, interpreted programming language that powers the dynamic behavior of web applications. It allows developers to create interactive features like form validation, animations, and real-time updates. With the rise of frameworks like React and Angular, JavaScript has become the backbone of modern web development, extending beyond browsers to server-side and mobile application development.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    img: ts,
    description:
      "TypeScript is a superset of JavaScript that adds optional static typing and other features to improve code reliability and developer productivity. It ensures better code quality by catching errors during development, and it supports modern JavaScript features while compiling to plain JavaScript for compatibility with all environments.",
  },
  {
    id: "react",
    name: "React",
    img: react,
    description:
      "React is a powerful JavaScript library created by Facebook for building dynamic, interactive user interfaces. It uses a component-based architecture, allowing developers to create reusable UI components. React's virtual DOM efficiently updates only the necessary parts of the user interface, resulting in faster performance for complex applications.",
  },
  {
    id: "angular",
    name: "Angular",
    img: angular,
    description:
      "Angular is a full-featured JavaScript framework developed and maintained by Google. It provides a complete solution for building web applications, including features like two-way data binding, dependency injection, and a powerful CLI. Angular is particularly suited for developing large-scale enterprise applications.",
  },
  {
    id: "next",
    name: "Next.js",
    img: next,
    description:
      "Next.js is a React framework that offers server-side rendering (SSR), static site generation (SSG), and client-side rendering. It simplifies the development of performant web applications by providing routing, API routes, and optimized image handling out of the box. It's particularly popular for building SEO-friendly and scalable web apps.",
  },
  {
    id: "node",
    name: "Node.js",
    img: node,
    description:
      "Node.js is a runtime environment that enables JavaScript to run on the server side. Built on Chrome's V8 JavaScript engine, it's known for its non-blocking, event-driven architecture, making it ideal for scalable and real-time applications such as chat apps, APIs, and streaming services.",
  },
  {
    id: "express",
    name: "Express.js",
    img: express,
    description:
      "Express.js is a lightweight, flexible Node.js web application framework. It provides a simple yet robust set of tools to build APIs and web applications. With its middleware architecture, developers can easily handle routing, request processing, and error handling.",
  },
  {
    id: "nest",
    name: "Nest.js",
    img: nest,
    description:
      "Nest.js is a progressive Node.js framework built with TypeScript. Inspired by Angular, it emphasizes modularity, scalability, and maintainability. It's well-suited for building robust server-side applications, particularly RESTful APIs and microservices.",
  },
  {
    id: "csharp",
    name: "C#",
    img: csharp,
    description:
      "C# is a modern, object-oriented programming language developed by Microsoft. Known for its versatility, it's used for a wide range of applications, including desktop software, web development (with ASP.NET), and game development (with Unity).",
  },
  {
    id: "mysqq",
    name: "MySQL",
    img: mysql,
    description:
      "MySQL is a widely-used open-source relational database management system (RDBMS). Known for its speed and reliability, it's the backbone of many web applications, storing structured data and providing powerful querying capabilities.",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    img: postgres,
    description:
      "PostgreSQL is a highly advanced open-source relational database system known for its performance, extensibility, and compliance with SQL standards. It supports complex queries, indexing, and full-text search, making it ideal for sophisticated applications.",
  },
  {
    id: "mongo",
    name: "MongoDB",
    img: mongo,
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. This schema-less structure allows for scalability and quick development cycles, making it a popular choice for modern, agile applications.",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    img: tailwind,
    description:
      "Tailwind is a utility-first CSS framework that allows developers to build modern, responsive designs directly in their HTML using predefined classes. Its approach promotes rapid development and customization without the need to write custom CSS.",
  },
  {
    id: "github",
    name: "GitHub",
    img: github,
    description:
      "GitHub is a web-based platform for version control and collaborative software development using Git. It enables developers to share, review, and manage code, making it an essential tool for teams and open-source projects.",
  },
  {
    id: "bitbucket",
    name: "Bitbucket",
    img: bitbucket,
    description:
      "Bitbucket is a Git-based source code repository hosting service, similar to GitHub, with strong integration into Atlassian's ecosystem. It's commonly used for private repositories and enterprise software development.",
  },
  {
    id: "aws",
    name: "AWS",
    img: aws,
    description:
      "AWS is a comprehensive cloud computing platform provided by Amazon. It offers a wide range of services, including computing power, storage, databases, and machine learning, enabling developers to build scalable and cost-efficient applications.",
  },
];
