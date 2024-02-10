let result = "";
const generatePass = () => {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").value;
  let length = document.getElementById("length").value;

  let display = document.getElementById("displayPassword");

  // combining the whole inputed values into a string
  let characters = input1.concat(input2, input3);
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log((display.innerHTML = result));
  console.clear();
};
