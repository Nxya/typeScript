// Function expression
var fullName : (first : any, last : any) => string;

fullName = function(first : string, last : string) {
  return first + " " + last;
}

console.log(fullName('Alex', 'Brown'));

// Immediately invoked version
(function(first : string, last : string) {
  console.log(first + " " + last);  
})('Nxya', 'Dorthal');