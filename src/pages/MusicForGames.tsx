import { Link } from "react-router-dom";
import flowerAsset from "@/assets/flower.png.asset.json";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
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
  <div className="relative w-full max-w-lg overflow-hidden rounded-md" style={{ paddingTop: "56.25%" }}>
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
  <div className="flex flex-col gap-2">
    <div className="font-display text-lg leading-tight">{title}</div>
    <audio controls src={src} className="w-full" preload="none" />
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
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
      <div className="lg:col-span-2 flex flex-col gap-4">
        <h2 className="template-header">{game.title}</h2>
        <img
          src={game.image}
          alt={game.title}
          className="w-full rounded-md object-cover"
        />
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
          className="lg:col-span-2 border-r border-border/60 p-6 lg:p-8 pt-12 lg:pt-20 pb-0 lg:pb-8 flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen"
        >
          <div>
            <div className="flex items-center gap-2 lg:block">
              <Link to="/" aria-label="Home"><img src={flowerAsset.url} alt="" className="w-10 h-10 lg:w-16 lg:h-16 mb-0 lg:mb-3 hover:opacity-80 transition-opacity" /></Link>
              <Link
                to="/"
                className="font-display text-2xl leading-tight hover:text-primary transition-colors block whitespace-nowrap"
              >
                Jasmine Liao
              </Link>
            </div>
            <Link
              to="/"
              className="lg:hidden inline-flex items-center gap-2 font-ui text-sm text-muted-foreground hover:text-foreground transition-colors pt-1"
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

            <h1 className="display-heading" style={{ color: "#E8687B" }}>
              Game Scoring
            </h1>
            <p className="body-text mt-4 max-w-2xl text-muted-foreground">
              While at USC, I collaborated with game design students to compose and produce original scores for student-led projects.
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
