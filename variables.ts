var fullName : string = "Alex Brown";
let paidAccount : boolean = true;
const versionNumber : number = 1.3;

console.log(fullName);
console.log(paidAccount);
console.log(versionNumber);

fullName = "Nxya Dorthal";
paidAccount = false;

console.log(fullName);
console.log(paidAccount);

function printName(f, l) {
  var greeting : string = "Hi there, ";
  console.log(greeting + f + " " + l);

  var greeting : string = "Hey there, ";
  console.log(greeting + f + " " + l);
}

printName("Alex", "Brown");