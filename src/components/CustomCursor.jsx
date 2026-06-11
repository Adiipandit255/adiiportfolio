import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  // Mouse Coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring trail
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Enable custom cursor only on desktop/devices with a fine pointer (mouse)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setEnabled(true);

    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, hidden]);

  if (!enabled || hidden) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: clicked ? "24px" : "40px",
          height: clicked ? "24px" : "40px",
          borderColor: clicked ? "var(--theme-accent-2)" : "var(--theme-accent-1)",
          boxShadow: clicked ? "0 0 15px var(--theme-glow-2)" : "0 0 10px var(--theme-glow-1)",
          transition: "width 0.15s ease-out, height 0.15s ease-out, border-color 0.15s ease-out, box-shadow 0.15s ease-out",
        }}
        className="fixed top-0 left-0 rounded-full border border-solid pointer-events-none z-[9999]"
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: clicked ? "var(--theme-accent-1)" : "var(--theme-accent-2)",
          scale: clicked ? 1.5 : 1,
          transition: "background-color 0.15s ease-out, scale 0.15s ease-out",
        }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
      />
    </>
  );
};

export default CustomCursor;
