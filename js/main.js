
let newForm = document.getElementById("newForm");
let updateForm = document.getElementById("updateForm");
let viewForm = document.getElementById("viewForm");
let box2 = document.getElementById("panelContent");

//new form fieldse
let name = document.getElementById("name");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let stad = document.getElementById("stad");

//update form fieldse
let newName = document.getElementById("newName");
let newEmail = document.getElementById("newEmail");
let newMobile = document.getElementById("newMobile");
let newCity = document.getElementById("newCity");


function getUsers(){
let ul = document.querySelector("#gridContainerData");
let li = document.querySelector("#gridData");
let data = "";
  for(let i = 0; i < names.length; i++){
    data += '<li id="gridData" class="grid"><button onclick="showBox()" id="'+i+'">View new</buuton></li>';
    data += '<li id="gridData" class="grid">' + names[i].name +'</li>';
    data += '<li id="gridData" class="grid">' + names[i].email +'</li>';
    data += '<li id="gridData" class="grid">' + names[i].mobile +'</li>';
    data += '<li id="gridData" class="grid">' + names[i].city +'</li>';
  }
  ul.innerHTML = data;
}
getUsers();

function showBox(){
  if(box.style.display === "block"){
    box.style.display = "none";
    updateForm.style.display = "none";
    newForm.style.display = "none";
    viewForm.style.display = "none";
    box2.style.display = "nono";
  }else{
    box.style.display = "block";
    updateForm.style.display = "none";
    newForm.style.display = "none";
    viewForm.style.display = "none";
    box2.style.display = "none";
  }
}
function showAddForm(){
  if(box.style.display === "block"){
    box.style.display = "none";
    updateForm.style.display = "none";
    newForm.style.display = "none";
    viewForm.style.display = "none";
    box2.style.display = "nono";
  }else{
    box.style.display = "block";
    updateForm.style.display = "none";
    newForm.style.display = "block";
    viewForm.style.display = "none";
    box2.style.display = "block";
  }
}

let panelBtn = document.getElementById("panelBtn").addEventListener('click', function() {
  if(box2.style.display === "block"){
    box2.style.display = "none";
    updateForm.style.display = "none";
    newForm.style.display = "none";
    viewForm.style.display = "none";
  }else{
    box2.style.display = "block";
    updateForm.style.display = "none";
    newForm.style.display = "none";
    viewForm.style.display = "block";
  }
}, false);

let updateItem = document.getElementById("updateItem").addEventListener("click", function(){
  console.log("Updating item");
  updateForm.style.display = "block";
  newForm.style.display = "none";
  viewForm.style.display = "none";
}, false);

let deleteItem = document.getElementById("deleteItem").addEventListener("click", function(){
  console.log("Delete item");
  updateForm.style.display = "none";
  newForm.style.display = "none";
  viewForm.style.display = "block";
}, false);

let saveItem = document.getElementById("saveItem").addEventListener("submit", function(){

  console.log("Save item");
  updateForm.style.display = "none";
  newForm.style.display = "none";
  viewForm.style.display = "block";

}, false);

let cancelItem = document.getElementById("cancelItem").addEventListener("click", function(){
  console.log("Cancel item");
  updateForm.style.display = "none";
  newForm.style.display = "none";
  viewForm.style.display = "block";
}, false);

let saveNewItem = document.getElementById("saveNewItem").addEventListener("click", function(e){
e.preventDefault();
  console.log("Save new item");
  updateForm.style.display = "none";
  newForm.style.display = "none";
  viewForm.style.display = "block";
  let newName = document.querySelector("#newName");
  let newEmail = document.querySelector("#newEmail");
  let newMobile = document.querySelector("#newMobile");
  let newCity = document.querySelector("#newCity");
  //let values = {  newName.value ,newEmail.value, newMobile.value, newCity.value };
  //names.push(values);
  //console.log(names);
}, false);

let cancelNewItem = document.getElementById("cancelNewItem").addEventListener("click", function(){
  console.log("Cancel new item");
  updateForm.style.display = "none";
  newForm.style.display = "none";
  viewForm.style.display = "block";
}, false);

let addItem = document.getElementById("addItem").addEventListener("click", function(){
  console.log("Add item");
  updateForm.style.display = "none";
  newForm.style.display = "block";
  viewForm.style.display = "none";


  //input.value
}, false);


//let newForm = document.getElementById("newForm");
//let updateForm = document.getElementById("updateForm");
//let viewForm = document.getElementById("viewForm");

//updateForm.style.display = "none";
//newForm.style.display = "none";
//viewForm.style.display = "block";
