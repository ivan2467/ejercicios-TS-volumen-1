import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { navbar } from "./components/navbar.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
${navbar()}
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
