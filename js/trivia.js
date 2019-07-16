// Global variables
   var correct = 0
   var wrong = 0
   var notAnswered = 0
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
              timerClock(5)
              showQuestions();
             
   })
// show questions
   function showQuestions() {
       
       for ( var t = 0 ; t < 5 ; t++) {
           var objPos = triviaQ[t] ;
           $(".questionBox").append('<span class="questions">' + objPos.question + '</span><br>')
           
           for( var q = 0; q < objPos.options.length; q++ ) {
               $(".questionBox").append('<div class=""><button id="answers">' + objPos.options[q] +'</button></div><br>')
           }
           
       }   
       
       
   }

   function timerClock(sec) {
      
      var tickTock = setInterval(function(){
          sec = sec -1
          $("#timer").html('<h2>' + sec +'</h2><br>')
           
          if (sec <= 0) {
              $('.questionBox').fadeOut(400);
              correct = 0;
              wrong = 0;
              notAnswered = 0 ;

              clearInterval(tickTock)
              return
              
          }
      }, 1000)
   }


