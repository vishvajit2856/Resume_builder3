

function saveInput() {
    var firstname = document.getElementById("first_name").value;
    localStorage.setItem("firstname", firstname);


  let midelname = document.getElementById("middel_name").value;
  localStorage.setItem("midelname",midelname);


  let lastname=document.getElementById("last_name").value;
  localStorage.setItem("lastname",lastname);



  let phoneno = document.getElementById("phone_no").value;
  localStorage.setItem("phoneno",phoneno);





  let address= document.getElementById("address").value;
  localStorage.setItem("address",address);


  let email= document.getElementById("email").value;
  localStorage.setItem("email",email);


  let summary=document.getElementById("summary").value;
  localStorage.setItem("summary",summary);


  let designation = document.getElementById("Designation").value;
  localStorage.setItem("designation",designation);


 let skill_1=document.getElementById("skill-1").value;
 localStorage.setItem("skill_1",skill_1);


 let skill_2=document.getElementById("skill-2").value;
 localStorage.setItem("skill_2",skill_2);


 let skill_3=document.getElementById("skill-3").value;
 localStorage.setItem("skill_3",skill_3);

 let skill_4=document.getElementById("skill-4").value;
 localStorage.setItem("skill_4",skill_4);

 let gender=document.getElementById("gender").value;
 localStorage.setItem("gender",gender);

 
 let educationchool=document.getElementById("education-school").value;
  localStorage.setItem("educationchool",educationchool);
 
 let educationmarks=document.getElementById("education-school-marks").value;
  localStorage.setItem("educationmarks",educationmarks);



 let collage=document.getElementById("education-collage").value;
 localStorage.setItem("collage",collage);
 let collagemarks=document.getElementById("education-collage-marks").value;
 localStorage.setItem("collagemarks",collagemarks);


 let degree=document.getElementById("education-degree").value;
 localStorage.setItem("degree",degree);
 let degreemarks=document.getElementById("education-degree-marks").value;
 localStorage.setItem("degreemarks",degreemarks);

 
 let projectname=document.getElementById("project-name").value;
  localStorage.setItem("projectname",projectname);

  let projectlink=document.getElementById("project-link").value;
  localStorage.setItem("projectlink",projectlink);
  
  let projectdescription=document.getElementById("project-description").value;
  localStorage.setItem("projectdescription",projectdescription);
 
  let duration1=document.getElementById("duration").value;
  localStorage.setItem("duration1",duration1);


 window.location.href="user_info_resume.html";




}





//   const inputFile = document.getElementById("photo");

//   // Check if a file is selected
//   if (inputFile.files.length > 0) {
//       // Get the selected file
//       const file = inputFile.files[0];
      
//       // Create a FileReader object
//       const reader = new FileReader();

//       // Set up the onload event handler
//       reader.onload = function(event) {
//           // Get the data URL of the image
//           const imageUrl = event.target.result;
          
//           // Construct the URL for the temp.html page with the image data as a query parameter
//           const url = `temp.html?image=${encodeURIComponent(imageUrl)}`;
          
//           // Redirect to the temp.html page with the image data as a query parameter
//           window.location.href = url;
//       };

     





    

  




// function generateResume() {

 
//   let tem7=document.getElementById("About-text");
//   tem7.innerText=temp7;

//   //access designation section
//   let tem8=document.getElementById("Designation2");
//   tem8.innerText=temp8;
  

//   //achivemnt titel,description

//   let achivementtitel = document.getElementById("achivement-titel");
//   let temp9 = achivementtitel.value;
//    console.log(temp9);
//   let tem9=document.getElementById("Achivement-titel1");
//   tem9.innerText=temp9;


//   let achivementdescription = document.getElementById("achivement-description");
//   let temp10 = achivementdescription.value;
//   let tem10=document.getElementById("Achivement-description");
//   tem10.innerText=temp10;


//    console.log(temp11);   
//    let tem11=document.getElementById("xth");
//    tem11.innerText=temp11;
   
  
//    let tem12=document.getElementById("skill--1");
//    tem12.innerText=temp12;

//    let skill2=document.getElementById("skill-2");
//    temp13=skill2.value;
//    let tem13=document.getElementById("skill--2");
//    tem13.innerText=temp13;
   
   
//    let skill3=document.getElementById("skill-3");
//    temp14=skill3.value;
//    let tem14=document.getElementById("skill--3");
//    tem14.innerText=temp14;
   
//    let skill4=document.getElementById("skill-4");
//    temp15=skill4.value;
//    let tem15=document.getElementById("skill--4");
//    tem15.innerText=temp15;


//    let school=document.getElementById("education-school");
//    temp16=school.value;
//    let tem16=document.getElementById("xth");
//    tem16.innerText=temp16;

//    let tem17=document.getElementById("xiith");
//    tem17.innerText=temp17;
   
//    let tem18=document.getElementById("degree");
//    tem18.innerText=temp18;

//    //marks of the 10 th 12th and degree

//    let schoolMarks=document.getElementById("education-school-marks");
//    let per =schoolMarks.value;
//    let per1=document.getElementById("xth--marks");
//   per1.innerText=per;
  
//   let collageMarks=document.getElementById("education-collage-marks");
//   let per2=collageMarks.value;
//   let per3=document.getElementById("xiith--marks");
//   per3.innerText=per2;
  
//   let degreeMarks=document.getElementById("education-degree-marks");
// let per4=degreeMarks.value;
// let per5=document.getElementById("degree--marks");
//  per5.innerText=per4;

// let per8=document.getElementById("project-titel").innerText=per6;

// let per9=document.getElementById("project-description").value;
// let per10=document.getElementById("project--description").innerText=per9;

// let per12=document.getElementById("project-link").value;
// let per11=document.getElementById("project--link").innerText=per12;


// let per13=document.getElementById("start-date-project").value;
// let per14=document.getElementById("end-date-project").value;
// console.log(per13);
// console.log(per14);

// let per15=document.getElementById("duration").innerText="Duration :" + per13 + " "+"To" + " " +per14;

// // window.location.href="user_info_resume.html 



// }
