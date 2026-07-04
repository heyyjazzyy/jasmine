import SiteFooter from "@/components/SiteFooter";
import SideNav from "@/components/SideNav";
import ListView from "@/components/ListView";
import FridgeBoard from "@/components/FridgeBoard";
import PhotoGallery from "@/components/PhotoGallery";
import { useMode } from "@/context/ModeContext";
import { byCategory, Category } from "@/data/portfolio";

interface Props {
  category: Category;
  title: string;
  description: string;
}

const CategoryPage = ({ category, title, description }: Props) => {
  const { mode } = useMode();
  const items = byCategory(category);
  const isPhotography = category === "photography";

  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      <div className="hidden lg:block absolute left-[16.666667%] top-0 bottom-0 z-10 w-px bg-border/60 pointer-events-none" />
      <main className="flex-1 pt-10 md:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[70vh]">
          <SideNav />
          <div className="lg:col-span-10 p-6 lg:p-10">
            <h1 className="display-heading">{title}</h1>
            <p className="body-text mt-4 max-w-2xl">{description}</p>

            <div className="mt-12">
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
        </div>
      </main>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-full border-t border-border/60" />
        <div className="lg:col-start-3 lg:col-end-13">
          <SiteFooter />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
