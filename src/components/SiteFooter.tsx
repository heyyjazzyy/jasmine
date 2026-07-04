const SiteFooter = () => (
  <footer className="border-t border-border/60 mt-24">
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-ui text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} — Made with {"<3"}</p>
      <div className="flex gap-5">
        <a href="mailto:hello@example.com" className="hover:text-foreground transition-colors">Email</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
