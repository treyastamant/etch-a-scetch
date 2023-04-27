

function createGrid(h, w) {
  const x = h * w;
  const container = document.querySelector('#container');

  for (i = 0; i < x; i++) {
    const grid = document.createElement('div');
    grid.className = "grid";
    container.appendChild(grid);
  }
}

const start = document.querySelector('#createGrid');
start.addEventListener('click', () => {
  createGrid(16, 16);
})
