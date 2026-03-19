export function activeData(data) {
  const active = {};

  if (Object.keys(active).length === 0) {
    // hiding the done delete button
    const doneDeleteBtn =
      document.getElementsByClassName("done-delete-button")[0];
    doneDeleteBtn.style.display = "none";
  }
  // else change the dom and shows the data
}
