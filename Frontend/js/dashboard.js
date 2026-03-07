function addTask(){

let taskInput=document.getElementById("taskInput");
let task=taskInput.value;

if(task==="") return;

let li=document.createElement("li");

let span=document.createElement("span");
span.innerText=task;

let btnDiv=document.createElement("div");
btnDiv.className="task-buttons";

let completeBtn=document.createElement("button");
completeBtn.innerText="Complete";

completeBtn.onclick=function(){
span.classList.toggle("completed");
}

let deleteBtn=document.createElement("button");
deleteBtn.innerText="Delete";

deleteBtn.onclick=function(){
li.remove();
}

btnDiv.appendChild(completeBtn);
btnDiv.appendChild(deleteBtn);

li.appendChild(span);
li.appendChild(btnDiv);

document.getElementById("taskList").appendChild(li);

taskInput.value="";

}



const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
toggleBtn.innerText="☀ Light Mode";
}else{
toggleBtn.innerText="🌙 Dark Mode";
}

});