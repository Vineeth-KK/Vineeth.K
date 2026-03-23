import { CERTIFICATES } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import Link from "next/link";

const CertificatesSection = () => {
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[50vh] py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="certificates"
          title="Certificates"
          desc="My professional certifications."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {CERTIFICATES.map((cert, index) => (
            <div key={cert.id} className="relative">
              <CertificateCard certificate={cert} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const CertificateCard = ({
  certificate,
  index,
}: {
  certificate: (typeof CERTIFICATES)[0];
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
      className="h-full"
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md h-full flex flex-col"
        )}
      >
        <CardHeader className="pb-5 h-full flex flex-col justify-between gap-4">
          <div className="flex justify-between items-start gap-4">
            <div className="space-y-1.5">
               <CardTitle className="text-lg font-bold tracking-tight leading-tight">
                 {certificate.title}
               </CardTitle>
               <p className="text-sm font-medium text-muted-foreground">
                 {certificate.issuer}
               </p>
            </div>
            <Badge variant="secondary" className="shrink-0 font-mono text-xs font-normal whitespace-nowrap mt-1">
              {certificate.date}
            </Badge>
          </div>
          
          {certificate.link && certificate.link !== "#" && (
            <div className="flex justify-start mt-auto">
              <Link 
                href={certificate.link} 
                target="_blank" 
                className="flex items-center w-fit gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 dark:bg-blue-400/10 dark:hover:bg-blue-400/20 backdrop-blur-md border border-blue-500/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                title="View Certificate"
              >
                <Award className="w-4 h-4 drop-shadow-sm" />
                <span className="text-xs font-semibold tracking-wide">View Certificate</span>
              </Link>
            </div>
          )}
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default CertificatesSection;
