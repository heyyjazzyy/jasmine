import { Link, useParams, Navigate } from "react-router-dom";
import flowerAsset from "@/assets/flower.png.asset.json";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
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
      // Skip the first H1 — we render the title in the hero.
      flushList();
      return;
    } else if (line.startsWith("## ")) {
      flushList();
      out.push(<h2 key={idx} className="font-display text-2xl md:text-3xl mt-12 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      flushList();
      out.push(<h3 key={idx} className="font-display text-xl mt-8 mb-2">{line.slice(4)}</h3>);
    } else if (/^!\[[^\]]*\]\([^)]+\)$/.test(line)) {
      flushList();
      const m = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)!;
      out.push(
        <img
          key={idx}
          src={m[2]}
          alt={m[1]}
          className="w-full h-auto my-8 rounded-md"
        />
      );
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

// Extract role / timeline / team from subtitle segments like
// "PM Intern · Video Call w/ Lily · Summer 2025".
const parseSubtitle = (subtitle?: string, category?: string) => {
  if (!subtitle) return { role: "", team: "", timeline: "" };
  const parts = subtitle.split("·").map((s) => s.trim()).filter(Boolean);
  if (category === "writing") {
    const withoutRole = parts.length >= 3 ? parts.slice(1) : parts;
    return { role: "", team: withoutRole[0] || "", timeline: withoutRole[1] || "" };
  }
  return {
    role: parts[0] || "",
    team: parts.length >= 3 ? parts[1] : "",
    timeline: parts[parts.length - 1] || "",
  };
};

const ItemDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? bySlug(slug) : undefined;
  if (!item) return <Navigate to="/404" replace />;

  const backHref = item.category === "pm" ? "/" : `/${item.category}`;
  const isWriting = item.category === "writing";
  const { role, team, timeline } = parseSubtitle(item.subtitle, item.category);

  // Pull first H1 as the tagline / hero subtitle if present.
  const firstH1 = item.body.split("\n").find((l) => l.startsWith("# "));
  const tagline = firstH1 ? firstH1.slice(2) : "";

  // Interleave narrow text blocks and full-width images.
  const bodyElements = renderBody(item.body);
  const interleaved: JSX.Element[] = [];
  let textChunk: JSX.Element[] = [];
  const flushText = () => {
    if (textChunk.length) {
      interleaved.push(
        <div key={`text-${interleaved.length}`} className="px-6 lg:px-12 max-w-3xl">
          {textChunk}
        </div>
      );
      textChunk = [];
    }
  };
  bodyElements.forEach((el) => {
    if (el.type === "img") {
      flushText();
      interleaved.push(el);
    } else {
      textChunk.push(el);
    }
  });
  flushText();

  return (
    <main className="min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Left sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 border-r border-border/60 p-6 pt-16 md:pt-20 lg:p-8 lg:pt-24 flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen"
        >
          <div>
            <div className="flex items-center gap-2 lg:block">
              <Link to="/" aria-label="Home"><img src={flowerAsset.url} alt="" className="w-10 h-10 lg:w-16 lg:h-16 mb-0 lg:mb-3 hover:opacity-80 transition-opacity" /></Link>
              <Link to="/" className="font-display text-2xl leading-tight hover:text-primary transition-colors block whitespace-nowrap">
                Jasmine Liao
              </Link>
            </div>
            <Link
              to={backHref}
              className="lg:hidden inline-flex items-center gap-2 font-ui text-sm text-muted-foreground hover:text-foreground transition-colors pt-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          <Link
            to={backHref}
            className="hidden lg:inline-flex items-center gap-2 font-ui text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.aside>

        {/* Content */}
        <div className="lg:col-span-10">
          <article className="pt-0 pb-12 lg:py-20">
            <div className="px-6 lg:px-12 max-w-3xl mb-10 md:mb-12 lg:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-baseline gap-4 mb-6"
              >
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-none">
                  {item.title}
                </h1>
                {item.year && (
                  <span className="font-ui text-sm text-muted-foreground">{item.year}</span>
                )}
              </motion.div>

              {tagline && (
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="body-text text-muted-foreground mb-6 md:mb-8 lg:mb-10"
                >
                  {tagline}
                </motion.p>
              )}

              {(role || timeline || team) && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className={`grid grid-cols-2 gap-x-6 gap-y-6 border-t border-b border-border/60 py-8 ${isWriting ? "" : "md:grid-cols-3"}`}
                >
                  {role && role !== "\n" && (
                    <div>
                      <p className="font-ui text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Role</p>
                      <p className="text-foreground whitespace-pre-line">{role}</p>
                    </div>
                  )}
                  {timeline && (
                    <div>
                      <p className="font-ui text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{isWriting ? "Date" : "Timeline"}</p>
                      <p className="text-foreground">{timeline}</p>
                    </div>
                  )}
                  {team && team !== "\n" && (
                    <div>
                      <p className="font-ui text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{isWriting ? "Class" : "Team"}</p>
                      <p className="text-foreground">{team}</p>
                    </div>
                  )}
                </motion.div>
              )}
            </div>


            {interleaved}
          </article>

          <footer className="border-t border-border/60 p-6 lg:p-12 font-ui text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Jasmine Liao</p>
          </footer>

        </div>
      </div>
    </main>
  );
};

export default ItemDetail;
