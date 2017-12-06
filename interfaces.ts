interface User {
  email : string;
  firstName? : string;
  lastName? : string;
}

function profile(user: User) : string {
  return `Welcome, ${user.firstName} ${user.lastName}`;
}

var realUser = {
  email: 'test@test.com',
  firstName: 'Alex',
  lastName: 'Brown'
};

console.log(profile(realUser));