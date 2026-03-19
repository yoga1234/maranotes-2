export function projectList(data) {
  let loopData = data();
  let templateData;
  loopData.forEach((element) => {});

  return `
    <div class="project-list">
      <h2>Notes</h2>
        <div class="card-container">
          <div class="card note-card">
            <p class="title">
              Data Kosong
            </p>
            <p class="desc">-</p>
          </div>
      </div>
    </div>
  `;
}
