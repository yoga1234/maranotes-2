import "./styles/container.css";
// left side
import {
  maraLogo,
  projectNoteButton,
  newNote,
  projectList,
} from "./module/leftSide/leftContainer.js";

// right side
import {
  noteSource,
  noteDetails,
  doneDeleteButton,
} from "./module/RightSide/rightContainer.js";

// importing behaviour
import {
  behaviourNoteList,
  behaviourNoteButtonContainer,
  behaviourNewNote,
  behaviourFormModal,
} from "./module/behaviourContainer.js";

// getting main container
const mainContainer = document.getElementById("main-container");
// getting main container on templatel
const leftSide = document.getElementById("left-side");
const rightSide = document.getElementById("right-side");

// adding module to the DOM / left side
const leftSideModule = [maraLogo, projectNoteButton, projectList, newNote];
leftSideModule.forEach((module) => {
  leftSide.insertAdjacentHTML("beforeend", module());
});

// adding module to the DOM / Right side
const rightSideModule = [noteSource, noteDetails, doneDeleteButton];
rightSideModule.forEach((module) => {
  rightSide.insertAdjacentHTML("beforeend", module());
});

// modal section
import { modalForm } from "./module/modalForm/modalForm.js";
mainContainer.insertAdjacentHTML("beforeend", modalForm());

// behaviour
behaviourNoteButtonContainer();
behaviourNoteList();
behaviourNewNote();
behaviourFormModal();
