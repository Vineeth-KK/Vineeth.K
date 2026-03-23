"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiCplusplus,
  SiExpress,
  SiFlask,
  SiJavascript,
  SiKubuntu,
  SiMysql,
  SiPm2,
  SiPrettier,
  SiPython,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiVscodium,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "vineeth2005k@gmail.com",
    href: "mailto:vineeth2005k@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "+91-9744630175",
    href: "tel:+919744630175",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/vineeth~k/",
    content: "vineeth~k",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Vineeth-KK",
    content: "/Vineeth-KK",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "C++",
    content: "C++ is a cross-platform language that can be used to create high-performance applications.",
    icon: <SiCplusplus size={"50px"} color={"#00599C"} />,
    color: "#00599C",
  },
  {
    name: "Python",
    content: "Python is a programming language that lets you work quickly and integrate systems more effectively.",
    icon: <SiPython size={"50px"} color={"#3776AB"} />,
    color: "#3776AB",
  },
  {
    name: "JavaScript",
    content: "JavaScript is a high-level, interpreted programming language",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "React.js",
    content: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "HTML",
    content: "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language.",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "MySQL",
    content: "MySQL is an open-source relational database management system.",
    icon: <SiMysql size={"50px"} color="#4479A1" />,
    color: "#4479A1",
  },
  {
    name: "Flask",
    content: "Flask is a micro web framework written in Python.",
    icon: <SiFlask size={"50px"} color="#000000" />,
    color: "#000000",
  },
  {
    name: "Git",
    content: "Git is a free and open source distributed version control system.",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "VS Code",
    content: "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
    icon: <SiVisualstudiocode size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square lg:mb-5">
                <div className="relative group cursor-pointer overflow-hidden rounded-full border-4 border-zinc-700/50 hover:border-zinc-500 transition-all duration-500">
                  <Image
                    className="object-cover w-[100px] md:w-[150px] lg:w-[200px] aspect-square transition-all duration-500 dark:grayscale-[0.6] dark:brightness-90 group-hover:dark:grayscale-0 group-hover:dark:brightness-100 hover:scale-105"
                    alt="Vineeth K"
                    src="/assets/vineeth-profile.jpg"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Vineeth K</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Developer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Hey there! I&apos;m Vineeth K, an aspiring developer passionate about
              creating meaningful digital experiences. With a growing skill set in C++,
              Python, and Web Development, I thrive on turning ideas into reality through coding.
            </p>
            <p className="mb-10">
              When I&apos;m not coding, you can find me exploring Machine Learning, tackling
              algorithms, or brainstorming my next project.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {[...TOOLS].reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            {/* <div className="">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 3000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
