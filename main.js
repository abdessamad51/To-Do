 

let taskinput = document.querySelector("input");
let btn = document.querySelector("button");
let containeur = document.querySelector(".containeur");
let tasks = []

// fill containeur with task into local storage
if (localStorage.getItem("task")) {
  tasks = JSON.parse(localStorage.getItem("task"));
  tasks.forEach((tasks) => {
    add_tasks(tasks.task, tasks.id);
  });
}

// create task
function add_tasks(value, id) {

  let box = document.createElement("div");
  box.classList.add("box");
  // create child

  // create body task
  let p = document.createElement("p");
  let task = document.createTextNode(`${value}`);
  p.appendChild(task);

  // create button delete
  let btn = document.createElement("img");
  btn.classList.add("delete");
  btn.setAttribute("src","done.png");
  let textButton = document.createTextNode("delete");
  btn.style.cssText = "width:50px;height:30px;background-color:red;border:none;cursor: pointer;";
  btn.appendChild(textButton);

  // add child to box
  box.appendChild(p);
  box.appendChild(btn);
  box.style.cssText =
    "padding:2px 4px;height:35px;background-color:white;display:flex;align-items:center;justify-content:space-between;margin:4px 9px";
  box.setAttribute("id", id);
  containeur.appendChild(box);
}

// add task
btn.onclick = function () {
  if(taskinput.value.length != 0) {
    let id = Date.now()
    let taskLo = {
      id: id,
      task: taskinput.value,
    };
    add_tasks(taskinput.value, id);
    tasks.push(taskLo);
    add_tasks_ls(tasks)
  } else {
    alert("plaiser fill champer");
    taskinput.style.borderColor = "red";
    taskinput.focus();
  }
};
// delete task
document.addEventListener("click", function (e) {
  if (e.target.classList == "delete") {
    let task_id = e.target.parentElement.getAttribute("id");
    e.target.parentElement.remove();
    tasksfilter = tasks.filter(function (task) {
      return task.id != task_id;
    });
    add_tasks_ls(tasksfilter)
  }
});

// add tasks to local storage
function add_tasks_ls(arr_tasks) {
  localStorage.setItem("task", JSON.stringify(arr_tasks));
}