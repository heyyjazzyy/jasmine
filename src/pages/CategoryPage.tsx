import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ListView from "@/components/ListView";
import FridgeBoard from "@/components/FridgeBoard";
import { useMode } from "@/context/ModeContext";
import { byCategory, Category } from "@/data/portfolio";
import { Link } from "react-router-dom";

interface Props {
  category: Category;
  title: string;
  description: string;
}

const CategoryPage = ({ category, title, description }: Props) => {
  const { mode } = useMode();
  const items = byCategory(category);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 w-full">
        <Link to="/" className="font-ui text-xs text-muted-foreground hover:text-foreground">← Home</Link>
        <h1 className="display-heading mt-4">{title}</h1>
        <p className="body-text mt-4 max-w-2xl">{description}</p>

        <div className="mt-12">
          {items.length === 0 ? (
            <p className="font-ui text-sm text-muted-foreground">Nothing here yet — check back soon.</p>
          ) : mode === "list" ? (
            <ListView items={items} />
          ) : (
            <FridgeBoard items={items} title={title.toLowerCase()} />
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default CategoryPage;
