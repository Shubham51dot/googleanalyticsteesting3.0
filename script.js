function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("submittedMessage").style.display = "none"; // Hide the submitted message
}

function submitForm() {
    closeForm(); // Close the form
    document.getElementById("submittedMessage").style.display = "block"; // Display the submitted message
    return false; // Prevent the form from actually submitting
}
