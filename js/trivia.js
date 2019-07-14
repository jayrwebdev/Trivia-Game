// Objects Array
var triviaQ = [{
    question: 'Who is the captain of the Straw Hat Pirates?',
    options: ['Franky', 'Luffy', 'Robin', 'Nami', 'Jimbei'],
    name: 'Captain',
    answers: 'Luffy',
    divclass: '.strawCaptain',

},
{
    question: 'What is the name of Luffy Devil Fruit?',
    options: ['Flare-Flare', 'Glint-Glint', 'Hie-Hie', 'Gum-Gum', 'Hito-Hito'],
    name: 'luffyFruit',
    answers: 'Gum-Gum',
    divclass: 'devilFruit',
},
{
    question: 'Who is Vice-Captain of the Straw Hat Pirates?',
    options: ['Usopp', 'Sanji', 'Zoro', 'Chopper', 'Brook'],
    name: 'coCaptain',
    answers: 'Zoro',
    divclass: 'viceCaptain',
},
{
    question: 'Who did the Straw Hats rescue at Enies Lobby?',
    options: ['Robin', 'Franky', 'Ussop', 'Zoro', 'Sanji'],
    name: 'strawRescue',
    answers: 'Robin',
    divclass: 'eniesLobby',
},
{
    question: 'What is the name of the Straw Hats Pirate Ship?',
    options: ['Going Merry', 'Moby Dick', 'Thousand Sunny', 'Oro Jackson', 'Red Force'],
    name: 'strawShip',
    answers: 'Thousand Sunny',
    divclass: "pirateShip",
}
]
var labels = ['First','Second','Third','Fourth','Fifth']
// Post questions & options and answers to html

   $("#startButon").on('click', function () {
          $(".start").hide();
   })
// show questions
   function showQuestions() {
       for ( var t = 0 ; t < triviaQ.length; t++) {
           
       }   
        // loops through answers for each  button
       for (var i = 0; i <= 5; i++) {
            
       }
       
   }
   function timer() {

   }


