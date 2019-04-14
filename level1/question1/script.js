//Use RegEx to validate form
///Not complete
// missing email validation at least.
//Unsure if all of this would be in one function or something like this?




function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
   } 	
}
function validatelastName() {
  var x = document.forms["myForm"]["last_name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
   } 	
}

function validatePhone(){
    	y = document.getElementById("numb").value;
		var phoneNo =/^([0-9]{8})$/;
  			if (y === phoneNo){
 				return(true);
 			}else {
 				alert("Number must be 8 digits");
 			
 			}
 		}
 		
function validateEmail(){
	e = document.getElementById("numb").value;
	var emailAdr =/^$/;
  		if (e === emailAdr){
 			return(true);
 		}else {
 			alert("Enter a valid email address.");	
 		}
 	}
 	
 	
