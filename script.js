const gridBtn = document.querySelector('#gridBtn');
gridBtn.addEventListener('click', () => {
  let gridNum = prompt("Enter a number 1 - 100");
  if (gridNum > 100) {prompt("Enter a number 1 - 100");}
  createGrid(Number(gridNum));
});

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function createGrid(x) {
  const container = document.querySelector('#container');
  removeAllChildNodes(container);

  for (c = 1; c <= x; c++) {
    const col = document.createElement('div');
    col.className = 'col';
    col.setAttribute('id', 'col' + c);
    container.appendChild(col);
  
    for (r = 1; r <= x; r++) {
      const row = document.createElement('div');
      row.classList.add('row');
      row.setAttribute('id', 'r' + r + 'c' + c);
      col.appendChild(row);
    
      const pixel = document.querySelector('#r' + r + 'c' + c);
      pixel.addEventListener('mouseover', () => {
      pixel.setAttribute('style', 'background-color:black;');
      });
    }
    
  }
}

// const toggle = document.querySelector('#gridBtn');
// toggle.addEventListener('click', () => {
// document.getElementById("myDropdown").classList.toggle("show");
// });

// const grid32 = document.querySelector('#grid32');
// grid32.addEventListener('click', () => {
//   reset();
//   createGrid(32);
//   document.getElementById("myDropdown").classList.toggle("show");
// }, {once : true});

// const grid64 = document.querySelector('#grid64');
// grid64.addEventListener('click', () => {
//   createGrid(64);
//   document.getElementById("myDropdown").classList.toggle("show");
// }, {once : true});

// const grid128 = document.querySelector('#grid128');
// grid128.addEventListener('click', () => {
//   createGrid(128);
//   document.getElementById("myDropdown").classList.toggle("show");
// }, {once : true});