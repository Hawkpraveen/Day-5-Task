//Day 5 
//Task 1 Creating Json format resume
console.log("Task 1 Creating Json format resume:->");
let resume1={
    "Name": "PRAVEEN KUMAR",
    "email": "praveen.pk200109@gmail.com",
    "Mobile": "8778750721",
    "Address": "No.163/4,SGIR Royal City,Sadaiyampattu,kallakurichi",
    "Summary": "Having real enthusiasm, I want to build up my career in a prominent and progressive  organization where I can use my skills to develop the organization and thus offers career growth opportunities.",
    "Skills": [
      " ProgrammingLanguages : JAVA, PYTHON",
      "LibrariesFrameworks : JavaScript, Scikit-Learn, Numpy,Tkinter,Pandas, React.",
      " Databases: MySql, Sqlite3"
    ],
    "Education": [
      "College: B.Tech-Information Technology,MANAKULA VINAYAGAR INSTITUTE OF TECHNOLOGY",
      "HSC : A.K.T HR SEC SCHOOL",
      "SSLC : MOUNT PARK HR SEC SCHOOL"
    ]
  };


//Task 2 Printing values in objects using loops
console.log("Task 2 Printing values in objects using loops:->");
let resume={
    "Name": "PRAVEEN KUMAR",
    "email": "praveen.pk200109@gmail.com",
    "Mobile": "8778750721",
    "Address": "No.163/4,SGIR Royal City,Sadaiyampattu,kallakurichi",
    "Summary": "Having real enthusiasm, I want to build up my career in a prominent and progressive  organization where I can use my skills to develop the organization and thus offers career growth opportunities.",
    "Skills": [
      " ProgrammingLanguages : JAVA, PYTHON",
      "LibrariesFrameworks : JavaScript, Scikit-Learn, Numpy,Tkinter,Pandas, React.",
      " Databases: MySql, Sqlite3"
    ],
    "Education": [
      "College: B.Tech-Information Technology,MANAKULA VINAYAGAR INSTITUTE OF TECHNOLOGY",
      "HSC : A.K.T HR SEC SCHOOL",
      "SSLC : MOUNT PARK HR SEC SCHOOL"
    ]
  };

//for loop-->
console.log("For Loop---->");
  for (let i = 0; i < Object.keys(resume).length; i++) {
    const key = Object.keys(resume)[i];
    console.log(`${key}: ${resume[key]}`);
  }
console.log("X--------X-------X");

//for in loop-->
console.log("For in Loop---->");
  for (const key in resume) {
    console.log(`${key}: ${resume[key]}`);
  }
  console.log("X--------X-------X");

  // for of loop
  console.log("For of Loop---->");
  for(const [key,value] of Object.entries(resume) ){
    console.log(`${key}: ${value}`);
  }
  console.log("X--------X-------X");

  // for each loop
  console.log("For each Loop---->");
  Object.keys(resume).forEach((key) => {
    console.log(`${key}: ${resume[key]}`);
  });
  console.log("X--------X-------X");