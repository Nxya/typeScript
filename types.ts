// Boolean
let paidAccount : boolean = true;

// Number
let age : number = 19;
var taxRate : number = 7.5;

// String
var fullName : string = "Alex Brown";

// Array
var ages : number[] = [23, 18, 9];

// Tuple
let player : [number, string];
player = [3, "Billy"];

// Enum
enum Stage {Approved, Pending, Rejected};
let job : Stage = Stage.Pending;

// Any
var apiData : any[] = [123, "Bob", false];

// Void
function printOut(msg: string) : void {
  console.log(msg);
}