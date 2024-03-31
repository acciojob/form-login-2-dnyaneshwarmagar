//your JS code here. If required.


let submitBtn = document.getElementById("submit");
function submitFormAndAlert(e){
	e.preventDefault;
	let firstName = document.getElementById("first_name").value;
let lastName = document.getElementById("last_name").value;
let phneNumber = document.getElementById("phone_number").value;
let emailId = document.getElementById("email_id").value;
	let message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phneNumber} Email ID: ${emailId}`
	alert(message)
}

submitBtn.addEventListener("click",submitFormAndAlert)