export function behaviourFormModal() {
  const closeModalBtn = document.getElementsByClassName("modal-close-btn")[0];

  closeModalBtn.addEventListener("click", function () {
    const modalForm = document.getElementById("modalForm");

    modalForm.style.display = "none";
  });
}
