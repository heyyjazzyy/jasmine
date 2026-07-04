import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import citationsPhoto from "@/assets/citations.jpeg.asset.json";
import trogonsPhoto from "@/assets/trogons.jpg.asset.json";

type Video = { title: string; youtubeId: string; soloist?: string };

const citationsVideos: Video[] = [
  { title: "Honeymoon Avenue", youtubeId: "6nfgWB2Gsuc", soloist: "Shreya R." },
  { title: "Pink Pony Club", youtubeId: "R14-ULdoxkM", soloist: "Jordan P." },
];

const trogonsVideos: Video[] = [
  { title: "Fall Showcase 2024", youtubeId: "LL2vDL5epTc" },
  { title: "Spring Showcase 2024", youtubeId: "waRWiPqrC34" },
  { title: "Fall Showcase 2022", youtubeId: "sOzXw_CeTqE" },
  { title: "Spring Showcase 2022", youtubeId: "7TwxU8n3bFs" },
  { title: "Fall 2021", youtubeId: "9ZBm5x_Yxsc" },
];

const VideoCard = ({ video }: { video: Video }) => (
  <div className="flex flex-col gap-2">
    <div className="aspect-video overflow-hidden rounded-md border border-border/60 bg-muted">
      <iframe
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        title={video.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
    <div className="body-text text-sm">
      <span className="font-medium">{video.title}</span>
      {video.soloist && (
        <span className="text-muted-foreground"> — Soloist: {video.soloist}</span>
      )}
    </div>
  </div>
);

const ACappella = () => {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        <motion.aside
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 border-r border-border/60 p-6 lg:p-8 flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen"
        >
          <Link
            to="/"
            className="font-display text-2xl leading-tight hover:text-primary transition-colors block whitespace-nowrap"
          >
            Jasmine Liao
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-ui text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.aside>

        <div className="lg:col-span-10 flex flex-col">
          <div className="flex-1 p-6 lg:p-10 pt-10 md:pt-14">
            <h1 className="display-heading" style={{ color: "#F0CE6E" }}>
              A Cappella
            </h1>
            <p className="body-text mt-4 max-w-2xl text-muted-foreground">
              I've been singing in a cappella groups for 9 years!
            </p>

            <div className="mt-12 max-w-4xl space-y-14">
              {/* Yale Citations */}
              <section>
                <h2 className="template-header">Yale Citations</h2>
                <div className="mt-4 flex flex-col sm:flex-row gap-6 items-start">
                  <img
                    src={citationsPhoto.url}
                    alt="Yale Citations group photo"
                    className="w-full sm:w-[280px] rounded-md border border-border/60"
                  />
                  <p className="body-text text-muted-foreground italic max-w-sm">
                    Yale's only graduate a cappella group.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {citationsVideos.map((v) => (
                    <VideoCard key={v.youtubeId} video={v} />
                  ))}
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Trogons */}
              <section>
                <h2 className="template-header">Trogons</h2>
                <div className="mt-4">
                  <img
                    src={trogonsPhoto.url}
                    alt="Trogons group photo"
                    className="w-full sm:w-[360px] rounded-md border border-border/60"
                  />
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trogonsVideos.map((v) => (
                    <VideoCard key={v.youtubeId} video={v} />
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="border-t border-border/60">
            <SiteFooter />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ACappella;
