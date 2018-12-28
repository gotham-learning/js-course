//const greeting = name => "Hi, " + name + "!"
const greeting = name => "Hi, " + name + "!";

function greetingFn(name) {
  return "Hi, " + name + "!";
}

function greetingFnTemplate(name) {
  return `Hi, ${name}!`;
}

greeting("Phung"); //?
greetingFnTemplate("Phung"); //?
