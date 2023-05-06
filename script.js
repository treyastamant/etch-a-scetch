

function createGrid(x) {
  const container = document.querySelector('#container');

  for (c = 1; c <= x; c++) {
    const col = document.createElement('div');
    col.className = 'col';
    col.setAttribute('id', 'col' + c);
    container.appendChild(col);
  
    for (r = 1; r <= x; r++) {
      const row = document.createElement('div');
      row.classList.add('row', 'row' + r, 'col' + c);
      col.appendChild(row);
    
      const pixel = document.querySelector('.row' + r, '.col' + c);
      pixel.addEventListener('mouseover', () => {
      pixel.setAttribute('style', 'background-color:black;');
      });
      console.log(c);
      console.log(pixel);
    }
    
  }
}

const start = document.querySelector('#gridBtn');
start.addEventListener('click', () => {
  createGrid(16)
}, {once : true});


