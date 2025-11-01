import { PropsWithChildren, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "./Container";
import { cn } from "../utils/cn";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface SectionProps {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  className?: string;
}

export const Section = ({
  id,
  title,
  eyebrow,
  description,
  className,
  children
}: PropsWithChildren<SectionProps>) => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-96px 0px"
  });
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
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
      }}
      className={cn("py-14 sm:py-18 lg:py-24", className)}
    >
      <Container>
        <div className="max-w-3xl space-y-6">
          {eyebrow ? (
            <p className="text-sm uppercase tracking-[0.3em] text-sage">
              {eyebrow}
            </p>
          ) : null}
          {title ? <h2 className="type-h2">{title}</h2> : null}
          {description ? (
            <p className="type-body text-charcoal/80">{description}</p>
          ) : null}
        </div>
        <div className={cn("mt-12", title || description ? "" : "mt-0")}>
          {children}
        </div>
      </Container>
    </motion.section>
  );
};
