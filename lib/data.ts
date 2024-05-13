import yourforksImg from "../public/yourforks.png";
import reactsneakersImg from "../public/reactsneakers.png";
import reactpizzaImg from "../public/reactpizza.png";
import issuetracker from "../public/issuetracker.png";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const projects = [
  {
    name: "React Sneakers",
    description:
      "React Sneakers is a web store, for an every type of person, who is interested in a brand new sneakers.",
    github: "https://github.com/A3thyr/sneakers",
    imageUrl: reactsneakersImg,
    tags: ["React", "JavaScript", "SASS"],
    link: "https://a3thyr.github.io/sneakers/",
  },
  {
    name: "React Pizza",
    description:
      "React Pizza suggests you an amazing choice of delicious pizzas, which you can order anytime you want.",
    github: "https://github.com/A3thyr/react-pizza",
    imageUrl: reactpizzaImg,
    tags: ["React", "TypeScript", "SASS", "Redux"],
    link: "https://a3thyr.github.io/?sortProperty=rating&categoriesIndex=0&currentPage=1",
  },
  {
    name: "YourForks",
    description:
      "YourForks is a reservation service, that provides you to choose a restaurant, where you can spend an amazing evening.",
    github: "https://github.com/A3thyr/yourforks-nextjs",
    imageUrl: yourforksImg,
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma"],
    link: "https://yourforks-nextjs.vercel.app/",
  },
  {
    name: "Issue Tracker",
    description:
      "Issue Tracker is a web app, that provides you a service, where you can submit different types of bug reports.",
    github: "https://github.com/A3thyr/issue-tracker-nextjs",
    imageUrl: issuetracker,
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma", "Redux"],
    link: "https://issue-tracker-nextjs-tau.vercel.app/",
  },
] as const;

export const experienceData = [
  {
    title: "Accepted to university",
    description:
      "I got accepted by The Saint Petersburg State University of Aerospace Instrumentation and started learning for a CS degree.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Started learning Web Development",
    description:
      "After some time of studying and choosing between Java and Web Development, I started learning the last one and wrote my first html document.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    description:
      "As for now, I learnt newest features and got confident in my skill in front-end development.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Radix UI",
  "MUI",
  "Prisma",
  "Redux",
  "PostgreSQL",
  "Framer Motion",
] as const;
