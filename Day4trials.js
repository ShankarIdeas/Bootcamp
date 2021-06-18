let obj = { person: "venkat", age: "2", company: "GUVI" };
for (let i in obj) {
  console.log(i);
  console.log(obj[i]);
}

let obj1 = [
  { Name: "Shankar", age: "2", company: "GUVI" },
  { Name: "Raj", age: "2", company: "GUVI.In" },
  { Name: "Jegadeesan", age: "2", company: "GUVI.Pro" },
];

//for in
for (let i in obj1) {
  for (let j in obj1[i]) {
    console.log(j + ":" + obj1[i][j]);
  }
}

//forEach method
obj1.forEach(function (x){
    console.log(x)
    
});

//forEach with arrows
obj1.forEach(element => {
    console.log(element);
});

//for loop
for (let i = 0; i < obj1.length; i++) {
   console.log(obj1[i].Name);
 }
