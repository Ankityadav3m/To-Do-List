const todo = document.getElementById("todo");
const listcontainer = document.getElementById("list-container");

function addTask() {
  // Corrected function declaration
  if (todo.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = todo.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }
  todo.value = "";
  saveData();
}

listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("Data", listcontainer.innerHTML);
}

function showTask() {
  listcontainer.innerHTML = localStorage.getItem("Data");
}
showTask();


// //Shows Date&Time

// function updateDateTime() {
//   const now = new Date();

//   const currentDateTime = now.toLocaleString();

//   document.querySelector("#datetime").textContent = currentDateTime;
// }

// setInterval(updateDateTime, 1000);
