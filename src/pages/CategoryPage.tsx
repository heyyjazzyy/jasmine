import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import ListView from "@/components/ListView";
import FridgeBoard from "@/components/FridgeBoard";
import PhotoGallery from "@/components/PhotoGallery";
import { useMode } from "@/context/ModeContext";
import { byCategory, Category } from "@/data/portfolio";

interface Props {
  category: Category;
  title: string;
  description: string;
  titleColor?: string;
}

const CategoryPage = ({ category, title, description, titleColor }: Props) => {
  const { mode } = useMode();
  const items = byCategory(category);
  const isPhotography = category === "photography";

  return (
    <main className="relative min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Left sticky sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 border-r border-border/60 p-6 lg:p-8 pt-12 lg:pt-20 flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen"
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

        {/* Content */}
        <div className="lg:col-span-10 flex flex-col">
          <div className="flex-1 p-6 lg:p-12 py-12 lg:py-20">
            <h1 className="display-heading" style={titleColor ? { color: titleColor } : undefined}>{title}</h1>
            {description && description !== "\n" && <p className="body-text mt-4 max-w-2xl">{description}</p>}

            <div className={isPhotography ? "mt-4" : "mt-12"}>
              {isPhotography ? (
                <PhotoGallery />
              ) : items.length === 0 ? (
                <p className="font-ui text-sm text-muted-foreground">Nothing here yet — check back soon.</p>
              ) : mode === "list" ? (
                <ListView items={items} />
              ) : (
                <FridgeBoard items={items} title={title.toLowerCase()} />
              )}
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

export default CategoryPage;
