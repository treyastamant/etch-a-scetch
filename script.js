

function createGrid(h, w) {
  const container = document.querySelector('#container');

  for (i = h; i < h; i++) {
  const grid = document.createElement('div');
  grid.textContent = "Hello";
  container.appendChild(grid);
  }
}

const start = document.querySelector('#createGrid');
start.addEventListener('click', () => {
  createGrid(16, 16);
})
