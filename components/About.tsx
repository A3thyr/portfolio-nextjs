"use client";

import { motion } from "framer-motion";
import SectionHeading from "./Section-heading";
import Skills from "./Skills";

export default function About() {
  return (
    <motion.section
      className="mt-40 mb-28 text-center
       leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div
        className="flex flex-col space-y-10 items-stretch justify-between
       align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left"
      >
        <div className="md:w-1/3 font-medium text-lg">
          <h1 className="text-center text-2xl font-bold mb-6 md:text-left ">
            Little bit of info
          </h1>
          <p>
            Hi, my name is Nick and I am a{" "}
            <span className="font-bold">{"highly ambitious"}</span> and
            <span className="font-bold">{" passionate"}</span> web developer
            based in Saint Petersburg.
          </p>
          <br />
          <p>
            Currently, I am studying in The Saint Petersburg State University of
            Aerospace Instrumentation for a CS degree.
          </p>
          <br />
          <p>
            I have a lot of hobbies, which helps me relax or just spend my time
            with fun. From reading, doing calisthenics, playing video games. I
            am always seeking new experiences and love to keep myself engaged
            and learning new things.
          </p>
          <br />
          <p>
            I believe that you should{" "}
            <span className="font-bold text-violet-500">
              never stop growing
            </span>{" "}
            and that&#39;s what I strive to do, I have a passion for technology
            and a desire to always push the limits of what is possible.
          </p>
        </div>
        <div className="text-center md:w-[40%] scroll-mt-28 md:text-left">
          <h1 className="text-2xl font-bold mb-6 ">My Skills</h1>
          <Skills />
        </div>
      </div>
    </motion.section>
  );
}
