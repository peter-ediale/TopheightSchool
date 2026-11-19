import { getImage } from 'astro:assets';
import type { Photo } from '../data/photos';
import type { GalleryItem } from '../components/react/Gallery';

/** Turns photos into optimised thumbnail + full-size URLs for the React gallery. */
export async function toGalleryItems(list: Photo[]): Promise<GalleryItem[]> {
  return Promise.all(
    list.map(async (p) => {
      const thumb = await getImage({ src: p.img, width: 560, height: 700, fit: 'cover', format: 'webp' });
      const full = await getImage({ src: p.img, width: 1280, format: 'webp' });
      return {
        src: thumb.src, full: full.src,
        width: Number(thumb.attributes.width), height: Number(thumb.attributes.height),
        alt: p.alt, caption: p.caption, category: p.category,
      };
    }),
  );
}
