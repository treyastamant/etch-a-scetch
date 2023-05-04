

function createGrid(h, w) {
  const x = h * w;
  const container = document.querySelector('#container');

  for (i = 0; i < x; i++) {
    const grid = document.createElement('div');
    grid.className = "grid";
    grid.setAttribute('id', 'grid' + i);
    container.appendChild(grid);
    
    const pixel = document.querySelector('#grid' + i);
    pixel.addEventListener('mouseover', () => {
    pixel.setAttribute("style", "background-color:black;");
    });
  }
}

const start = document.querySelector('#gridBtn');
start.addEventListener('click', () => {
  createGrid(16, 16)
}, {once : true});


