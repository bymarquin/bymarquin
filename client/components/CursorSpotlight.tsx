"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorSpotlight() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const smoothX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{
        background:
          "radial-gradient(320px circle at 0 0, rgba(255,255,255,0.12), rgba(255,255,255,0) 70%)",
        translateX: smoothX,
        translateY: smoothY,
      }}
    />
  );
}
