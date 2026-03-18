// importing module
// importing css
import "./styles/main.css";
import "./styles/leftSide.css";
import "./styles/rightSide.css";

// left side
import { maraLogo } from "./module/leftSide/logo.js";
import { projectNoteButton } from "./module/leftSide/noteButtonContainer.js";
import { newNote } from "./module/leftSide/newNote.js";
import { projectList } from "./module/leftSide/noteList.js";

// right side
import { noteSource } from "./module/RightSide/noteSource.js";
import { noteDetails } from "./module/RightSide/noteDetails.js";
import { doneDeleteButton } from "./module/RightSide/doneDeleteButton.js";

// getting main container on templatel
const mainContainer = document.getElementById("main-container");
const leftSide = document.getElementById("left-side");
const rightSide = document.getElementById("right-side");

// adding module to the DOM / left side
leftSide.insertAdjacentHTML("beforeend", maraLogo());
leftSide.insertAdjacentHTML("beforeend", projectNoteButton());
leftSide.insertAdjacentHTML("beforeend", projectList());
leftSide.insertAdjacentHTML("beforeend", newNote());

// adding module to the DOM / Right side
rightSide.insertAdjacentHTML("beforeend", noteSource());
rightSide.insertAdjacentHTML("beforeend", noteDetails());
rightSide.insertAdjacentHTML("beforeend", doneDeleteButton());

// importing behaviour
import { behaviourNoteButtonContainer } from "./module/leftSide/behaviourNoteButtonContainer.js";
import { behaviourNoteList } from "./module/leftSide/behaviourNoteList.js";
behaviourNoteButtonContainer();
behaviourNoteList();
