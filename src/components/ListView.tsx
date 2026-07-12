import { Link } from "react-router-dom";
import { PortfolioItem } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

const hrefFor = (item: PortfolioItem) =>
  item.category === "pm" ? `/work/${item.slug}` : `/${item.category}/${item.slug}`;

const ListView = ({ items }: { items: PortfolioItem[] }) => (
  <ul className="divide-y divide-border/60 border-y border-border/60">
    {items.map((item) => (
      <li key={item.id}>
        <Link
          to={hrefFor(item)}
          className="group grid grid-cols-12 items-baseline gap-4 py-5 md:py-6 px-1 hover:bg-secondary/40 transition-colors"
        >
          <span className="col-span-2 md:col-span-1 font-ui text-xs text-muted-foreground">{item.year}</span>
          <span className="col-span-10 md:col-span-6 font-display text-2xl md:text-3xl leading-tight">

            {item.title}
            <ArrowUpRight className="inline w-4 h-4 ml-1 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-opacity" />
          </span>
          <span className="hidden md:block md:col-span-5 font-ui text-sm text-muted-foreground">
            {item.subtitle}
          </span>
        </Link>
      </li>
    ))}
  </ul>
);

export default ListView;
