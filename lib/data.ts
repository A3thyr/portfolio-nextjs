import yourforksImg from "@/public/yourforks.png";
import reactsneakersImg from "@/public/reactsneakers.png";
import reactpizzaImg from "@/public/reactpizza.png";
import issuetracker from "@/public/issuetracker.png";

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
