import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface ChipProps {
  className?: string;
}

export const Chip = ({
  className,
  children
}: PropsWithChildren<ChipProps>) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const hoverProps = prefersReducedMotion
    ? {}
    : { whileHover: { scale: 1.02 }, whileFocus: { scale: 1.02 } };

  return (
    <motion.span
      className={cn(
        "focus-ring inline-flex min-h-[44px] items-center justify-center rounded-full border border-cocoa/10 bg-mint/60 px-4 py-2 text-sm font-medium text-cocoa transition-all duration-200",
        "hover:border-cocoa/30 hover:shadow-soft",
        className
      )}
      {...hoverProps}
    >
      {children}
    </motion.span>
  );
};
