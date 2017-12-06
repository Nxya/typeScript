// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Alex', 'Brown'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Nxya', 'Dorthal');
//# sourceMappingURL=immediately_invoked_arguments.js.map