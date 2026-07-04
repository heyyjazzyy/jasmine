import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

type Entry = { label: string; href: string; color: string };

const gamesPlaying: Entry[] = [
  { label: "Galactic Cruise\n", href: "https://boardgamegeek.com/boardgame/391137/galactic-cruise", color: "#9B72CF" },
  { label: "Ticket to Ride\n", href: "https://boardgamegeek.com/boardgame/9209/ticket-to-ride", color: "#E8687B" },
  { label: "Pokopia", href: "https://pokopia.pokemon.com/en-us/", color: "#7D9B76" },
  { label: "\nDave the Diver", href: "https://store.steampowered.com/app/1868140/DAVE_THE_DIVER/", color: "#2D8A9E" },
  { label: "\nSkyteam", href: "https://boardgamegeek.com/boardgame/373106/sky-team", color: "#F0CE6E" },
];

const listening: Entry[] = [
  { label: "you seem pretty sad for a girl so in love\n", href: "https://open.spotify.com/track/4LfCY65LvojKjWEnU7fNN4?si=7289d1d19c9b406a", color: "#E8687B" },
  { label: "Japanese\n", href: "https://open.spotify.com/track/1YXot2MLAG9sttepCtBRM7?si=5d86155c9e004394", color: "#9B72CF" },
  { label: "and ", href: "", color: "" },
  { label: "Spanish indie", href: "https://open.spotify.com/track/1UtlYwIzZtj2tvtsqixSJv?si=5be1dae4325743fc", color: "#F0CE6E" },
  { label: "\nBloc Party", href: "https://open.spotify.com/track/5OVHnu9SgsdAravy4UyGq4?si=0942c37e9cc641f1", color: "#2D8A9E" },
];

const allTimeGames: Entry[] = [
  { label: "Watch Dogs 2", href: "https://store.steampowered.com/app/447040/Watch_Dogs_2/", color: "#7D9B76" },
  { label: "American Arcadia", href: "https://store.steampowered.com/app/1249040/American_Arcadia/", color: "#F0CE6E" },
  { label: "Pokémon Pearl / Diamond", href: "https://diamondpearl.pokemon.com/en-us/", color: "#E8687B" },
];

const EntryLink = ({
  entry,
  isLast,
}: {
  entry: Entry;
  isLast: boolean;
}) => {
  if (!entry.href) {
    return <span className="body-text whitespace-pre-wrap">{entry.label}</span>;
  }
  
  return (
    <a
      href={entry.href}
      target="_blank"
      rel="noopener noreferrer"
      className="body-text no-underline transition-colors whitespace-pre-wrap"
      onMouseEnter={(e) => {
        e.currentTarget.style.color = entry.color;
        e.currentTarget.style.textDecoration = "underline";
        e.currentTarget.style.textDecorationColor = entry.color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "";
        e.currentTarget.style.textDecoration = "";
        e.currentTarget.style.textDecorationColor = "";
      }}
    >
      {entry.label}
      {!isLast && !entry.label.includes("\n") && ", "}
    </a>
  );
};

const SectionList = ({ title, entries }: { title: string; entries: Entry[] }) => (
  <section className="mb-12">
    <h2 className="template-header">{title}</h2>
    <ul className="space-y-3">
      {entries.map((e) => (
        <li key={e.label}>
          <a
            href={e.href}
            target="_blank"
            rel="noopener noreferrer"
            className="body-text no-underline transition-colors"
            onMouseEnter={(ev) => {
              ev.currentTarget.style.color = e.color;
              ev.currentTarget.style.textDecoration = "underline";
              ev.currentTarget.style.textDecorationColor = e.color;
            }}
            onMouseLeave={(ev) => {
              ev.currentTarget.style.color = "";
              ev.currentTarget.style.textDecoration = "";
              ev.currentTarget.style.textDecorationColor = "";
            }}
          >
            {e.label}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

const ParagraphSection = ({
  title,
  entries,
}: {
  title: string;
  entries: Entry[];
}) => (
  <section className="mb-12">
    <h2 className="template-header">{title}</h2>
    <p className="body-text">
      {entries.map((e, i) => (
        <EntryLink key={e.label} entry={e} isLast={i === entries.length - 1} />
      ))}
    </p>
  </section>
);

const NowPlaying = () => {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        <motion.aside
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 border-r border-border/60 p-6 lg:p-8 flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen"
        >
          <Link to="/" className="font-display text-2xl leading-tight hover:text-primary transition-colors block whitespace-nowrap">
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
            <h1 className="display-heading">Now Playing</h1>
            <p className="body-text mt-4 max-w-2xl text-muted-foreground">
              A media log of what's on rotation
            </p>

            <div className="mt-12 max-w-3xl">
              <section className="mb-12">
                <h2 className="template-header">Current Hyperfixations</h2>
                <p className="body-text">Herb gardening, making magnets.</p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <ParagraphSection title="Currently Playing" entries={gamesPlaying} />
                <ParagraphSection title="Currently Listening To" entries={listening} />
              </div>

              <SectionList title="All-Time Favorite Games" entries={allTimeGames} />
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

export default NowPlaying;
