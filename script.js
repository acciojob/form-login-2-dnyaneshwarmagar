//your JS code here. If required.

function displayFormData(e) {
    // Get form data
	e.preventDefault()
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;

    // Construct alert message
    const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`;

    // Display alert message
    alert(alertMessage);

    // Prevent form submission
    // return false;
}