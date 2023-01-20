// grabbing some html elements

let userNumber = document.getElementById("user_input");
let buttonSubmit = document.getElementById("user_submit");
let error_input = document.getElementById("error_input");
let clearButton = document.getElementById("clear-btn");
let containerDiv = document.querySelector(".container");


clearButton.addEventListener("click", clearBoard);
buttonSubmit.addEventListener("click", createBoard);


// create a default board
  createBoard()


  function createBoard () {

    //getting the user input value
    let customGrid = userNumber.value;
    // checking if the user submitted a number that must be more than 0 and less than 100
    if (customGrid < 0 || customGrid > 99 || isNaN(customGrid)) {
      error_input.textContent = "Insert a number between 2 and 99!";
    } else {

        //clearing 
        error_input.textContent = "";
  
        userNumber.value = "";
        containerDiv.innerHTML = "";
    // if user input is empty or zero create a default board with 16 
      if (customGrid == 0  || customGrid == "") {
        for (let i = 0; i < 16; i++) {
          let row = document.createElement("div");
          row.classList.add("row");
          containerDiv.appendChild(row);
          for (let i = 0; i < 16; i++) {
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
          }
        } // otherwise create a custom board with user number
      } else {
        for (let i = 0; i < customGrid; i++) {
          let row = document.createElement("div");
          row.classList.add("row");
          containerDiv.appendChild(row);
          for (let a = 0; a < customGrid; a++) {
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
          }
        }
      }
    }
    // call draw 
    draw();
  };




function draw(){
  let columns = document.getElementsByClassName("column");
  for (i = 0; i < columns.length; i++) {
    columns[i].addEventListener("mouseover", changeColor);
  }

  function changeColor() {
    this.style.backgroundColor = "#071108";
  }
};



function clearBoard() {
  let columns = document.getElementsByClassName("column");

 // for each column change its background to bisque the original one
  for (i = 0; i < columns.length; i++) {
   columns[i].style.backgroundColor = "bisque";
    for (let a = 0; a < 16; a++) {
      columns[a].style.backgroundColor = "bisque";
    }
  }
}

