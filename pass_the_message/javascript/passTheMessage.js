//JQUERY:

$(document).ready(function () {
  $("#enterMsg").hide();
  $("#enterMsg").fadeIn();
});


//TRIGGER "SEND MESSAGE" BUTTON @ ENTER BUTTON KEYPRESS
var input = document.getElementById("messageInputField");
console.log(input);

/* trigger "enterButton" function when user presses AND releases the enter key @ keyboard in input
field*/
input.addEventListener("keyup", enterButton)

//EVENT LISTENER FUNCTION: ENTER BUTTON KEYPRESS TRIGGERS "SEND MESSAGE" BUTTON:
// ENTER BUTTON UNICODE IS 13
function enterButton() {
  if (event.keyCode == 13) {
    document.getElementById("submitButton").click();
  };
};

//EVENT LISTENER: CLICK SUBMIT BUTTON
document.getElementById("submitButton").addEventListener("click", messageHandler)

// messageHandler function
function messageHandler() {
  var userInput = document.getElementById("messageInputField").value;

  document.getElementById("Msg").textContent = userInput;

  //clear message from input field
  document.getElementById("messageInputField").value = "";
};

// add maxlength attribute to text input messageInputField
input.setAttribute("maxlength", "140");
input.setAttribute("placeholder", "Enter Message: 140 char max");
