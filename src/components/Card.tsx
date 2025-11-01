import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface CardProps {
  className?: string;
  role?: string;
}

export const Card = ({
  className,
  children,
  role
}: PropsWithChildren<CardProps>) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const hoverProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { scale: 1.03, translateY: -6, transition: { duration: 0.2 } },
        whileFocus: { scale: 1.02, translateY: -3 }
      };

  return (
    <motion.div
      role={role}
      className={cn(
        "focus-ring glass-panel rounded-2xl p-5 transition-all duration-300 sm:p-6",
        "hover:shadow-glow hover:ring-white/80 focus-visible:shadow-glow focus-visible:ring-white/80",
        "relative overflow-hidden",
        className
      )}
      tabIndex={role === "button" ? 0 : undefined}
      {...hoverProps}
    >
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 gradient-accent" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
