//initialize firebase
  var config = {
    apiKey: "AIzaSyBvMiURNPV1P5fk4NNs4DXjGlYGd55nru4",
    authDomain: "flash-cards-270ac.firebaseapp.com",
    databaseURL: "https://flash-cards-270ac.firebaseio.com",
    storageBucket: "flash-cards-270ac.appspot.com",
    messagingSenderId: "193483804810"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Declare flashcard variables
var cardFront = '', 
    cardBack = '', 
    cardType = '';

//create class for the parent flashcard object
class FlashCard {
    constructor (type, question, answer){
        this.type = type;
        this.question = question;
        this.answer = answer;
    }
    //write card to database
    writeCard(type, question, answer) {
        firebase.database().ref().set({
        cardType: type,
        cardFront: question,
        cardBack: answer
      });
    }
}
//create subclass for the basic card
class BasicFlashcard extends FlashCard {
	constructor(){
        super()
    }
};
//create subclass for the clozecards
class ClozeFlashcard extends FlashCard {
	constructor(){
        super()
    }
};
//create and save new instance using event listener.
/*$("#submitCard").on("click", function() {
    //store the inputs in memory
    cardType = $('#card-type').val();
    cardFront = $('#card-front').val().trim();
	cardBack = $('#card-back').val().trim();
    //save the new card in Firebase
    FlashCard.writeCard(cardType, cardFront, cardBack);
    };
*/                   
var test = new FlashCard('basic', 'What is a type of rock formed by sediment?', 'Sedimentary');
console.log(test);
test.writeCard();