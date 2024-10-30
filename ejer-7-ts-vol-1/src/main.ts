import { form } from "./components/form/form";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

app?.appendChild(form());

console.log(form());
