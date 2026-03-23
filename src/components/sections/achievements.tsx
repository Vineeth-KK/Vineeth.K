import { ACHIEVEMENTS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AchievementsSection = () => {
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[60vh] py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="achievements"
          title="Extracurricular"
          desc="My activities and achievements."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-8 md:gap-12 relative">
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />

          {ACHIEVEMENTS.map((achievement, index) => (
            <div key={achievement.id} className="relative">
              <AchievementCard achievement={achievement} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: (typeof ACHIEVEMENTS)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold tracking-tight">
                {achievement.title}
              </CardTitle>
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal">
              {achievement.date}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
            {achievement.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AchievementsSection;
