"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { BsGithub, BsTelegram } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] max-w-[50rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center flex-col">
        <motion.div
          className="flex flex-col text-3xl !leading-[1.3] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-bold">Hi, I'm Nick.</h1>
          <p className="flex  font-bold gap-2 sm:text-4xl">
            <span className="font-medium">I'm a</span>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                3000,
                "Web Developer",
                3000,
                "Web Designer",
                3000,
              ]}
              speed={50}
              className="text-violet-500"
              wrapper="span"
              repeat={Infinity}
            />
          </p>
        </motion.div>

        <motion.div
          className="flex sm:flex-row items-center justify-center
          gap-2 px-4 text-lg mt-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
          }}
        >
          <a
            href="/CV.pdf"
            download
            className="bg-white font-medium px-7 py-2 flex items-center gap-2 rounded-full
            outline-none focus:scale-[1.08] hover:scale-110  active:scale-105 transition cursor-pointer
            border border-black/10"
          >
            Download CV <HiDownload />
          </a>
          <a
            className="bg-white p-3 flex items-center gap-2 rounded-full
            outline-none focus:scale-[1.15] hover:scale-110  active:scale-105 transition
            cursor-pointer border border-black/10"
            href="https://github.com/A3thyr"
            target="_blank"
          >
            <BsGithub />
          </a>

          <a
            className="bg-white p-3 flex items-center gap-2 rounded-full
            outline-none focus:scale-[1.15] hover:scale-110  active:scale-105 transition
            cursor-pointer border border-black/10"
            href="https://t.me/a3thyr"
            target="_blank"
          >
            <BsTelegram />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
