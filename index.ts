// Import stylesheets
import "./style.css";
import { of, range, asyncScheduler } from "rxjs";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// const src$ = of(1,2,3,4,5);
range(1, 5, asyncScheduler).subscribe(val => console.log(val * 10));
