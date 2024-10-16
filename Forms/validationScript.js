    // JavaScript code for form validation

    const inputField = document.getElementById('inputField');
    const form = document.getElementById('myForm');

    // Add event listener to submit an event
    form.addEventListener('submit', function(event) {
    // Prevent form from submitting
    event.preventDefault();
    
    // Retrieve the input field value
    const inputValue = inputField.value;

    // Regular expression patter for alphanumeric input
    const alphanumericPattern = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (alphanumericPattern.test(inputValue)) {
      // Valid input: display confirmation and submit the form
      alert('Form submitted successfully!');
    } else {
      // Invalid input: display error message
      alert('Error: Input must be alphanumeric (letters and numbers only).');
    }
    });
