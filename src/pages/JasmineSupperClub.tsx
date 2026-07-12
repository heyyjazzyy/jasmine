import { Link } from "react-router-dom";
import flowerAsset from "@/assets/flower.png.asset.json";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import LoadingScreen from "@/components/LoadingScreen";
import { useImagesLoaded } from "@/hooks/useImagesLoaded";

import jsc1 from "@/assets/supper-club/jsc-1-fusion.png.asset.json";
import jsc2 from "@/assets/supper-club/jsc-2-classics.png.asset.json";
import jsc3 from "@/assets/supper-club/jsc-3-new-faves.png.asset.json";
import dessertsVideo from "@/assets/supper-club/desserts.mp4.asset.json";
import butterSampling from "@/assets/supper-club/butter/butter_sampling.jpg.asset.json";
import cevicheButter from "@/assets/supper-club/butter/ceviche_butter.jpg.asset.json";
import chickenButter from "@/assets/supper-club/butter/roasted_chicken_butter.jpg.asset.json";
import thaiTeaButter from "@/assets/supper-club/butter/thai_tea_butter.jpg.asset.json";
import matchaButter from "@/assets/supper-club/butter/matcha_butter.jpg.asset.json";
import coffeeButter from "@/assets/supper-club/butter/coffee_chocolate_butter.jpg.asset.json";
import garlicButter from "@/assets/supper-club/butter/garlic_parmesan_butter.jpg.asset.json";

const butters = [
  { name: "Ceviche Butter", subtitle: "red onion, lime, cilantro", image: cevicheButter.url },
  { name: "Roasted Chicken Butter", subtitle: "thyme, rosemary, crispy chicken skin", image: chickenButter.url },
  { name: "Garlic Parmesan Butter", subtitle: "", image: garlicButter.url },
  { name: "Matcha Butter", subtitle: "", image: matchaButter.url },
  { name: "Coffee Chocolate Butter", subtitle: "", image: coffeeButter.url },
  { name: "Thai Tea Butter", subtitle: "", image: thaiTeaButter.url },
];

const ACCENT = "#2D8A9E";

type Club = {
  number: string;
  theme: string;
  dishes: string[];
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
};

const clubs: Club[] = [
  {
    number: "No. 01",
    theme: "Fusion",
    dishes: [
      "Japanese-Peruvian Ceviche",
      "Gochujang Carbonara",
      "Earl Grey Crème Brûlée",
    ],
    image: jsc1.url,
    imageAlt: "Illustrations of fusion dishes: ceviche, carbonara, crème brûlée",
    imageSide: "right",
  },
  {
    number: "No. 02",
    theme: "Hometown Classics",
    dishes: [
      "Cucumber Salad",
      "Crab Rangoon Garlic Bread",
      "Tomato and Egg",
      "Braised Pork Belly",
      "Filipino Mango Ice Box Cake",
    ],
    image: jsc2.url,
    imageAlt: "Illustrations of hometown classics: garlic bread, cucumbers, pork belly, tomato and egg, mango cake",
    imageSide: "left",
  },
  {
    number: "No. 03",
    theme: "New Faves",
    dishes: [
      "Whipped Ricotta with Homemade Focaccia",
      "Rigatoni alla Vodka",
      "Ina Garten's Brownie Pudding",
    ],
    image: jsc3.url,
    imageAlt: "Illustrations of new favorites: focaccia, whipped ricotta, rigatoni, brownie pudding",
    imageSide: "right",
  },
];

