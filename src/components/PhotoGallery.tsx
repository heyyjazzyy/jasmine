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
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      style={{ gap: "20px" }}
    >
      {photos.map((p, i) => (
        <figure key={p.url} className="bg-muted">
          <img
            src={p.url}
            alt={`Photograph ${i + 1}`}
            loading="lazy"
            className="w-full h-auto block"
          />
        </figure>
      ))}
    </div>
  );
};

export default PhotoGallery;
