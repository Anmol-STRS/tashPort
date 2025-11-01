import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface CollapsibleProps {
  id: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}

export const Collapsible = ({
  id,
  label,
  className,
  children
}: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-cocoa/10 bg-white/70 p-4",
        className
      )}
    >
      <button
        type="button"
        className="focus-ring flex w-full items-center justify-between gap-4 text-left text-lg font-semibold text-cocoa"
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{label}</span>
        <motion.span
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.25,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-mint/80 text-charcoal"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={`${id}-content`}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                height: "auto",
                opacity: 1,
                transition: {
                  duration: prefersReducedMotion ? 0 : 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              },
              collapsed: {
                height: 0,
                opacity: 0,
                transition: {
                  duration: prefersReducedMotion ? 0 : 0.2,
                  ease: [0.4, 0, 1, 1]
                }
              }
            }}
            className="overflow-hidden"
          >
            <div className="type-body mt-4 text-charcoal/80">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
