export function behaviourNoteList() {
  const noteCards = document.querySelectorAll(".note-card");

  noteCards.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      removeActive();
      e.stopPropagation();
      e.target.closest(".note-card").classList.add("active");
    });
  });

  function removeActive() {
    for (let i = 0; i < noteCards.length; i++) {
      noteCards[i].classList.remove("active");
    }
  }
}
