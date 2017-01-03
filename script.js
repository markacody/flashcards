//initialize firebase
  var config = {
    apiKey: "AIzaSyBvMiURNPV1P5fk4NNs4DXjGlYGd55nru4",
    authDomain: "flash-cards-270ac.firebaseapp.com",
    databaseURL: "https://flash-cards-270ac.firebaseio.com",
    storageBucket: "flash-cards-270ac.appspot.com",
    messagingSenderId: "193483804810"
  };
  firebase.initializeApp(config);
</script>

// Create a variable to reference the database
var database = firebase.database();

// Declare flashcard variables
var cardFront = '', 
    cardBack = '', 
    cardType = '';

//create class for the parent flashcard object
class FlashCard {
    constructor (question, answer){
        this.question = question;
        this.answer = answer;
    }
}
//create subclass for the basic card
class BasicFlashcard extends FlashCard {
	constructor(){
        super(question, answer)
    }
};
//create subclass for the clozecards
class ClozeFlashcard extends FlashCard {
	constructor(){
        super(question, answer)
    }
};
//create and save new instance using event listener.
$("#submitCard").on("click", function() {
    //store the inputs in memory
    cardType = $('#card-type').val();
    cardFront = $('#card-front').val().trim();
	cardBack = $('#card-back').val().trim());
    //save the new card in Firebase
    database.ref().set({
			cardFront: cardFront,
			cardBack: cardBack,
            cardType: cardType
		});
    
}
//backend must be able to:
//1. create new flashcard
//2. save new flashcard in both formats.