"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import { links } from "./config";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1000] bg-background/80 backdrop-blur-md"
      )}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className="flex items-center justify-between w-full h-full max-w-7xl mx-auto px-4">
        <Link href="/" className="flex items-center justify-center shrink-0">
          <Button variant={"link"} className="text-md px-0">
            {config.author}
          </Button>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <Link key={link.title} href={link.href}>
              <Button variant="ghost" className="text-sm px-2 xl:px-4">
                {link.title}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Since we removed right-side elements, we can add a placeholder to keep centering for absolute left-1/2, or just rely on justify-between. 
            Because nav is absolute positioned in the center, it doesn't matter much. But we need a div on the right to balance justify-between if needed. 
            Actually justify-between only spaces the flex items. Since nav is absolute, the mobile menu button is the other flex item on right. */}

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden ml-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg p-4 flex flex-col gap-2 lg:hidden z-50 max-h-[80vh] overflow-y-auto"
          >
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="ghost" className="w-full justify-start text-sm">
                  {link.title}
                </Button>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
