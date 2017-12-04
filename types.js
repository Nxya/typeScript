// Boolean
var paidAccount = true;
// Number
var age = 19;
var taxRate = 7.5;
// String
var fullName = "Alex Brown";
// Array
var ages = [23, 18, 9];
// Tuple
var player;
player = [3, "Billy"];
// Enum
var Stage;
(function (Stage) {
    Stage[Stage["Approved"] = 0] = "Approved";
    Stage[Stage["Pending"] = 1] = "Pending";
    Stage[Stage["Rejected"] = 2] = "Rejected";
})(Stage || (Stage = {}));
;
var job = Stage.Pending;
// Any
var apiData = [123, "Bob", false];
// Void
function printOut(msg) {
    console.log(msg);
}
//# sourceMappingURL=types.js.map