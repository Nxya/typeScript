function profile(user) {
    return "Welcome, " + user.firstName + " " + user.lastName + ". Your email is " + user.email;
}
var realUser = {
    email: 'test@test.com',
    firstName: 'Alex',
    lastName: 'Brown'
};
console.log(profile(realUser));
//# sourceMappingURL=interfaces.js.map