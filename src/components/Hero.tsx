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
  { top: "12%", left: "6%", delay: 0 },
  { top: "24%", left: "14%", delay: 0.6 },
  { top: "18%", left: "22%", delay: 1.2 }
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
    <header className="relative overflow-hidden bg-gradient-to-b from-cream/95 via-cream to-mint/40 pb-16 pt-10 sm:pb-20 sm:pt-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-[-110px] top-[-90px] hidden h-72 w-72 rounded-full bg-cocoa/18 blur-3xl sm:block" />
        <div className="absolute bottom-[-160px] left-[-60px] hidden h-96 w-96 rounded-full bg-mint/30 blur-3xl sm:block" />
        <div className="absolute left-[-120px] top-[-140px] h-64 w-64 rounded-full bg-cocoa/14 blur-3xl sm:hidden" />
      </div>
      <motion.div
        className="pointer-events-none absolute inset-0 hidden sm:block"
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
      <Container className="relative z-10">
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="glass-panel mb-12 flex w-full flex-col items-start gap-5 rounded-3xl px-4 py-4 text-sm shadow-elegant sm:mb-16 sm:flex-row sm:items-center sm:justify-between sm:px-6"
          aria-label="Primary"
        >
          <motion.span
            variants={itemVariants}
            className="font-display text-lg text-cocoaDark sm:text-xl"
          >
            Tashneet
          </motion.span>
          <div className="relative -mx-1 flex w-full items-center gap-2 overflow-x-auto pb-1 sm:mx-0 sm:w-auto sm:flex-wrap sm:overflow-visible sm:pb-0">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                variants={itemVariants}
                className="focus-ring inline-flex min-h-[40px] flex-shrink-0 items-center rounded-full px-3.5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-charcoal/80 transition-all duration-200 hover:bg-gradient-to-br hover:from-mint/70 hover:to-mint/50 hover:text-cocoaDark hover:shadow-sm sm:min-h-[44px] sm:px-4 sm:py-2.5 sm:text-sm sm:tracking-[0.24em]"
                href={item.href}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.nav>
        <div className="relative z-[1] grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.p
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-xs uppercase tracking-[0.28em] text-sage shadow-elegant backdrop-blur-sm sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-sm sm:tracking-[0.32em]"
            >
              <span className="h-2 w-2 rounded-full bg-sage shadow-sm animate-pulse sm:h-2.5 sm:w-2.5" aria-hidden />
              Hi, I’m Tashneet.
            </motion.p>
            <motion.h1 variants={itemVariants} className="type-h1 text-3xl leading-snug sm:text-4xl lg:text-6xl">
              Ambitious, very funny, sometimes overthinks. Always real.
            </motion.h1>
            <motion.p variants={itemVariants} className="type-body max-w-2xl text-base sm:text-lg">
              Chocolatey mornings. Garden evenings. Stories in between.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2.5 text-xs text-charcoal/70 sm:gap-3 sm:text-sm"
            >
              <span className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-mint/70 to-mint/50 border border-white/50 px-5 py-2.5 shadow-sm backdrop-blur-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-sage shadow-inner" aria-hidden />
                gentle optimism
              </span>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-mint/70 to-mint/50 border border-white/50 px-5 py-2.5 shadow-sm backdrop-blur-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-cocoa shadow-inner" aria-hidden />
                jokes before agendas
              </span>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2.5 pt-3 sm:gap-3 sm:pt-4"
            >
              {chocolateNotes.map((note) => (
                <span
                  key={note}
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-cocoa shadow-elegant backdrop-blur-sm sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.28em]"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-cocoa shadow-[0_0_0_4px_rgba(247,242,238,0.75)] sm:h-3 sm:w-3"
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
            className="relative flex justify-center sm:justify-center lg:justify-end"
          >
            <motion.div
              variants={itemVariants}
              className="glass-panel flex w-full max-w-xs items-center justify-center rounded-2xl p-4 shadow-glow sm:max-w-sm sm:p-5"
            >
              <div className="focus-ring relative aspect-square w-full rounded-xl border border-white/70 bg-white/65 p-4 shadow-elegant backdrop-blur-sm sm:p-5">
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
                  className="pointer-events-none absolute inset-x-8 bottom-6 h-10 rounded-full bg-cocoa/20 blur-3xl sm:inset-x-10 sm:h-12"
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
