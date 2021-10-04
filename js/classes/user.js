class User {
    constructor(username, password) {
      this.Username = username;
      this.Password = password;
    }
  }
  
  window.onload = () => {
    let user1 = new User("Admin", "password");
    let user = new User("test", "123");
    localStorage.setItem("User", JSON.stringify(user));
  
    let myBtn = document.querySelector("#sub-button");
    myBtn.addEventListener("click", () => {
      let username = document.querySelector(
        "#id01 > div:nth-child(1) > input.input-username"
      ).value;
      let password = document.querySelector(
        "#id01 > div:nth-child(1) > input.input-password"
      ).value;
  
      var entriesJSON = localStorage.getItem("User");
      if (!entriesJSON) {
        alert("Nothing stored!");
        event.preventDefault();
        return;
      }
  
      var allEntries = JSON.parse(entriesJSON);
      //for (var i = 0; i < allEntries.length; i++) {
      //var entry = allEntries[i];
      var storedUsername = allEntries.Username;
      var storedPassword = allEntries.Password;
  
      if (username == storedUsername && password == storedPassword) {
        window.location.href = "http://127.0.0.1:5503/index.html";
        alert("Successfully logged in!");
        event.preventDefault();
        //return;
      } else alert("Invalid Username or Password! Please try again.");
      event.preventDefault();
  
      /*  let user = JSON.parse(localStorage.getItem('User'));
           alert(user.Username + " " + user.Password); */
    });
  };
  