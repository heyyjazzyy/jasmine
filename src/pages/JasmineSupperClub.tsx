import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

import dishesSavory from "@/assets/supper-club/pdf-dishes-savory.jpg.asset.json";
import dishesSweet from "@/assets/supper-club/pdf-dishes-sweet.jpg.asset.json";
import prepSupper from "@/assets/supper-club/pdf-prep-supper.jpg.asset.json";

const ACCENT = "#2D8A9E";

type Dish = { name: string; blurb: string };
type Course = { heading: string; dishes: Dish[] };

const menu: Course[] = [
  {
    heading: "To Start",
    dishes: [
      {
        name: "Japanese-Peruvian Ceviche",
        blurb:
          "I grew up eating a lot of sushi, so raw fish has always felt pretty natural. But when I went to Peru, ceviche completely changed how I thought about it. The versions I had in Lima were so fresh and bright — it felt like rediscovering something I already loved. I first made a version of it for Mauricio's birthday, and it's become tied to that trip and that memory for us. This dish is my way of bringing those pieces together — something familiar, something new, and the person who made it meaningful.",
      },
      {
        name: "Crab Rangoon Garlic Bread",
        blurb:
          "Crab rangoons were the first Chinese American dish I ever had. When I moved to the U.S. at 14 and was living in New Hampshire, my roommate convinced me to try them from the one Chinese restaurant in town. I remember being confused since this wasn't anything I had grown up eating in Hong Kong. But I took a bite and was immediately in love (it was also my first real introduction to cream cheese, which felt kind of life-changing at the time). Over Spring Break, I had some really good garlic bread in Brazil that stuck with me. I'm afraid I've created somewhat of a monstrosity, but it's nostalgic, chaotic, and insanely good.",
      },
    ],
  },
  {
    heading: "Mains",
    dishes: [
      {
        name: "Gochujang Carbonara",
        blurb:
          "Carbonara was something my mom would make for us as a treat. She traveled to Italy a lot for work, and every once in a while she'd bring that back to our kitchen. It wasn't traditional — she always added cream and didn't use any eggs — but growing up, that was just what carbonara tasted like to me. Later, when I moved to LA for college, I started cooking more for myself and was surrounded by Korean food in K-town. That's where I came across their creamy \"rosé\" noodles with gochujang, and I thought, why don't I combine the two? Italian-Korean fusion feels surprisingly natural once you try it.",
      },
      {
        name: "Tomato and Egg",
        blurb:
          "Tomato and egg is one of those dishes almost every Chinese family has their own version of. Even in my own family, my mom makes it one way, my uncle makes it another. My sister and I have always preferred my uncle's: thicker, a little sweeter, a bit more jammy. That's the version I make now. It's also one of the first dishes I ever learned how to cook, and it's something I come back to often.",
      },
      {
        name: "Braised Pork Belly",
        blurb:
          "Braised pork belly — hong shao rou — is a classic Shanghainese dish (and was Mao Zedong's favorite). China's food culture is incredibly regional, and Shanghainese cuisine has always been one of my favorites: rich, slightly sweet, deeply comforting. I didn't grow up eating it that often in Hong Kong, but it was always something I loved. When I moved to the U.S. for college, I started missing those flavors more, and this was one of the dishes I taught myself to make.",
      },
    ],
  },
  {
    heading: "Dessert",
    dishes: [
      {
        name: "Black Sesame Tangyuan Cookie",
        blurb:
          "Tangyuan — a glutinous rice dumpling usually filled with black sesame or peanut, served warm in a lightly sweet soup during the lantern festival. Growing up, it was something we only had during holidays. I never really grew up eating cookies (I was always more of a cake person), but everyone at SOM seems to love them, especially the ones from McKnays. So I wanted to reshape this celebratory dessert into something more everyday. This cookie keeps the black sesame filling and that familiar chew, but reimagines it in a completely different form.",
      },
      {
        name: "Earl Grey Crème Brûlée",
        blurb:
          "Crème brûlée was always one of my mom's favorite desserts, and as a result it made its way into my life early on. At the same time, I grew up drinking a lot of tea — mostly the kinds you'd find across Asia, like green tea or milk tea. I didn't discover Earl Grey until I moved to the U.S. at 14, when I walked into a café in New Hampshire asking for milk tea and was handed a London Fog instead. I had no idea what it was, but I fell in love — and it's probably still one of my go-to orders today.",
      },
      {
        name: "Filipino Mango Ice Box Cake",
        blurb:
          "I didn't know the name of this dessert for most of my life. Our family had a Filipina helper who was with us for nine years, and every summer during mango season, she would make this layered, frozen dessert with graham crackers, cream, condensed milk, and ripe mangoes. I always just called it the \"frozen mango dessert.\" Years later, I realized how much I missed it and reached out to her to ask what it was called and how to make it. That's how I learned it's a Filipino mango float — a small piece of the Philippines that found its way into my childhood, and something I still carry with me now.",
      },
    ],
  },
];

