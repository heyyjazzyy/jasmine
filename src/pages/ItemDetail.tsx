import { Link, useParams, Navigate } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { bySlug } from "@/data/portfolio";

// Very small markdown-ish renderer (headings, bold, lists, paragraphs).
const renderBody = (body: string) => {
  const lines = body.split("\n");
  const out: JSX.Element[] = [];
  let listBuf: string[] = [];
  const flushList = () => {
    if (listBuf.length) {
      out.push(
        <ul key={`ul-${out.length}`} className="list-disc pl-6 space-y-1.5 body-text my-4">
          {listBuf.map((li, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inline(li) }} />
          ))}
        </ul>
      );
      listBuf = [];
    }
  };
  const inline = (s: string) =>
    s
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, '<code class="font-ui text-[0.9em] bg-secondary px-1 py-0.5 rounded">$1</code>');

  lines.forEach((raw, idx) => {
    const line = raw.trimEnd();
    if (!line.trim()) { flushList(); return; }
    if (line.startsWith("# ")) {
      flushList();
      out.push(<h1 key={idx} className="display-heading mt-8 mb-4">{line.slice(2)}</h1>);
    } else if (line.startsWith("## ")) {
      flushList();
      out.push(<h2 key={idx} className="font-display text-2xl md:text-3xl mt-10 mb-3">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      flushList();
      out.push(<h3 key={idx} className="font-display text-xl mt-6 mb-2">{line.slice(4)}</h3>);
    } else if (/^[-*]\s/.test(line)) {
      listBuf.push(line.replace(/^[-*]\s/, ""));
    } else {
      flushList();
      out.push(
        <p key={idx} className="body-text my-4" dangerouslySetInnerHTML={{ __html: inline(line) }} />
      );
    }
  });
  flushList();
  return out;
};

const ItemDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? bySlug(slug) : undefined;
  if (!item) return <Navigate to="/404" replace />;

  const backHref =
    item.category === "pm" ? "/work" : `/${item.category}`;

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24 w-full">
        <Link to={backHref} className="font-ui text-xs text-muted-foreground hover:text-foreground">
          ← Back
        </Link>
        <div className="font-ui text-xs uppercase tracking-[0.2em] text-primary mt-6 mb-2">
          {item.category === "pm" ? "Case Study" : item.category} · {item.year}
        </div>
        {item.subtitle && (
          <p className="font-ui text-sm text-muted-foreground mb-2">{item.subtitle}</p>
        )}
        <article className="prose-invert">{renderBody(item.body)}</article>
      </main>
      <SiteFooter />
    </div>
  );
};

export default ItemDetail;
