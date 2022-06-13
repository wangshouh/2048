function usernameSubmit() {
    var username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    alert("Welcome " + username + "!");
    if(localStorage.getItem("username") == null) {
        console.log("Updating username");
        document.getElementById("userNameInput").style.display = "none";
    }
  }