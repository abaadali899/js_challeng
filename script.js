/* Your  Age in Days */
/* ******************* Challenge 01 Starts****************** */
function ageInDays() {
  var birthYear = prompt("Enter the Year you born");
  var ageInDays = (2021 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "Hii dude! You are " + ageInDays + " days old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}
/* *******************Challenge 01 Ends****************** */

/* ********************  Chalenge 02 starts ********************* */
function generatPic() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-pic-gen");
  image.src = "https://picsum.photos/200/200";
  div.appendChild(image);
}
/* ********************  Chalenge 02 Ends ********************* */

/* ********************  Chalenge 03 starts ********************* */
/* 
function rpsGame(yourChoice) {
  console.log(yourChoice);
} */
