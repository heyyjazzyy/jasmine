import { useEffect, useState } from "react";

/**
 * Preload a list of image URLs. Returns true once all have loaded (or errored).
 */
export const useImagesLoaded = (urls: string[]): boolean => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!urls.length) {
      setLoaded(true);
      return;
    }
    let cancelled = false;
    let remaining = urls.length;
    const done = () => {
      remaining -= 1;
      if (remaining <= 0 && !cancelled) setLoaded(true);
    };
    const imgs = urls.map((src) => {
      const img = new Image();
      img.onload = done;
      img.onerror = done;
      img.src = src;
      return img;
    });
    return () => {
      cancelled = true;
      imgs.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [urls.join("|")]);

  return loaded;
};
