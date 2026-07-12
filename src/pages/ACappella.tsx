import { assetUrl } from "@/lib/asset";
import { Link } from "react-router-dom";
import flowerAsset from "@/assets/flower.png.asset.json";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import citationsPhoto from "@/assets/citations.jpeg.asset.json";
import trogonsPhoto from "@/assets/trogons.jpg.asset.json";

type Video = { youtubeId: string; caption: React.ReactNode };

const citationsVideos: Video[] = [
  {
    youtubeId: "6nfgWB2Gsuc",
    caption: (
      <>
        <div className="font-medium">Honeymoon Avenue</div>
        <div className="text-muted-foreground">Soloist: Shreya R.</div>
      </>
    ),
  },
  {
    youtubeId: "R14-ULdoxkM",
    caption: (
      <>
        <div className="font-medium">Pink Pony Club</div>
        <div className="text-muted-foreground">Soloist: Jordan P.</div>
      </>
    ),
  },
];

const trogonsVideos: Video[] = [
  {
    youtubeId: "LL2vDL5epTc",
    caption: (
      <>
        <div className="font-medium">6:52 – Gunjou by YOASOBI</div>
        <div className="text-muted-foreground mb-4">Solo by Cana I. and Davie C.</div>
        <div className="font-medium">20:47 – Russian Roulette by Red Velvet</div>
        <div className="text-muted-foreground">Solo by Harrison M. and Monica C.</div>
      </>
    ),
  },
  {
    youtubeId: "waRWiPqrC34",
    caption: (
      <>
        <div className="font-medium">10:05 – Outta My Head by Khalid</div>
      </>
    ),
  },
  {
    youtubeId: "sOzXw_CeTqE",
    caption: (
      <>
        <div className="font-medium">10:11 – 一剪梅 by Fei Yu-ching</div>
        <div className="text-muted-foreground">Solo by Troy T.</div>
      </>
    ),
  },
  {
    youtubeId: "7TwxU8n3bFs",
    caption: (
      <>
        <div className="font-medium">Way Back Home – Shaun</div>
        <div className="text-muted-foreground">Solo by Rosie D. and Andy K.</div>
      </>
    ),
  },
  {
    youtubeId: "9ZBm5x_Yxsc",
    caption: (
      <>
        <div className="font-medium">0:32 – 夜に駆ける by YOASOBI</div>
        <div className="text-muted-foreground">Solo by Rosie D. and Xenia W.</div>
      </>
    ),
  },
];

const VideoCard = ({ video }: { video: Video }) => (
  <div className="flex flex-col gap-2">
    <div className="aspect-video max-w-lg overflow-hidden rounded-md border border-border/60 bg-muted">
      <iframe
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
    <div className="body-text text-sm">{video.caption}</div>
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
          className="lg:col-span-2 border-r border-border/60 p-6 lg:p-8 pt-12 lg:pt-20 pb-0 lg:pb-8 flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen"
        >
          <div>
            <div className="flex items-center gap-2 lg:block">
              <Link to="/" aria-label="Home"><img src={assetUrl(flowerAsset.url)} alt="" className="w-10 h-10 lg:w-16 lg:h-16 mb-0 lg:mb-3 hover:opacity-80 transition-opacity" /></Link>
              <Link
                to="/"
                className="font-display text-2xl leading-tight hover:text-primary transition-colors block whitespace-nowrap"
              >
                Jasmine Liao
              </Link>
            </div>
            <Link
              to="/"
              className="lg:hidden inline-flex items-center gap-2 font-ui text-sm text-muted-foreground hover:text-foreground transition-colors pt-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          <Link
            to="/"
            className="hidden lg:inline-flex items-center gap-2 font-ui text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.aside>

        <div className="lg:col-span-10 flex flex-col">
          <div className="flex-1 p-6 lg:p-12 pt-0 pb-12 lg:py-20">

            <h1 className="display-heading" style={{ color: "#F0CE6E" }}>
              A Cappella
            </h1>
            <p className="body-text mt-4 max-w-2xl text-muted-foreground">
              I've been singing in a cappella groups since 2017!
            </p>

            <div className="mt-12 max-w-6xl space-y-14">
              {/* Yale Citations */}
              <section>
                <h2 className="template-header">Yale Citations</h2>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                  <div className="lg:col-span-2 flex flex-col gap-4">
                    <img
                      src={assetUrl(citationsPhoto.url)}
                      alt="Yale Citations group photo"
                      className="w-full rounded-md border border-border/60"
                    />
                    <p className="body-text text-muted-foreground">
                      Throughout my time in business school, I sang in the Yale Citations, Yale's only graduate a cappella group. I served as assistant music director and arranged music. Here are some of my arrangements!
                    </p>
                  </div>
                  <div className="lg:col-span-3 flex flex-col gap-6">
                    {citationsVideos.map((v) => (
                      <VideoCard key={v.youtubeId} video={v} />
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Trogons */}
              <section>
                <h2 className="template-header">Trogons</h2>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                  <div className="lg:col-span-2 flex flex-col gap-4">
                    <img
                      src={assetUrl(trogonsPhoto.url)}
                      alt="Trogons group photo"
                      className="w-full rounded-md border border-border/60"
                    />
                    <p className="body-text text-muted-foreground">
                      I've been so incredibly grateful to be a part of Trogons A Cappella at USC from 2021–2024. Here are some of the performances of the arrangements I've written!
                    </p>
                  </div>
                  <div className="lg:col-span-3 flex flex-col gap-6">
                    {trogonsVideos.map((v) => (
                      <VideoCard key={v.youtubeId} video={v} />
                    ))}
                  </div>
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
