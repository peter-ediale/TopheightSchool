import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';

export interface GalleryItem { src: string; full: string; width: number; height: number; alt: string; caption: string; tall?: boolean }

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((o) => (o == null ? o : (o + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (open == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, close, step]);

  return (
    <>
      <div className="columns-2 md:columns-3 gap-3 sm:gap-4 [&>*]:mb-3 sm:[&>*]:mb-4">
        {items.map((it, i) => (
          <motion.button
            key={it.src}
            type="button"
            onClick={() => setOpen(i)}
            className="group relative block w-full overflow-hidden rounded-2xl bg-navy-900/10 break-inside-avoid focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
            aria-label={`Open photo: ${it.caption}`}
          >
            <img src={it.src} width={it.width} height={it.height} alt={it.alt} loading="lazy" decoding="async"
                 className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 to-transparent p-4 pt-12 text-left text-sm font-medium text-white opacity-0 translate-y-2 transition duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              {it.caption}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open != null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/95 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={close} role="dialog" aria-modal="true" aria-label={items[open].caption}
          >
            <motion.figure
              key={open}
              className="relative max-h-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={items[open].full} alt={items[open].alt} className="max-h-[80vh] w-auto rounded-xl shadow-2xl" />
              <figcaption className="mt-4 text-center text-white/80">{items[open].caption}</figcaption>
            </motion.figure>
            <button onClick={close} className="absolute top-4 right-4 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close">✕</button>
            <button onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-3 top-1/2 -translate-y-1/2 grid size-12 place-items-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20" aria-label="Previous photo">‹</button>
            <button onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-3 top-1/2 -translate-y-1/2 grid size-12 place-items-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20" aria-label="Next photo">›</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
