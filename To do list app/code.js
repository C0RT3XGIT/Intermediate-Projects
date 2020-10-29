function addTask() {
  let task = document.getElementById("newTask").value;
  if (task == "") {
    alert("Please enter a task firstly !");
  } else {
    let button = document.createElement("button");
    let table = document.getElementById("tasksTable");
    let rowCount = table.rows.length;
    let row = table.insertRow();
    let cel1 = row.insertCell(0);
    let cel2 = row.insertCell(1);
    let cel3 = row.insertCell(2);
    cel1.innerHTML = `${rowCount}.`;
    cel2.innerHTML = task;
    button.innerHTML = "Delete";
    button.onclick = function () {
      this.parentNode.parentNode.parentNode.removeChild(
        this.parentNode.parentNode
      );
    };
    cel3.appendChild(button);
  }
}

function removeRows() {
  let table = document.getElementById("tasksTable");
  let i = table.rows.length - 1;
  while (i > 0) {
    table.deleteRow(i);
    i--;
  }
}

function removeCurentRow() {
  let table = document.getElementById("tasksTable");
  let curentRow = table.rows.length - 1;
  return curentRow;
}
