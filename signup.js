
function dimButton() {
  var createAccountButton = document.querySelector(".btn");
  createAccountButton.style.backgroundColor = "lightgray";
}

function normalizeButton() {
  var createAccountButton = document.querySelector(".btn");
  createAccountButton.style.backgroundColor = "#ea4c89"; 
}

dimButton();

document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault(); 


  var name = document.getElementById("name").value.trim().toLowerCase();
  var username = document.getElementById("username").value.trim().toLowerCase();
  var createAccountButton = document.querySelector(".btn"); 

  if (name === username) {
      document.getElementById("username-taken-msg").style.display = "block";
      createAccountButton.disabled = true; 
      dimButton();
  } else {
      document.getElementById("username-taken-msg").style.display = "none";
      createAccountButton.disabled = false;
      normalizeButton(); 
      window.location.href = "first.html"; 
  }
});


document.getElementById("name").addEventListener("input", function(event) {
  var name = event.target.value.trim().toLowerCase();
  var username = document.getElementById("username").value.trim().toLowerCase();
  var createAccountButton = document.querySelector(".btn"); 


  if (name === username) {
      document.getElementById("username-taken-msg").style.display = "block";
      createAccountButton.disabled = true; 
      dimButton(); 
  } else {
      document.getElementById("username-taken-msg").style.display = "none";
      createAccountButton.disabled = false; 
      normalizeButton(); 
  }
});
