// Please use const/let
// don't use var

function test() {
  let man = "ham";

  for (let man = 1; man < 5; man++) {
    man;
  }
  man;
}
test();
function showLet() {
  let x = 1;

  for (let i = 1; i < 5; i++) {
    i;
  }
}
showLet();

function showVar() {
  var x = 1;

  for (var i = 1; i < 5; i++) {
    i;
  }

  i;
}

showVar();
