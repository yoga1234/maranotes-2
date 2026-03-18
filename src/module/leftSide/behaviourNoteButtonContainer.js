// getting button dom
// const noteOpenBtn = document.getElementsByClassName("note-open-btn");

export function behaviourNoteButtonContainer() {
  const noteOpenBtn = document.getElementsByClassName("note-open-btn")[0];
  const noteDoneBtn = document.getElementsByClassName("note-done-btn")[0];

  noteOpenBtn.addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      this.classList.add("active");
      noteDoneBtn.classList.remove("active");
    }
  });

  noteDoneBtn.addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      this.classList.add("active");
      noteOpenBtn.classList.remove("active");
    }
  });
}
