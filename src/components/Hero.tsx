import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const ChocolateScene = lazy(() => import("./ChocolateScene"));

const navItems = [
  { label: "Moodboard", href: "#moodboard" },
  { label: "Stories", href: "#stories" },
  { label: "Ambition Ladder", href: "#ambition" },
  { label: "Overthinking", href: "#overthinking" },
  { label: "Laugh File", href: "#laugh-file" },
  { label: "Little Joys", href: "#little-joys" }
];

const scentTrails = [
  { top: "16%", left: "6%", delay: 0 },
  { top: "26%", left: "13%", delay: 0.7 },
  { top: "20%", left: "21%", delay: 1.4 }
];

const chocolateNotes = [
  "velvet truffle thoughts",
  "hazelnut punchlines",
  "mint-laced curiosity"
];

export const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 24
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-cream/95 via-cream to-mint/40 pb-20 pt-12 sm:pt-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-[-110px] top-[-90px] h-72 w-72 rounded-full bg-cocoa/18 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-60px] h-96 w-96 rounded-full bg-mint/28 blur-3xl" />
      </div>
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={false}
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: [0.35, 0.55, 0.4] }
        }
        transition={{
          duration: 6.5,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: "easeInOut"
        }}
        aria-hidden
      >
        {scentTrails.map((trail, index) => (
          <motion.span
            key={`trail-${index}`}
            className="absolute h-24 w-24 rounded-full bg-gradient-to-b from-cream/80 via-white/80 to-transparent blur-2xl"
            style={{ top: trail.top, left: trail.left }}
            initial={{ opacity: 0.25, y: prefersReducedMotion ? 0 : 16 }}
            animate={
              prefersReducedMotion
                ? { opacity: 0.35 }
                : { opacity: [0.25, 0.5, 0.3], y: [-14, -32, 0] }
            }
            transition={{
              duration: 7.5,
              delay: trail.delay,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      <Container>
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="glass-panel mb-12 flex flex-wrap items-center justify-between gap-6 rounded-full px-5 py-4 text-sm"
          aria-label="Primary"
        >
          <motion.span
            variants={itemVariants}
            className="font-display text-lg text-cocoaDark"
          >
            Tashneet
          </motion.span>
          <div className="flex flex-wrap items-center gap-3">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                variants={itemVariants}
                className="focus-ring inline-flex min-h-[44px] items-center rounded-full px-3.5 py-2 text-charcoal/80 transition-colors hover:bg-mint/70 hover:text-cocoaDark"
                href={item.href}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.nav>
        <div className="relative z-[1] grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.p
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-cocoa/20 bg-white/70 px-4 py-2 text-sm uppercase tracking-[0.32em] text-sage shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-sage" aria-hidden />
              Hi, I’m Tashneet.
            </motion.p>
            <motion.h1 variants={itemVariants} className="type-h1">
              Ambitious, very funny, sometimes overthinks. Always real.
            </motion.h1>
            <motion.p variants={itemVariants} className="type-body max-w-2xl">
              Chocolatey mornings. Garden evenings. Stories in between.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 text-sm text-charcoal/70"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-mint/70 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-sage" aria-hidden />
                gentle optimism
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-mint/70 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-cocoa" aria-hidden />
                jokes before agendas
              </span>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-2"
            >
              {chocolateNotes.map((note) => (
                <span
                  key={note}
                  className="focus-ring inline-flex items-center gap-2 rounded-[2rem] border border-white/50 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cocoa/80 shadow-sm"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-cocoa/80 shadow-[0_0_0_4px_rgba(247,242,238,0.65)]"
                    aria-hidden
                  />
                  {note}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              variants={itemVariants}
              className="glass-panel flex w-full max-w-sm items-center justify-center rounded-[var(--radius-card)] p-4"
            >
              <div className="focus-ring relative aspect-square w-full rounded-[calc(var(--radius-card)-0.75rem)] border border-white/60 bg-white/60 p-4 shadow-soft">
                <Suspense
                  fallback={
                    <img
                      src="/chocolate-fallback.png"
                      alt="Illustrated chocolate truffles on a warm background"
                      className="h-full w-full rounded-[calc(var(--radius-card)-1.5rem)] object-cover"
                      loading="lazy"
                    />
                  }
                >
                  <ChocolateScene />
                </Suspense>
                <div
                  className="pointer-events-none absolute inset-x-10 bottom-6 h-12 rounded-full bg-cocoa/20 blur-3xl"
                  aria-hidden
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </header>
  );
};
