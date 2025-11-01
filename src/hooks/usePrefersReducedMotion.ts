import { useReducedMotion } from "framer-motion";

export const usePrefersReducedMotion = (): boolean => {
  return useReducedMotion();
};
