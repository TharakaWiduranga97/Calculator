let inputElementobj = document.getElementById("inputEl");

let numberOne;
let numberTwo;

inputElementobj.addEventListener("keyup", (event) => {
  if (event.key == "Enter" || event.keyCode == 13) {
    document.getElementById("ans").textContent = 0;
    document.getElementById("op").textContent = "..";
    let tempVal = inputElementobj.value;
    if (!isNaN(tempVal)) {
      if (numberOne == undefined) {
        numberOne = parseInt(tempVal);
        document.getElementById("num1").textContent = numberOne;
        inputElementobj.value = 0;
      } else if (numberTwo == undefined) {
        numberTwo = parseInt(tempVal);
        document.getElementById("num2").textContent = numberTwo;
        inputElementobj.value = 0;
      } else {
        alert("insert again");
        numberOne = undefined;
        numberTwo = undefined;
        document.getElementById("num1").textContent = "?";
        document.getElementById("num2").textContent = "?";
      }
    }
  }
});

const clear = (op) => {
  console.log(op);
  numberOne = undefined;
  numberTwo = undefined;
  document.getElementById("num1").textContent = "?";
  document.getElementById("num2").textContent = "?";
};

const execute = (op) => {
  if (!numberOne && !numberTwo) {
    alert("please insert number");
    return;
  }

  switch (op) {
    case "+": operate(numberOne + numberTwo, op); break;
    case "-": operate(numberOne - numberTwo, op); break;
    case "*": operate(numberOne * numberTwo, op); break;
    case "/": operate(numberOne / numberTwo, op); break;
    case "%": operate(numberOne % numberTwo, op);
  }
};

const operate = (result, op) => {
  document.getElementById("ans").textContent = result;
  document.getElementById("op").textContent = op;
};
