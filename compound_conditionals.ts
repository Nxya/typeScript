let email : string = "test@test.com"
let password : string = "asdfasdf";

// if (password == "asdfasdf" && email == "test@test.com") {
//   console.log("Welcome!");
// }else {
//   console.log("WRONG!")
// }

// if (password == "asdfasdf" || password == "zxcvzxcv") {
//   console.log("Welcome!");
// }else {
//   console.log("WRONG!")
// }

if (!(email == "test@test.com")) {
  console.log("You are authorized!");
}else {
  console.log("WRONG!")
}