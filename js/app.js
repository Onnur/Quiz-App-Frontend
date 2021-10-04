window.onload = () => {
    /* var quizs = JSON.parse(localStorage.getItem("newQuiz")) || [];
    let startQuiz = document.querySelector("#startQuiz"); */
    
    var quiz = JSON.parse(localStorage.getItem("quizArray"));
    quiz.forEach( (q, index) => {
        var mydiv = document.querySelector(".info");
        var quizButton = document.createElement("button");
        quizButton.setAttribute("class", "quiz" + index);
        quizButton.textContent = "Play: Quiz"+index
        mydiv.appendChild(quizButton);

        quizButton.addEventListener("click", () => {
            var questionsWrapper = document.querySelector(".questionsWrapper");
            questionsWrapper.innerHTML = "";
            q.questionArray.forEach(function (question, index) {
                var questionDiv = document.createElement("div");
                questionDiv.setAttribute("class", "questionDiv");
                var nextButton = document.createElement("button");
                nextButton.setAttribute("class", "nextButton");
                var questionLi = document.createElement("li");
                var correctLi = document.createElement("li");
                correctLi.setAttribute("class", "correct");
                var wrongOneLi = document.createElement("li");
                wrongOneLi.setAttribute("class", "wrong");
                var wrongTwoLi = document.createElement("li");
                wrongTwoLi.setAttribute("class", "wrong");
                var wrongThreeLi = document.createElement("li");
                wrongThreeLi.setAttribute("class", "wrong");
          
                //add each question div to the question wrapper
                questionsWrapper.appendChild(questionDiv);
          
                questionsWrapper.firstChild.classList.add("is-active");
          
                //add the text to the inputs the values in the questions array
                questionLi.textContent = question.Question;
                correctLi.textContent = question.Correct;
                wrongOneLi.textContent = question.WrongOne; //question.wrongOne;
                wrongTwoLi.textContent = question.WrongTwo; //question.wrongTwo;
                wrongThreeLi.textContent = question.WrongThree; //question.wrongThree;
          
                //If its the last question the button should say finish if not it should say next
                if (index === q.questionArray.length - 1) {
                  nextButton.textContent = "Finish";
                } else {
                  nextButton.textContent = "Next";
                }
          
                //Append elements to div
                questionDiv.appendChild(questionLi);
          
                //put the answers in a random order before apprending them so correct isnt always 1st
                var array = [correctLi, wrongOneLi, wrongTwoLi, wrongThreeLi];
                array.sort(function (a, b) {
                  return 0.5 - Math.random();
                });
                array.forEach(function (item) {
                  questionDiv.appendChild(item);
                });
          
                questionDiv.appendChild(nextButton);
                displayNumberOfQuestions();
                displayAnswersCorrect();
                movingToNextQuestion();
              }, this);



              function displayAnswersCorrect() {
                var questionDiv = document.querySelectorAll(".questionDiv");
                var correctAnswers = 0;
                var answersCorrect = document.querySelector(".answersCorrect");
                answersCorrect.textContent = "Correct answers: " + correctAnswers;
            
                //add click event to each question div if the element clicked has class correct then add 1 to correctAnswers and change the color of element to green.
                //Else change the color of element to red and find the elemtn with correct class and make it green
                for (var i = 0; i < questionDiv.length; i++) {
                  questionDiv[i].onclick = function (event) {
                    event = event || window.event;
                    if (event.target.className === "correct") {
                      correctAnswers++;
                      answersCorrect.textContent = "Correct answers: " + correctAnswers;
                      event.target.style.color = "#2ecc71";
                    } else if (event.target.className === "wrong") {
                      event.target.style.color = "#e74c3c";
                      var itemChildren = event.target.parentNode.children;
                      for (i = 0; i < itemChildren.length; i++) {
                        if (itemChildren[i].classList.contains("correct")) {
                          itemChildren[i].style.color = "#2ecc71";
                        }
                      }
                    }
                    //Remove correct and wrong classes so the same question the score cant go up and colors cant chaneg
                    var itemChildren = event.target.parentNode.children;
                    for (i = 0; i < itemChildren.length; i++) {
                      itemChildren[i].classList.remove("correct");
                      itemChildren[i].classList.remove("wrong");
                    }
                  };
                };
              }
            
              //count objects in array to show how many questions added to screen
              function displayNumberOfQuestions() {
                  
                var numberLi = document.getElementById("NumberQuestionsInQuiz");
                if (q.questionArray.length === 1) {
                  numberLi.textContent =
                    "You currently have " +
                    q.questionArray.length +
                    " question added to your quiz";
                } else {
                  numberLi.textContent =
                    "You currently have " +
                    q.questionArray.length +
                    " questions added to your quiz";
                };
              }



        })
    })
    
   
    function movingToNextQuestion() {
      //find all next buttons and add event lisener to them
      var nextButton = document.querySelectorAll(".nextButton");
      for (i = 0; i < nextButton.length; i++) {
        nextButton[i].addEventListener("click", function (event) {
          //Find the element that was clicked
          var elementClicked = event.target;
          //If it was a next button then remove the is-active class from it parent
          if (elementClicked.className === "nextButton") {
            elementClicked.parentNode.classList.remove("is-active");
            //If there isnt a next sibling then reshow the options to add questions and the info div
            if (elementClicked.parentNode.nextElementSibling === null) {
              var showAdd = document.querySelector(".addQuestions");
              var showInfo = document.querySelector(".info");
              showAdd.style.display = "block";
              showInfo.style.display = "block";
            } else {
              //If there is a next siblng then add the is-active class to it
              elementClicked.parentNode.nextElementSibling.classList.add(
                "is-active"
              );
            }
          }
        });
      }
    }
  
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
        alert("Nothing has been stored!");
        event.preventDefault();
        return;
      }
  
      var allEntries = JSON.parse(entriesJSON);
      /*for (var i = 0; i < allEntries.length; i++) {
    var entry = allEntries[i];*/
      var storedUsername = allEntries.Username;
      var storedPassword = allEntries.Password;
  
      if (username == storedUsername && password == storedPassword) {
        window.location.replace ("index.html") ;
        alert("You have signed in as: " + username + "!");
        event.preventDefault();
        //return;
      } else alert("Invalid username or password. Please try again...");
      event.preventDefault();
  
      /*  let user = JSON.parse(localStorage.getItem('User'));
           alert(user.UserName + " " + user.Password); */
    });
  };
  