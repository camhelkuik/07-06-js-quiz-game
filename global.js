var question1 = {question: "What is the capitol of Nebraska?", response: "1) Lincoln 2)Wilber 3)Council Bluffs 4)Omaha" ,answer: 4};

var question2 = {question: "What is the name of the UNL football team?", response:" 1)Longhorns 2)Huskers 3)Sabertooth Tigers 4)Wheat", answer: 2};

var question3 = {question: "What was in the building before OCS?", response:" 1)InCommon 2)Donut Stop 3)Kinkos 4)Burger King", answer: 1};

var question4 = {question: "What does Donut Stop sell?", response: " 1)cat posters 2)donuts 3)puzzles 4)smurfs", answer: 2};

var question5 = {question: "What kind of food is served at Bohemian Cafe?", response:" 1)German 2)Mexican 3)Czech 4)Polish", answer: 3};


var array= [question1, question2, question3, question4, question5];
var arrayLength = array.length;
var score = 0;

for(x = 0; x < arrayLength; x++){
  var question= array[x];
  console.log(question.question);
  var answer= prompt(question.response);
  answer= parseInt(answer);
  if (answer === question.answer){
    score++
  }
}

var percent= (score/5) * 100;

alert("You answered " + score + " of 5 questions correctly, good for " + percent + "%!");