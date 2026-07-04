import ModeSwitch from "./ModeSwitch";

const SiteHeader = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 flex items-center justify-end gap-4">
        <ModeSwitch />
      </div>
    </header>
  );
};

export default SiteHeader;
