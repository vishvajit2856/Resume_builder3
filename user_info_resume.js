document.body.style.zoom = "67%";

var firstname = localStorage.getItem("firstname");
// document.getElementById("fullname").innerText = firstname;

var midelname=localStorage.getItem("midelname");

var lastname=localStorage.getItem("lastname");

document.getElementById("fullname").innerText=firstname+" "+ midelname+" "+ lastname;

let phoneno=localStorage.getItem("phoneno");
let tem4 = document.getElementById("mobile-no").innerText = phoneno;

let address =localStorage.getItem("address");
let tem6 = document.getElementById("address").innerText = address;


let email =localStorage.getItem("email");
let gmail=document.getElementById("gmail").innerText=email;

let summary=localStorage.getItem("summary");
document.getElementById("summary").innerText=summary;

let designation= localStorage.getItem("designation");
document.getElementById("designation").innerText=designation;

let skill1=localStorage.getItem("skill_1");
document.getElementById("skill1").innerText="1)"+skill1;

let skill2=localStorage.getItem("skill_2");
document.getElementById("skill2").innerText="2)"+skill2;


let skill3=localStorage.getItem("skill_3");
document.getElementById("skill3").innerText="3)"+skill3;

let skill4=localStorage.getItem("skill_4");
document.getElementById("skill4").innerText="4)"+skill4;

let gender=localStorage.getItem("gender");
document.getElementById("gender1").innerText=gender;

let educationchool=localStorage.getItem("educationchool");
let educationmarks=localStorage.getItem("educationmarks");
document.getElementById("Xth").innerText=educationchool+"        "+"   "+"     "+educationmarks;


let collage=localStorage.getItem("collage");
let collagemarks=localStorage.getItem("collagemarks");
document.getElementById("xiith").innerText=collage+" "+collagemarks;

let degree=localStorage.getItem("degree");
let degreemarks=localStorage.getItem("degreemarks");
document.getElementById("degree").innerText=degree+" "+degreemarks;

let projectname=localStorage.getItem("projectname");
let projectlink=localStorage.getItem("projectlink");
let projectdescription=localStorage.getItem("projectdescription");
let time=localStorage.getItem("duration1");
document.getElementById("project-name").innerText=projectname+"\n"+projectlink+"\n "+projectdescription+"\n "+ time+"   Weeks";


// function coloure(){
//   let block=  document.querySelector(".main-board");
//  block.style.backgroundColor ="black";


// }
function red2(){
  let block=  document.querySelector(".resume-form");
  let block1=  document.querySelector(".education");
 block.style.backgroundColor ="red";
 block1.style.backgroundColor ="red";
}

function green2(){
  let block=  document.querySelector(".resume-form");
  let block1=  document.querySelector(".education");
 block.style.backgroundColor ="green";
 block1.style.backgroundColor ="green";
}


function reset2(){
  let block=  document.querySelector(".resume-form");
  let block1=  document.querySelector(".education");
 block.style.backgroundColor ="white";
 block1.style.backgroundColor ="white";
}


function yellow2(){
  let block=  document.querySelector(".resume-form");
  let block1=  document.querySelector(".education");
 block.style.backgroundColor ="yellow";
 block1.style.backgroundColor ="yellow";
}



function pink2(){
  let block=  document.querySelector(".resume-form");
  let block1=  document.querySelector(".education");
 block.style.backgroundColor ="pink";
 block1.style.backgroundColor ="pink";
}


function violet2(){
  let block=  document.querySelector(".resume-form");
  let block1=  document.querySelector(".education");
 block.style.backgroundColor ="violet";
 block1.style.backgroundColor ="violet";
}



function red1(){
  let block=  document.querySelector(".skill-class");
 block.style.backgroundColor ="red";
}


function green1(){
  let block=  document.querySelector(".skill-class");
 block.style.backgroundColor ="green";
}


function reset1(){
  let block=  document.querySelector(".skill-class");
 block.style.backgroundColor ="rgb(194, 250, 241)";
}

function yellow1(){
  let block=  document.querySelector(".skill-class");
 block.style.backgroundColor ="yellow";
}

function pink1(){
  let block=  document.querySelector(".skill-class");
 block.style.backgroundColor ="pink";
}

function violet1(){
  let block=  document.querySelector(".skill-class");
 block.style.backgroundColor ="violet";
}





function red(){
  let block=  document.querySelector(".main-board");
 block.style.backgroundColor ="red";
}


function reset(){
  let block=  document.querySelector(".main-board");
 block.style.backgroundColor ="rgb(194, 250, 241)";
}


function green(){
  let block=  document.querySelector(".main-board");
 block.style.backgroundColor ="green";
}


function yellow(){
  let block=  document.querySelector(".main-board");
 block.style.backgroundColor ="yellow";
}


function pink(){
  let block=  document.querySelector(".main-board");
 block.style.backgroundColor ="pink";
}


function violet(){
  let block=  document.querySelector(".main-board");
 block.style.backgroundColor ="violet";
}

