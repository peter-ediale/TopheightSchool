import { animate, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface Props { to: number | null; suffix?: string; prefix?: string; duration?: number }

/** Counts up from 0 when scrolled into view. `to = null` renders a "coming soon" dash. */
export default function Counter({ to, suffix = '', prefix = '', duration = 2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduce = useReducedMotion();
  // Starts at the real number so it's correct even if the animation never runs
  const [value, setValue] = useState(to ?? 0);

  useEffect(() => {
    if (!inView || to == null) return;
    if (reduce) { setValue(to); return; }
    const controls = animate(0, to, { duration, ease: [0.2, 0.7, 0.2, 1], onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to, reduce, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {to == null ? '—' : `${prefix}${value}${suffix}`}
    </span>
  );
}
