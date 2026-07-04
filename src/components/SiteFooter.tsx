const SiteFooter = () => (
  <footer>
    <div className="px-6 lg:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-ui text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} — Made with {"<3"}</p>
      <div className="flex gap-5">
        <a href="mailto:hello@example.com" className="hover:text-foreground transition-colors">Email</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
