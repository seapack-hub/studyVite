import lessModel from "./index.module.less";

console.log("lessModel:",lessModel);

let div = document.createElement("div");
div.classList.add(lessModel.content);
let childDiv = document.createElement("div");
childDiv.className = lessModel.main;

div.appendChild(childDiv);

document.body.appendChild(div);