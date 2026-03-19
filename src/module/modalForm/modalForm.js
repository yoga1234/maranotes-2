export function modalForm() {
  return `
    <div id="modalForm">
      <div class="modal-container">
        <form action="#">
          <label for="noteTitle">Title</label>
          <input type="text" id="noteTitle" name="NoteTitle" />
          <label for="noteDescription">Description</label>
          <textarea id="noteDescription" name="noteDescription"></textarea>
          <div class="modal-btn-container">
            <button id="submitNewNote">Submit</button>
            <button class="modal-close-btn">close</button>
          </div>
        </form>
      </div>
    </div>
  `;
}
