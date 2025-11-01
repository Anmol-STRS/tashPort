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
    : { whileHover: { scale: 1.05, y: -2 }, whileTap: { scale: 0.98 } };

  return (
    <motion.span
      className={cn(
        "focus-ring inline-flex min-h-[38px] items-center justify-center rounded-full border border-white/50 bg-gradient-to-br from-mint/70 to-mint/55 px-4 py-1.5 text-xs font-medium text-cocoaDark shadow-sm transition-all duration-200",
        "hover:border-white/80 hover:shadow-elegant hover:from-mint/80 hover:to-mint/65",
        "backdrop-blur-sm",
        "sm:min-h-[44px] sm:px-5 sm:py-2.5 sm:text-sm",
        className
      )}
      {...hoverProps}
    >
      {children}
    </motion.span>
  );
};
