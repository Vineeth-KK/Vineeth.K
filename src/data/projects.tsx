import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiTypescript,
  SiFlask,
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  pygame: {
    title: "Pygame",
    bg: "black",
    fg: "white",
    icon: <SiPython />, // No specific pygame icon
  },
  tkinter: {
    title: "Tkinter",
    bg: "black",
    fg: "white",
    icon: <SiPython />, // No specific tkinter icon
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src?: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "game-level-design",
    category: "AI & Optimization",
    title: "Genetic Algorithm for Game Level Design Optimization",
    src: "/assets/projects-screenshots/game-level-design.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.pygame, PROJECT_SKILLS.tkinter],
    },
    github: "https://github.com/Vineeth-KK",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Formulated an AI-driven Genetic Algorithm approach to automate and optimize game level design with adaptive difficulty control.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Technical Approach</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Engineered genetic encoding, fitness evaluation, crossover, and mutation pipelines, integrating procedural generation and performance optimization.
            </li>
            <li className="font-mono">
              Achieved faster, adaptive level generation with enhanced playability, higher engagement, and reliable cross-platform performance.
            </li>
          </ul>
          
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            HTML, CSS, JavaScript, Python, tkinter, Pygame, tabulate, Genetic Algorithm, Procedural Content Generation
          </p>
        </div>
      );
    },
  },
  {
    id: "disk-scheduling-simulator",
    category: "Web & Simulation",
    title: "Advanced Disk Scheduling Simulator",
    src: "/assets/projects-screenshots/disk-scheduling.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.flask],
    },
    github: "https://github.com/Vineeth-KK",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Designed a web-based Disk Scheduling Simulator to visualize and compare FCFS, SSTF, SCAN and C-SCAN algorithms.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Deployed user-defined simulations using Flask, Python, and graphical seek-sequence visualization techniques.
            </li>
            <li className="font-mono">
              Delivered an interactive tool that computes seek times and throughput, enabling clear analysis of algorithm performance.
            </li>
          </ul>
          
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Python 3, Flask, HTML, CSS, JavaScript, Matplotlib, JSON
          </p>
        </div>
      );
    },
  }
];

export default projects;
