import { motion } from "framer-motion";
import { useImagesLoaded } from "@/hooks/useImagesLoaded";

const modules = import.meta.glob("@/assets/photos/img-*.png.asset.json", {
  eager: true,
}) as Record<string, { default: { url: string; original_filename: string } }>;

const photos = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => {
    const na = parseInt(a.original_filename.match(/img-(\d+)/)?.[1] ?? "0", 10);
    const nb = parseInt(b.original_filename.match(/img-(\d+)/)?.[1] ?? "0", 10);
    return na - nb;
  });

const PhotoGallery = () => {
  const loaded = useImagesLoaded(photos.map((p) => p.url));

  if (!loaded) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center font-ui text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-current animate-pulse" />
          Loading photos…
        </span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      style={{ gap: "20px" }}
    >
      {photos.map((p, i) => (
        <figure key={p.url} className="bg-muted">
          <img
            src={p.url}
            alt={`Photograph ${i + 1}`}
            className="w-full h-auto block"
          />
        </figure>
      ))}
    </motion.div>
  );
};

export default PhotoGallery;
