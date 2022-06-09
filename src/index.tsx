import { createRoot } from "react-dom/client";
import { Buffer } from "buffer";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";

window.Buffer = Buffer;
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

reportWebVitals();
