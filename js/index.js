
     var questionInput = document.getElementById("questionInput");
      var correctInput = document.getElementById("correctInput");
      var wrongOneInput = document.getElementById("wrongOneInput");
      var wrongTwoInput = document.getElementById("wrongTwoInput");
      var wrongThreeInput = document.getElementById("wrongThreeInput");
    
      
      var handlers = {
        //This runs when you click add question button
        addQuestion: function () {
         //pass the values of the inputs into the addQuestion method in the quiz object which will add them to question array
           var Quest = new Question(
            questionInput.value,
            correctInput.value,
            wrongOneInput.value,
            wrongTwoInput.value,
            wrongThreeInput.value
          );
          
           let storedQuiz = JSON.parse(localStorage.getItem("quizArray"));
           storedQuiz[storedQuiz.length -1].questionArray.push(Quest);
          localStorage.setItem("quizArray",JSON.stringify(storedQuiz));
          //clear the inputs
          questionInput.value = "";
          correctInput.value = "";
          wrongOneInput.value = "";
          wrongTwoInput.value = "";
          wrongThreeInput.value = "";
        },
    
        addQuiz: function(){
    
            var Quest = new Question(
                questionInput.value,
                correctInput.value,
                wrongOneInput.value,
                wrongTwoInput.value,
                wrongThreeInput.value
              );
            
              var qArray =  [Quest];
          
            var newQuiz = new Quiz();
            newQuiz.questionArray.push(Quest);
            var newQuiz = new Quiz(qArray)
            let quizArray = [newQuiz];
            
            /*var quizArray = [newQuiz, quizA, quizB];
            localStorage.setItem("quizArray", JSON.stringify(quizArray));
            localStorage.setItem("quizArray", JSON.stringify(quizArray));*/
    
            let storedQuiz = JSON.parse(localStorage.getItem("quizArray"));
            storedQuiz.push(newQuiz)
            localStorage.setItem("quizArray", JSON.stringify(storedQuiz));
    
            questionInput.value = "";
            correctInput.value = "";
            wrongOneInput.value = "";
            wrongTwoInput.value = "";
            wrongThreeInput.value = "";
        },
      };


  
  

  
 