const ClubSection = ({ club, index }: { club: Club; index: number }) => {
  const imageOnLeft = club.imageSide === "left";
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={index > 0 ? "border-t border-border/40 pt-14" : ""}
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
        {/* Image */}
        <div className={`shrink-0 w-full md:w-auto ${imageOnLeft ? "md:order-1" : "md:order-2"}`}>
          <img
            src={club.image}
            alt={club.imageAlt}
            loading="lazy"
            className="w-full h-auto max-w-md"
          />
        </div>

        {/* Text */}
        <div className={`w-full md:w-auto ${imageOnLeft ? "md:order-2" : "md:order-1"}`}>
          <p
            className="font-ui text-xs uppercase tracking-[0.28em] mb-3"
            style={{ color: ACCENT }}
          >
            Supper Club {club.number}
          </p>
          <h2
            className="font-display text-2xl md:text-3xl leading-tight mb-6"
            style={{ color: ACCENT }}
          >
            {club.theme}
          </h2>
          <ul className="space-y-2">
            {club.dishes.map((dish) => (
              <li
                key={dish}
                className="font-display text-lg md:text-xl text-foreground leading-snug"
              >
                {dish}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

const JasmineSupperClub = () => {
  const imagesLoaded = useImagesLoaded([jsc1.url, jsc2.url, jsc3.url, butterSampling.url]);
  if (!imagesLoaded) return <LoadingScreen label="Setting the table" />;
  return (
    <main className="relative min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Left sticky sidebar */}
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

        {/* Content */}
        <div className="lg:col-span-10 flex flex-col">
          <div className="flex-1 p-6 lg:p-12 pt-0 pb-12 lg:py-20">

            {/* Hero */}
            <motion.header
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="display-heading" style={{ color: ACCENT }}>
                Jasmine Supper Club
              </h1>
            </motion.header>

            {/* Intro */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl mt-10 border-l-2 pl-6 py-2"
              style={{ borderColor: ACCENT }}
            >
              <p className="body-text text-muted-foreground">
                My love language is making elaborate meals nobody asked for,
                insisting that it's not my best work, then staring at you until
                you tell me it's the best thing you've ever eaten. Welcome to
                Jasmine Supper Club, a monthly dinner party serving up childhood
                nostalgia, comfort classics, and culinary experiments straight
                from my dreams.
              </p>
            </motion.section>

            {/* Club sections */}
            <div className="mt-16 max-w-5xl space-y-14">
              {clubs.map((club, i) => (
                <ClubSection key={club.number} club={club} index={i} />
              ))}
            </div>

            {/* Video */}
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mt-20 max-w-5xl border-t border-border/40 pt-14"
            >
              <p
                className="font-ui text-xs uppercase tracking-[0.28em] mb-3"
                style={{ color: ACCENT }}
              >
                From the table
              </p>
              <h2
                className="font-display text-4xl md:text-5xl leading-tight mb-8"
                style={{ color: ACCENT }}
              >
                Desserts, on parade
              </h2>
              <div className="max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden bg-muted/30">
                <video
                  src={dessertsVideo.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto block"
                />
              </div>
            </motion.section>

            {/* Will it Butter? */}
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mt-20 border-t border-border/40 pt-14"
            >
              <div className="max-w-5xl">
                <h2
                  className="font-display text-3xl md:text-4xl leading-tight mb-8"
                  style={{ color: ACCENT }}
                >
                  Will it Butter?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center mb-12">
                  <img
                    src={butterSampling.url}
                    alt="A spread of homemade compound butters"
                    loading="lazy"
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="body-text text-muted-foreground">
                    I love bread and butter. What can't I turn into butter?!
                  </p>
                </div>
              </div>

              {/* Butter grid — full width */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {butters.map((b) => (
                  <div key={b.name} className="flex flex-col">
                    <div className="aspect-square overflow-hidden rounded-lg bg-muted/30">
                      <img
                        src={b.image}
                        alt={b.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3
                      className="font-display text-lg md:text-xl mt-3 leading-snug"
                      style={{ color: ACCENT }}
                    >
                      {b.name}
                    </h3>
                    {b.subtitle && (
                      <p className="font-ui text-sm text-muted-foreground italic mt-1">
                        {b.subtitle}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          <div className="border-t border-border/60 mt-16">
            <SiteFooter />
          </div>
        </div>
      </div>
    </main>
  );
};

export default JasmineSupperClub;
