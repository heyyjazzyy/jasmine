import { Link } from "react-router-dom";
import { PortfolioItem, Category } from "@/data/portfolio";
import { useMemo } from "react";

const categoryHref = (item: PortfolioItem) => {
  if (item.category === "pm") return `/work/${item.slug}`;
  return `/${item.category}/${item.slug}`;
};

// Deterministic pseudo-random placement so layout is stable per session.
const seededPositions = (count: number) => {
  const positions: { top: string; left: string; rotate: number }[] = [];
  // 4-column-ish grid with jitter
  const cols = 4;
  for (let i = 0; i < count; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const jitterX = ((i * 37) % 9) - 4; // -4..4
    const jitterY = ((i * 53) % 9) - 4;
    const rotate = (((i * 71) % 13) - 6); // -6..6 deg
    const left = 4 + col * 23 + jitterX; // %
    const top = 4 + row * 30 + jitterY;  // %
    positions.push({ top: `${top}%`, left: `${left}%`, rotate });
  }
  return positions;
};

const styleClass = (item: PortfolioItem) => {
  switch (item.fridgeStyle) {
    case "polaroid":
      return "magnet magnet-polaroid magnet-tape w-44";
    case "memo":
      return "magnet magnet-memo magnet-pin w-56";
    case "sticky":
      return `magnet ${item.accent === "peach" ? "magnet-sticky-pink" : item.accent === "mint" ? "magnet-sticky-mint" : "magnet-sticky"} w-44`;
    case "recipe":
      return "magnet magnet-memo magnet-tape w-52";
    case "cassette":
      return "magnet magnet-memo magnet-pin w-48";
  }
};

interface Props {
  items: PortfolioItem[];
  title?: string;
}

const FridgeBoard = ({ items, title }: Props) => {
  const positions = useMemo(() => seededPositions(items.length), [items.length]);

  return (
    <div className="fridge-board p-6">
      {title && (
        <div className="absolute top-4 left-6 font-hand text-2xl text-foreground/60 rotate-[-2deg] z-10 pointer-events-none">
          {title}
        </div>
      )}
      {items.map((item, i) => {
        const pos = positions[i];
        return (
          <Link
            key={item.id}
            to={categoryHref(item)}
            className={styleClass(item)}
            style={{
              top: pos.top,
              left: pos.left,
              transform: `rotate(${pos.rotate}deg)`,
            }}
            aria-label={item.title}
          >
            {item.fridgeStyle === "polaroid" ? (
              <PolaroidCard item={item} />
            ) : item.fridgeStyle === "sticky" ? (
              <StickyCard item={item} />
            ) : item.fridgeStyle === "cassette" ? (
              <CassetteCard item={item} />
            ) : item.fridgeStyle === "recipe" ? (
              <RecipeCard item={item} />
            ) : (
              <MemoCard item={item} />
            )}
          </Link>
        );
      })}
    </div>
  );
};

const MemoCard = ({ item }: { item: PortfolioItem }) => (
  <div className="pt-3">
    <div className="font-ui text-[10px] uppercase tracking-widest text-muted-foreground">
      {item.category === "pm" ? "PM Memo" : item.category}
    </div>
    <div className="font-display text-xl mt-1 leading-tight">{item.title}</div>
    <div className="font-ui text-xs text-muted-foreground mt-2 line-clamp-2">{item.subtitle}</div>
    <div className="mt-3 h-px bg-foreground/10" />
    <div className="font-ui text-[10px] text-muted-foreground mt-2">{item.year}</div>
  </div>
);

const PolaroidCard = ({ item }: { item: PortfolioItem }) => (
  <div>
    <div
      className="w-full aspect-square"
      style={{
        background: `linear-gradient(135deg, hsl(var(--accent-${item.accent || "sky"})), hsl(var(--primary) / 0.4))`,
      }}
    />
    <div className="font-hand text-lg text-center mt-2 text-foreground/80">{item.title}</div>
  </div>
);

const StickyCard = ({ item }: { item: PortfolioItem }) => (
  <div>
    <div className="font-hand text-2xl leading-tight">{item.title}</div>
    <div className="font-ui text-xs mt-2 opacity-70 line-clamp-3">{item.subtitle}</div>
  </div>
);

const CassetteCard = ({ item }: { item: PortfolioItem }) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <div className="w-6 h-6 rounded-full border-2 border-foreground/40" />
      <div className="w-6 h-6 rounded-full border-2 border-foreground/40" />
      <div className="flex-1 h-1 bg-foreground/20 rounded-full" />
    </div>
    <div className="font-display text-lg leading-tight">{item.title}</div>
    <div className="font-ui text-[10px] text-muted-foreground mt-1">{item.subtitle}</div>
  </div>
);

const RecipeCard = ({ item }: { item: PortfolioItem }) => (
  <div className="pt-3">
    <div className="font-hand text-2xl leading-tight text-primary">{item.title}</div>
    <div className="font-ui text-xs text-muted-foreground mt-1">{item.subtitle}</div>
    <ul className="font-ui text-[11px] mt-2 space-y-0.5 opacity-70">
      <li>· menu · timing · playlist</li>
    </ul>
  </div>
);

export default FridgeBoard;
