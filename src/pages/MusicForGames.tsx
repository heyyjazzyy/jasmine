import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

import sorelleImg from "@/assets/sorelle.jpeg.asset.json";
import checkItOutImg from "@/assets/check-it-out.jpeg.asset.json";
import equinoxImg from "@/assets/equinox.jpeg.asset.json";
import sinkingInnImg from "@/assets/sinking-inn.jpeg.asset.json";

import darkWaters from "@/assets/dark-waters.mp3.asset.json";
import deepEnd from "@/assets/the-deep-end.mp3.asset.json";
import shallowEnd from "@/assets/the-shallow-end.mp3.asset.json";
import underwater from "@/assets/underwater-exploration.mp3.asset.json";
import returningHome from "@/assets/returning-home.mp3.asset.json";

type Game = {
  title: string;
  image: string;
  synopsis: string;
  linkLabel: string;
  linkHref: string;
};

const YouTube = ({ id }: { id: string }) => (
  <div className="relative w-full overflow-hidden rounded-md" style={{ paddingTop: "56.25%" }}>
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 h-full w-full"
    />
  </div>
);

const AudioPlayer = ({ title, src }: { title: string; src: string }) => (
  <div className="flex items-center gap-4 rounded-md bg-neutral-900 text-neutral-100 p-4">
    <Play className="w-6 h-6 shrink-0 opacity-90" />
    <div className="min-w-0 flex-1">
      <div className="font-display text-lg leading-tight truncate">{title}</div>
      <div className="text-sm text-neutral-400 mb-2">Jasmine Liao</div>
      <audio controls src={src} className="w-full h-8" preload="none" />
    </div>
  </div>
);

const GameSection = ({
  game,
  children,
}: {
  game: Game;
  children: React.ReactNode;
}) => (
  <section>
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
      <div className="lg:col-span-2 flex flex-col gap-4">
        <img
          src={game.image}
          alt={game.title}
          className="w-full rounded-md object-cover"
        />
        <h2 className="template-header">{game.title}</h2>
        <p className="body-text text-sm text-muted-foreground">{game.synopsis}</p>
        <a
          href={game.linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui text-sm underline underline-offset-4 hover:text-primary transition-colors"
        >
          {game.linkLabel}
        </a>
      </div>
      <div className="lg:col-span-3 flex flex-col gap-6">{children}</div>
    </div>
  </section>
);

const sorelle: Game = {
  title: "Sorelle",
  image: sorelleImg.url,
  synopsis:
    "A whimsical 3D puzzle-platformer that immerses you in the magical seaside town of Isola Chiara. Play as sisters Alessandra, Bella, and Capri as you explore the magic of sisterhood in a puzzle-solving adventure to restore magic and save the summer festival.",
  linkLabel: "Play the game!",
  linkHref: "https://store.steampowered.com/app/2916580/Sorelle/",
};

const checkItOut: Game = {
  title: "Check it Out",
  image: checkItOutImg.url,
  synopsis:
    "Ever dreamt of working a cash register with no pay or real-life customer interaction? Look no further! This simulation game brings a fresh-take to the notoriously dull tasks of customer service, introducing you to a cast of wacky characters and the baggage they carry.",
  linkLabel: "Download the game!",
  linkHref: "https://store.steampowered.com/app/1928430/Check_it_Out/",
};

const equinox: Game = {
  title: "Equinox",
  image: equinoxImg.url,
  synopsis:
    "The moon has shattered. Plunged into darkness, the world looks to an unlikely hero: a tiny yet tenacious bunny. Defy all odds and reach for the stars in this whimsical 2D platformer.",
  linkLabel: "Play the game!",
  linkHref: "https://store.steampowered.com/app/1778590/Equinox/",
};

const sinkingInn: Game = {
  title: "Sinking Inn",
  image: sinkingInnImg.url,
  synopsis:
    "A small, lonely boy on a hopeful quest navigates through a dark and dreary motel. Dive into its mysterious, eerie atmosphere and find your way through the motel's strange puzzles, as it becomes increasingly clear that reality is not as it seems.",
  linkLabel: "Play the game!",
  linkHref: "https://store.steampowered.com/app/1552460/Sinking_Inn/",
};

const MusicForGames = () => {
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
          <div className="flex-1 p-6 lg:p-10 pt-16 md:pt-24">
            <h1 className="display-heading" style={{ color: "#E8687B" }}>
              Music for Games
            </h1>
            <p className="body-text mt-4 max-w-2xl text-muted-foreground">
              Original scores, ambient loops, and interactive audio written for indie games and interactive media.
            </p>

            <div className="mt-12 max-w-6xl space-y-16">
              <GameSection game={sorelle}>
                <YouTube id="HFQ8h0Fu4yQ" />
                <YouTube id="VAGBZJB5JoQ" />
              </GameSection>

              <GameSection game={checkItOut}>
                <YouTube id="BIOUK3mxIHU" />
              </GameSection>

              <GameSection game={equinox}>
                <YouTube id="h8s-j_0GXSk" />
                <YouTube id="lfRgeg3e2gA" />
              </GameSection>

              <GameSection game={sinkingInn}>
                <AudioPlayer title="Dark Waters" src={darkWaters.url} />
                <p className="body-text text-sm text-muted-foreground">
                  Entering the pool transports you to another dimension. The tracks{" "}
                  <em>The Deep End</em>/<em>The Shallow End</em> and{" "}
                  <em>Underwater Exploration</em>/<em>Returning Home</em> are parallel
                  tracks, meaning they have the same motifs and melodies but with
                  different instrumentation to denote the environment change.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AudioPlayer title="The Deep End" src={deepEnd.url} />
                  <AudioPlayer title="Underwater Exploration" src={underwater.url} />
                  <AudioPlayer title="The Shallow End" src={shallowEnd.url} />
                  <AudioPlayer title="Returning Home" src={returningHome.url} />
                </div>
              </GameSection>
            </div>
          </div>

          <SiteFooter />
        </div>
      </div>
    </main>
  );
};

export default MusicForGames;
