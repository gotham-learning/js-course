// Data type in JavaScript

typeof 1; // ?
typeof "hello"; // ?
typeof {}; // ?
typeof []; // ?
typeof function() {}; // ?
typeof true; // ?

const a = [1, 2, 3, 4]; // ?
const phung = {
  name: "phung",
  company: {
    name: "ka"
  }
};

const listOfStaff = [
  {
    name: "Phung"
  },
  {
    name: "Pang"
  }
];
listOfStaff[0].name; // ?

const saichon = {
  foo: "saichon",
  bar: 123
};
const ham = {
  name: "ham",
  age: 25,
  home_town: "Bangkok",
  friend: [phung, saichon],
  time: function() {
    return 10 * 5;
  }
}; // ?

const result = "name";
ham.friend[0][result]; // ?

// Destructuring
const hamName = ham.name;
const hamAge = ham.age;
const hamHomeTown = ham.home_town;

const { name, age, home_town } = ham;
name;
age;
home_town;

const listOfSomething = ["foo", "bar", "baz", "abc", "xyz"];
const [first, second, third, ...other] = listOfSomething;
first;
second;
third;
other;
