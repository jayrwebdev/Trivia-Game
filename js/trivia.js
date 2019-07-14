var trivia = {
    correct: 0,
    wrong: 0,
    notAnswered: 0,
    currentQuest: 0,
    timer: 15,
    timerOn: false,
    timerId: '',
    // Objects for questions,optiond,and answers.
    questions = {
        q1:'Who is the captain of the Straw Hat Pirates?',
        q2:'What is the name of Luffy Devil Fruit?',
        q3:'Who is Vice-Captain of the Straw Hat Pirates?',
        q4:'Who did the Straw Hats rescue at Enies Lobby?',
        q5:'What is the name of the Straw Hats Pirate Ship',
    },
    options = {
        q1:['Franky','Luffy','Robin','Nami','Jimbei'],
        q2:['Flare-Flare','Glint-Glint','Hie-Hie','Gum-Gum','Hito-Hito'],
        q3:['Usopp','Sanji','Zoro','Chopper','Brook'],
        q4:['Robin','Franky','Ussop','Zoro','Sanji'],
        q5:['Going Merry','Moby Dick','Thousand Sunny','Oro Jackson','Red Force'],
    },
    answers = {
        q1:'Luffy',
        q2:'Gum-Gum',
        q3:'Zoro',
        q4:'Robin',
        q5:'Thousand',
    }

}
    function StartGame(){
        setTimeout(function(){
             
        },15000)
    }