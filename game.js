var restart = document.querySelector("#b");
var cells = document.querySelectorAll("td");
//we can do the below solution for all the cells
// var cellOne = document.querySelector("#one");
// cellOne.addEventListener("click",function(){
//   if (cellOne.textContent==="") {
//   cellOne.textContent = "X";
//   }
//   else if (cellOne.textContent==="X") {
//     cellOne.textContent="O";
//   }
//   else {
//     cellOne.textContent="";
//   }
// })
function clearAll(){
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent='';
  }
}

restart.addEventListener("click",clearAll);

function changeMarker(){
    if(this.textContent === ''){
      this.textContent = 'X';
      // console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
};
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', changeMarker);
}
