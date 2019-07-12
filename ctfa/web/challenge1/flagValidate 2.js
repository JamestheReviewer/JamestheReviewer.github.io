


function myFlag (){
	
	var flag = $('#flag').val();
	
	var flagHash = "c7af963914dbdcb3cbddb67cb7c0e0f4";
		
	var flagCheck = hashCheck(flag, flagHash);
	
	
	if (flagCheck == true) {
		
		
		$("#flagFeedback").html("Good job! <a href='../../index.htm'>Click here for the explaination.</a>");
		
		$("#submit").css("transition-duration", "1.0s");
		
		$("body .form-control:nth-child(4)").css("transition-duration", "1.0s");
		
		$("#flagFeedback").css("color", "#28a745");
		
		$("#submit").css("background-color", "#28a745");
		
		$(".form-control").last().css("border-color", "#28a745");
		
		
		
		$("#flagFeedback").html("Good job! <a href='answer.htm'>Click here for the explaination.</a>");
		
		$("#flagFeedback").nth-child().css("color", "#28a745");		
				
		$("#submit").last().css("background-color", "#28a745");
		
		$(".form-control").last().css("border-color", "#28a745");
		
		
	}
	else {
		
		$("#flagFeedback").html("");
		
		
		$("#flagFeedback").html("Sorry, try again.");
		
		$("#flagFeedback").css("color", "#dc3545");
		
		
				
		$("#submit").css("transition-duration", "1.0s");
		
		
		
		$("#submit").delay("slow").css("background-color", "#dc3545");
		
		
		
		$(".form-control").last().css("transition-duration", "1.0s");
		
		$(".form-control").last().css("border-color", "#dc3545");
		
		
	}

	
	
	
	
}