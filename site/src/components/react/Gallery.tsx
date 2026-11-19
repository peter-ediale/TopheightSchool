import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

export interface GalleryItem { src: string; full: string; width: number; height: number; alt: string; caption: string; category: string }

export default function Gallery({ items, filters = true }: { items: GalleryItem[]; filters?: boolean }) {
  const categories = useMemo(() => ['All', ...Array.from(new Set(items.map((i) => i.category)))], [items]);
  const [cat, setCat] = useState('All');
  const shown = cat === 'All' ? items : items.filter((i) => i.category === cat);
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((o) => (o == null ? o : (o + d + shown.length) % shown.length)), [shown.length]);

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
      {filters && (
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter photos">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
              className={'relative rounded-full px-5 py-2.5 text-sm font-semibold transition ' + (cat === c ? 'text-white' : 'bg-white text-navy-900 border border-navy-900/15 hover:border-navy-900/40')}>
              {cat === c && <motion.span layoutId="gallery-pill" className="absolute inset-0 -z-0 rounded-full bg-navy-900" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((it, i) => (
            <motion.button
              layout
              key={it.src}
              type="button"
              onClick={() => setOpen(i)}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-900/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-500"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              aria-label={`Open photo: ${it.caption}`}
            >
              <img src={it.src} width={it.width} height={it.height} alt={it.alt} loading="lazy" decoding="async"
                   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 to-transparent p-3 sm:p-4 pt-10 text-left text-xs sm:text-sm font-semibold text-white">
                {it.caption}
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open != null && shown[open] && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/95 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={close} role="dialog" aria-modal="true" aria-label={shown[open].caption}
          >
            <motion.figure key={open} className="relative max-h-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()}>
              <img src={shown[open].full} alt={shown[open].alt} className="max-h-[80vh] w-auto rounded-xl" />
              <figcaption className="mt-4 text-center text-white/80">{shown[open].caption} <span className="text-white/40">· {open + 1} / {shown.length}</span></figcaption>
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