const DishRow = ({ dish }: { dish: Dish }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.4 }}
  >
    <h3 className="font-ui text-xs font-medium uppercase tracking-[0.18em] leading-snug" style={{ color: ACCENT }}>
      {dish.name}
    </h3>
    <p className="font-ui text-xs text-muted-foreground mt-1.5 leading-relaxed">{dish.blurb}</p>
  </motion.div>
);

const JasmineSupperClub = () => {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Left sticky sidebar */}
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

        {/* Content */}
        <div className="lg:col-span-10 flex flex-col">
          <div className="flex-1 p-6 lg:p-10 pt-10 md:pt-14">
            {/* Hero */}
            <motion.header
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p
                className="font-ui text-xs uppercase tracking-[0.28em] mb-4"
                style={{ color: ACCENT }}
              >
                A SERIES OF DINNERS
              </p>
              <h1 className="display-heading" style={{ color: ACCENT }}>
                Jasmine Supper Club
              </h1>
            </motion.header>

            {/* Letter */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl mt-12 border-l-2 pl-6 py-2 space-y-4"
              style={{ borderColor: ACCENT }}
            >
              <p className="body-text text-muted-foreground">
                Food has always been my love language. My parents showed care through cooking,
                through taking me out to meals, through the simple act of sitting down together
                at the end of the day. That sense of gathering — slowing down, sharing stories,
                being present — has stayed with me.
              </p>
              <p className="body-text text-muted-foreground">
                This supper club is a reflection of the places that have shaped me. I grew up in
                Hong Kong, surrounded by a deeply international food culture, and later moved to
                the United States, where my relationship to food shifted out of necessity but
                expanded for good. The menu brings those layers together — childhood flavors,
                comfort foods, and the dishes I've discovered along the way — reimagined and set
                on one table.
              </p>
            </motion.section>

            {/* Menu */}
            <div className="mt-20 space-y-16 max-w-3xl">
              {menu.map((course) => (
                <section key={course.heading}>
                  <div className="flex items-baseline gap-4 mb-2">
                    <h2 className="template-header !mb-0">{course.heading}</h2>
                    <div className="flex-1 h-px bg-border/60" />
                  </div>
                  <div className="divide-y divide-border/60">
                    {course.dishes.map((dish) => (
                      <DishRow key={dish.name} dish={dish} />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Photos */}
            <section className="mt-24 max-w-5xl">
              <div className="flex items-baseline gap-4 mb-6">
                <h2 className="template-header !mb-0">Photos</h2>
                <div className="flex-1 h-px bg-border/60" />
              </div>
              <div className="space-y-8">
                <img
                  src={dishesSavory.url}
                  alt="Savory dishes from the Jasmine Supper Club menu"
                  loading="lazy"
                  className="w-full h-auto rounded-md"
                />
                <img
                  src={dishesSweet.url}
                  alt="Desserts from the Jasmine Supper Club menu"
                  loading="lazy"
                  className="w-full h-auto rounded-md"
                />
                <img
                  src={prepSupper.url}
                  alt="Dinner prep and members of the Jasmine Supper Club"
                  loading="lazy"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </section>
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
