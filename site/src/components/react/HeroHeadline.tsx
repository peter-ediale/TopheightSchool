import { motion, useReducedMotion } from 'motion/react';

const lines = ['Where every child', 'reaches new heights.'];

export default function HeroHeadline() {
  const reduce = useReducedMotion();
  let i = 0;
  return (
    <h1 className="font-display text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium tracking-tight text-white">
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(' ').map((word) => {
            const delay = 0.25 + i++ * 0.08;
            const isAccent = word.startsWith('heights');
            return (
              <span key={word + delay} className="inline-block overflow-hidden align-bottom pb-[0.08em] mr-[0.22em]">
                <motion.span
                  className={'inline-block ' + (isAccent ? 'italic text-gold-400' : '')}
                  initial={reduce ? false : { y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
