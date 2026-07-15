import { motion, useReducedMotion } from "framer-motion";

const shapes = [
  { top: "8%", left: "6%", type: "circle", color: "#F5C518", size: 44 },
  { top: "58%", left: "3%", type: "x", color: "#B47CE5", size: 40 },
  { top: "80%", left: "10%", type: "asterisk", color: "#F5C518", size: 40 },
  { top: "6%", right: "10%", type: "arc", color: "#E5B8F4", size: 44 },
  { top: "40%", right: "4%", type: "triangles", color: "#F5C518", size: 44 },
  { top: "78%", right: "8%", type: "plus", color: "#B47CE5", size: 40 },
];

function Shape({ type, color, size }: { type: string; color: string; size: number }) {
  const s = `${size}px`;
  switch (type) {
    case "circle":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="20" cy="20" r="16" fill="none" stroke={color} strokeWidth="4" />
        </svg>
      );
    case "x":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" aria-hidden="true">
          <path d="M8 8 L32 32 M32 8 L8 32" stroke={color} strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    case "asterisk":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" aria-hidden="true" stroke={color} strokeWidth="4" strokeLinecap="round">
          <path d="M20 6 V34 M6 20 H34 M10 10 L30 30 M30 10 L10 30" />
        </svg>
      );
    case "arc":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" aria-hidden="true">
          <path d="M4 22 A16 16 0 0 1 36 22" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case "triangles":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" aria-hidden="true">
          <path d="M20 4 L30 16 L10 16 Z" fill={color} />
          <path d="M20 24 L30 36 L10 36 Z" fill={color} />
        </svg>
      );
    case "plus":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" aria-hidden="true">
          <path d="M20 6 V34 M6 20 H34" stroke={color} strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export function HeroDecorations() {
  const reduce = useReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          style={{ position: "absolute", top: s.top, left: s.left, right: s.right }}
          initial={reduce ? false : { opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
        >
          <Shape type={s.type} color={s.color} size={s.size} />
        </motion.div>
      ))}
    </div>
  );
}
