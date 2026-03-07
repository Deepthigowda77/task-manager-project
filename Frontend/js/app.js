const API_URL = "http://localhost:5000/api/tasks";

// // LOAD TASKS
// async function loadTasks() {

// const token = localStorage.getItem("token");

// const response = await fetch(API_URL,{
// method:"GET",
// headers:{
// "Authorization":`Bearer ${token}`
// }
// });

// const tasks = await response.json();

// const taskList = document.getElementById("taskList");
// taskList.innerHTML = "";

// tasks.forEach(task => {

// const li = document.createElement("li");
// li.textContent = task.title;

// const deleteBtn = document.createElement("button");
// deleteBtn.textContent = "Delete";

// deleteBtn.onclick = ()=>deleteTask(task.id);

// li.appendChild(deleteBtn);
// taskList.appendChild(li);

// });

// }

// // ADD TASK
// async function addTask(){

// const token = localStorage.getItem("token");

// const taskInput = document.getElementById("taskInput");
// const title = taskInput.value;

// if(title === ""){
// alert("Enter task");
// return;
// }

// await fetch(API_URL,{
// method:"POST",
// headers:{
// "Content-Type":"application/json",
// "Authorization":`Bearer ${token}`
// },
// body: JSON.stringify({title})
// });

// taskInput.value="";
// loadTasks();

// }

// // DELETE TASK
// async function deleteTask(id){

// const token = localStorage.getItem("token");

// await fetch(`${API_URL}/${id}`,{
// method:"DELETE",
// headers:{
// "Authorization":`Bearer ${token}`
// }
// });

// loadTasks();

// }

// // LOGOUT
// function logout(){
// localStorage.removeItem("token");
// window.location.href="index.html";
// }

// if(window.location.pathname.includes("dashboard.html")){
// loadTasks();
// }











// function addTask(){

// let taskInput = document.getElementById("taskInput");
// let taskText = taskInput.value;

// if(taskText === ""){
// alert("Please enter a task");
// return;
// }

// let li = document.createElement("li");

// li.innerHTML = `
// <span class="task-text">${taskText}</span>

// <div class="task-buttons">
// <span class="status pending">Pending</span>
// <button class="complete-btn">Done</button>
// <button class="delete-btn">Delete</button>
// </div>
// `;

// li.querySelector(".delete-btn").onclick = function(){
// li.remove();
// };

// li.querySelector(".complete-btn").onclick = function(){

// let status = li.querySelector(".status");

// status.textContent = "Completed";
// status.classList.remove("pending");
// status.classList.add("completed");

// };

// document.getElementById("taskList").appendChild(li);

// taskInput.value="";
// }



const API = "http://localhost:5000/api/tasks";

const token = localStorage.getItem("token");

async function loadTasks(){

const res = await fetch(API,{
headers:{
Authorization:`Bearer ${token}`
}
});

const tasks = await res.json();

const taskList = document.getElementById("taskList");
taskList.innerHTML="";

tasks.forEach(task=>{

const li = document.createElement("li");

li.innerHTML=`
${task.task}
<button onclick="deleteTask(${task.id})">Delete</button>
`;

taskList.appendChild(li);

});

}

async function addTask(){

const taskInput = document.getElementById("taskInput").value;

await fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json",
Authorization:`Bearer ${token}`
},
body:JSON.stringify({task:taskInput})
});

loadTasks();

}

async function deleteTask(id){

await fetch(`${API}/${id}`,{
method:"DELETE",
headers:{
Authorization:`Bearer ${token}`
}
});

loadTasks();

}

window.onload = loadTasks;

function logout(){
localStorage.removeItem("token");
window.location.href="index.html";
}