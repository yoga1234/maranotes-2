export function behaviourNewNote() {
  const newNoteBtn = document.getElementsByClassName("new-note-btn")[0];

  newNoteBtn.addEventListener("click", function () {
    const modalForm = document.getElementById("modalForm");

    modalForm.style.display = "block";
  });
}
