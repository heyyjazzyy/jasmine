import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { assetUrl } from "./lib/asset";
import paperTexture from "./assets/paper-texture.jpg.asset.json";

document.body.style.backgroundImage = `url("${assetUrl(paperTexture.url)}")`;

createRoot(document.getElementById("root")!).render(<App />);
