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
        whileHover: { scale: 1.02, translateY: -4 },
        whileFocus: { scale: 1.02, translateY: -2 }
      };

  return (
    <motion.div
      role={role}
      className={cn(
        "focus-ring glass-panel rounded-[var(--radius-card)] p-6 transition-shadow duration-200",
        "hover:shadow-soft focus-visible:shadow-soft",
        className
      )}
      tabIndex={role === "button" ? 0 : undefined}
      {...hoverProps}
    >
      {children}
    </motion.div>
  );
};
