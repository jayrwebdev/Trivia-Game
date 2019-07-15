// Objects Array
var triviaQ = [{
    question: 'Who is the captain of the Straw Hat Pirates?',
    options: ['Franky', 'Luffy', 'Robin', 'Nami', 'Jimbei'],
    name: 'Captain',
    answers: 'Luffy',
    divClass: '.strawCaptain',

},
{
    question: 'What is the name of Luffy Devil Fruit?',
    options: ['Flare-Flare', 'Glint-Glint', 'Hie-Hie', 'Gum-Gum', 'Hito-Hito'],
    name: 'luffyFruit',
    answers: 'Gum-Gum',
    divClass: 'devilFruit',
},
{
    question: 'Who is Vice-Captain of the Straw Hat Pirates?',
    options: ['Usopp', 'Sanji', 'Zoro', 'Chopper', 'Brook'],
    name: 'coCaptain',
    answers: 'Zoro',
    divClass: 'viceCaptain',
},
{
    question: 'Who did the Straw Hats rescue at Enies Lobby?',
    options: ['Robin', 'Franky', 'Ussop', 'Zoro', 'Sanji'],
    name: 'strawRescue',
    answers: 'Robin',
    divClass: 'eniesLobby',
},
{
    question: 'What is the name of the Straw Hats Pirate Ship?',
    options: ['Going Merry', 'Moby Dick', 'Thousand Sunny', 'Oro Jackson', 'Red Force'],
    name: 'strawShip',
    answers: 'Thousand Sunny',
    divClass: "pirateShip",
}
]
var labels = ['First','Second','Third','Fourth','Fifth']
// hide buttons
   $("#startButton").on('click', function () {
         
              $(".start").empty();
              showQuestions();
   })
// show questions
   function showQuestions() {
       
       for ( var t = 0 ; t < 5 ; t++) {
           var objPos = triviaQ[t] ;
           $(".questionBox").append("<span>" + objPos.question + "</span><br>")
           $(".questionbox").append()
          
       }   
        // loops through answers for each  button
       for (var w = 0; w <= 5; w++) {
          
       }
       
   }

   function timer(seconds) {

   }


