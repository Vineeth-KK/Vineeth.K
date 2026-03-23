import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { SKILLS, SkillNames } from "@/data/constants";

const AboutSection = () => {
  return (
    <SectionWrapper
      id="about"
      className="flex flex-col items-center justify-center min-h-[100vh] py-20 z-10"
    >
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="about"
          title="About Me"
          desc="Get to know me better."
          className="mb-12 md:mb-20 mt-0"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center relative z-10"
        >
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/10 bg-zinc-800/10 dark:bg-zinc-800/50 shadow-xl flex items-center justify-center p-3 md:p-4 backdrop-blur-sm group cursor-pointer transition-all duration-500 hover:border-primary/30 hover:shadow-primary/20 hover:shadow-2xl">
              <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/assets/vineeth-profile.jpg"
                  alt="Vineeth K"
                  width={320}
                  height={320}
                  className="rounded-full object-cover w-full h-full transition-all duration-500 dark:grayscale-[0.6] dark:brightness-90 group-hover:dark:grayscale-0 group-hover:dark:brightness-100 hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <Card className="bg-card text-card-foreground border-border hover:border-primary/20 transition-colors duration-300 shadow-sm hover:shadow-md">
              <CardContent className="p-6 md:p-8 space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Hey there! I&apos;m <strong className="text-foreground font-semibold">Vineeth K</strong>, an aspiring developer passionate about
                  creating meaningful digital experiences. With a growing skill set in C++,
                  Python, and Web Development, I thrive on turning ideas into reality through coding.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  When I&apos;m not coding, you can find me exploring Machine Learning, tackling
                  algorithms, or brainstorming my next project.
                </p>
                
                <div className="pt-2">
                  <h3 className="text-sm font-semibold text-foreground mb-3 text-muted-foreground">CORE TECH STACK</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      SkillNames.CPP,
                      SkillNames.PYTHON,
                      SkillNames.REACT,
                      SkillNames.NEXTJS,
                      SkillNames.NODEJS,
                      SkillNames.MYSQL
                    ].map((skillName) => {
                      const skill = SKILLS[skillName];
                      return (
                        <Badge
                          key={skillName}
                          variant="outline"
                          className="gap-1.5 text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-border/50 py-1"
                        >
                          <img
                            src={skill.icon}
                            alt={skill.label}
                            className="w-3.5 h-3.5 object-contain"
                          />
                          {skill.label}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
                
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link href="/about">
                    <Button variant="default" className="w-fit">View Full Profile</Button>
                  </Link>
                  <Link href="#contact">
                    <Button variant="outline" className="w-fit">Contact Me</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
