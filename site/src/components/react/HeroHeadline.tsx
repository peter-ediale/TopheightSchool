import { motion, useReducedMotion } from 'motion/react';

// The motto as the headline: each word rises in, underlined in a house colour.
const words = [
  { w: 'Humility.', bar: 'bg-house-purple' },
  { w: 'Empathy.', bar: 'bg-house-green' },
  { w: 'Prospect.', bar: 'bg-house-yellow' },
];

export default function HeroHeadline() {
  const reduce = useReducedMotion();
  return (
    <h1 className="display text-[3.1rem] sm:text-7xl lg:text-8xl uppercase text-white">
      {words.map((x, i) => (
        <span key={x.w} className="block">
          <span className="relative inline-block overflow-hidden pb-2">
            <motion.span className="inline-block" initial={reduce ? false : { y: '105%' }} animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.15, ease: [0.2, 0.7, 0.2, 1] }}>
              {x.w}
            </motion.span>
            <motion.span className={'absolute bottom-0 left-0 h-1.5 w-full origin-left rounded-full ' + x.bar}
              initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.15, ease: [0.2, 0.7, 0.2, 1] }} />
          </span>
        </span>
      ))}
    </h1>
  );
}
