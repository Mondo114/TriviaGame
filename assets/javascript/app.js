
var count = 180;

var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

$(document).ready(function(){
	$("#mid-game-container").hide();
	$("#end-container").hide();

	window.scrollTo(0, 500);

	$("#start-button").on("click", function(){

		$("#start-container").hide();

		$("#mid-game-container").show();

		startCountdown();
		return;
	});

	function countdown(){

		count--;

    	$('#timer-number').html(count + " Seconds");

			$("#done-button").on("click", function(){

			count = 0;
			return;

			});

			if(count == -1){

				timeUp();

				$("#mid-game-container").hide();
			}
    }
    
	function startCountdown(){
		setInterval(countdown, 1000);
	}

	function timeUp(){

		// Checked values of Radio Buttons
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();

		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Wolverine"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Stepbrother"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "Adamantium Claws"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Gambit"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "Juggernaut"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "Sunfire"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q7 == undefined){
			unansweredCount++;
		}
		else if(Q7 == "Monolith X"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q8 == undefined){
			unansweredCount++;
		}
		else if(Q8 == "Battalion of Mutant Extremists"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q9 == undefined){
			unansweredCount++;
		}
		else if(Q9 == "Psylocke's Awakening"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q10 == undefined){
			unansweredCount++;
		}
		else if(Q10 == "House of M"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		$('#correct-answers').html(correctCount);
		$('#wrong-answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);

		$("#end-container").show();

        window.scrollTo(0, 700);
        
        if(correctCount == 10) {
            $("#done").append("You are a master of X-Men Trivia!");
        }

        else if(correctCount > 6 && correctCount < 10) {
            $("#done").append("You have a decent understanding of the X-Men universe");
        }

        else if(correctCount > 3 && correctCount < 7) {
            $("#done").append("You have an ok understanding of the X-Men universe");
        }

        else if(correctCount >= 0 && correctCount < 4) {
            $("#done").append("Sorry, you have a poor understanding of the X-Men universe");
        }
    }
});


