let questions = [
    {
      id: 1,
      question: "Where did cricket originated",
      answer: "England",
      options: [
        "England",
        "France",
        "India",
      "Spain"      
    ]
    },
    {
      id: 2,
      question: "Who is WG Grace",
      answer: "A famous Victorian player",
      options: [
        "a notoriously mean umpire",
        "The man who invented cricket",
        "A famous Victorian player",
        "a giant cricket who is cricket's mascot"
      ]
    },
    {
      id: 3,
      question: "What does LBW stands for",
      answer: "Leg Before Wicket",
      options: [
        "Long Ball wide",
        "Leg beyond wicket",
        "Leg Before wicket",
        "LOl' bout to win"
      ]
    },
    {
      id: 4,
      question: "Who did England beat in the final of the 2019 Cricket World Cup?",
      answer: "New zealand",
      options: [
        "India",
        "New zealand",
        "Australia",
        "Pakistan"
      ]
    },
    {
      id: 5,
      question: "Which of these places is cricket NOT a popular sport?",
      answer: "Myanmar",
      options: [
        "West Indies",
        "India",
        "Pakistan",
        "Myanmar"
      ]
    },
    {
      id: 6,
      question: "Which country won 2015 world cup?",
      answer: "Australia",
      options: [
        "England",
        "India",
        "Australia",
        "West indies"
      ]
    },
    {
      id: 7,
      question: "Who is the captain of Pakistan Cricket team",
      answer: "Babar Azam",
      options: [
        "Babar Azam",
        "Shahid Afridi",
        "Sarfaraz Ahmed",
        "Azhar Ali"
      ]
    },
    {
      id: 8,
      question: "What do you call a referee in cricket",
      answer: "umpire",
      options: [
        "vampire",
        "cricket umpire referee",
        "cricket Referee",
        "umpire"
      ]
    },
    {
      id: 9,
      question: "Pakistan won th ICC world cup in:",
      answer: "1992",
      options: [
        "1996",
        "1992",
        "2011",
        "2015"
      ]
    },
    {
      id: 10,
      question: "most successful T20i captain of Pakistan?",
      answer: "Sarfaraz Ahmed",
      options: [
        "Shahid Afridi",
        "Sarfaraz Ahmed",
        "Shoaib Malik",
        "all of above"
      ]
    },
  ];
  
  let question_count = 0;
  let score = 0;
  
  window.onload = function() {
    show(question_count);
  };
  
  function next() {
    if (question_count == questions.length - 1) { //move to result page
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    if (user_answer == questions[question_count].answer) { // checking answer
      score += 10;
      sessionStorage.setItem("score", score);
    }
    console.log(score);

    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
     <li class="option">${first}</li>
     <li class="option">${second}</li>
     <li class="option">${third}</li>
     <li class="option">${fourth}</li>
     </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  