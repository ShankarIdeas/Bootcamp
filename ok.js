const domain = "guvi";
const page = "code-kata";
const url = "http://" + domain + ".in" + "/" + page;

// Es6 - `` - template literal
console.log(url);

// '' ``
const tempURL = `http://${domain}.in/${page}`;
console.log(tempURL);
// Readablity, Maintainablity

const para = `Codekata a series of programs curated by experts from the industry. 

Practising on Codekata will take your coding skills to next level. We will recommend your profile to recruiting companies based on your performance in codekata.

You can be a better programmer and crack interviews by completing Codekata`;

console.log(para);

// Destructuring while declaration
// const [name, age] = ['Kaustubh', 15];
// const [name, age] = ['Kaustubh'];

// age - declared but value not there

// const [name, age, group] = ['Kaustubh', , 'B25B'];
// Default values -> It can only replace undefined
// const [name, age=20, group] = ['Kaustubh', , 'B25B'];

// const [name, age=20, group] = ['Kaustubh', 17 , 'B25B'];
// const [name, age=20, group='B25B'] = ['Kaustubh', 17 , null];

// const [name, age=20, group='B25B'] = ['Kaustubh', 17];
// ["Kaustubh", 17,"B25B"]

// const [name, age=20, group='B25B'] = ['Kaustubh', 'B25', 17];

// const { name, age = 20, group = "B25B" } = {
//   group: "B25B",
//   age: 17,
//   name: "Kaustubh"
// };

// const { name } =
//       {
//   group: "B25B",
//   age: 17,
//   name: "Kaustubh"
// };

// console.log(name);
// console.log(age); // not defined - its not declared
// console.log(group);
// name -
// ctrl + /

function getNumbers() {
  return [1, 2, 3, 4, 5];
}

// ... rest - we are collecting rest the values
// const [first, second] = getNumbers();
// const [first, second, third, fourth] = getNumbers();
const [first, second, ...restOftheNumbers] = getNumbers();
// const [first, second] = [1, 2, 3, 4, 5];
console.log(first + second, restOftheNumbers);
console.log(typeof restOftheNumbers);
// last element
console.log(restOftheNumbers[restOftheNumbers.length - 1]);

// function fullURL({ domain, page }) {
//   return "http://" + domain + ".com" + "/" + page;
// }

// function fullURL(webpage) {
//   const domain = webpage.domain;
//   const page = webpage.page;
//   return "http://" + domain + ".com" + "/" + page;
// }

// function fullURL({ domain, page, pageNumbers }) {
//   if (typeof pageNumbers === "undefined") {
//     pageNumbers = 5;
//   }
//  return `http://${domain}.com/${page}/${pageNumbers}`;
// }

function fullURL({ domain, page, pageNumbers = 5 }) {
  return `http://${domain}.com/${page}/${pageNumbers}`;
}

// ${} - interpolation

const github = { domain: "github", pageNumbers: 10, page: "user-page" };
const google = { domain: "google", page: "search" };
console.log(fullURL(github));
console.log(fullURL(google));

const users = [
  {
    createdAt: "2021-07-26T14:40:27.140Z",
    name: "cghg",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Pawan-Kalyan-Stylish-Look.jpg",
    id: "55"
  },
  {
    createdAt: "2021-07-24T13:18:32.994Z",
    name: "Lois Ebert III",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Pawan-Kalyan-Stylish-Look.jpg",
    id: "56"
  },
  {
    createdAt: "2021-07-19T02:51:30.306Z",
    name: "Ray McCullough",
    avatar: "https://cdn.fakercloud.com/avatars/spedwig_128.jpg",
    id: "57"
  },
  {
    createdAt: "2021-07-18T22:24:17.279Z",
    name: "Veronica Gislason",
    avatar: "https://cdn.fakercloud.com/avatars/alxleroydeval_128.jpg",
    id: "58"
  },
  {
    createdAt: "2021-07-19T10:36:36.108Z",
    name: "Vera Johns",
    avatar: "https://cdn.fakercloud.com/avatars/melvindidit_128.jpg",
    id: "59"
  }
];

// ["cghg", "Lois Ebert III", "Ray McCullough", "Veronica Gislason" "Vera Johns"]

// map -> takes a fn ( arrow function )
// 1. transform -> object -> string;
// 2. it also return same no. of elements
// 3. It will return array
let getName = (user) => user.name
console.log(users.map(getName))
const  fetchName =  ({name})=>(name.startsWith("r")||name.startsWith("R"));

console.log (users.map(({name}) => name));

console.log(users.filter(fetchName).map(getName));
var f = ''||'R';
console.log(f);
//console.log(users.map(fetchName));
const findName = ({ name }) => name;
const fetchNamesWithR1 = ( name ) => name.startsWith("r") ||  name.startsWith("R");
console.log(
  users.map(findName)
   .filter(fetchNamesWithR1)
 
 )
//.filter(fetchName))