"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          LET&apos;S WORK <br />
          TOGETHER
        </>} />
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] mx-4">
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl mt-10 md:mt-20 shadow-xl dark:shadow-2xl">
          <CardHeader>
            <CardTitle className="text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">Contact Form</CardTitle>
            <CardDescription className="text-base text-neutral-600 dark:text-neutral-400 mt-2">
              Please contact me directly at{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors underline decoration-blue-500/30 underline-offset-4 cursor-can-hover rounded-lg"
              >
                {config.email}
              </a>{" "}
              or drop your info here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
