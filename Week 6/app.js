document.addEventListener("DOMContentLoaded", function() {
    // Event listener for form submission
    const form = document.getElementById("contactForm");
    const submitButton = document.getElementById("submitButton");
    const errorMessages = document.getElementById("errorMessages");
    const showMessageButton = document.getElementById("showMessageButton");
    const secretMessage = document.getElementById("secretMessage");

    // Show or hide the secret message when the button is clicked
    showMessageButton.addEventListener("click", function() {
        if (secretMessage.style.display === "none") {
            secretMessage.style.display = "block";
            showMessageButton.textContent = "Hide the Secret Message";
        } else {
            secretMessage.style.display = "none";
            showMessageButton.textContent = "Show a Secret Message";
        }
    });

    // Form validation before submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission until validation is done

        errorMessages.textContent = ""; // Clear previous error messages

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        let valid = true;

        // Validate full name
        if (fullName === "") {
            errorMessages.textContent += "Full Name is required.\n";
            valid = false;
        }

        // Validate email
        if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
            errorMessages.textContent += "A valid email is required.\n";
            valid = false;
        }

        // Validate message
        if (message === "") {
            errorMessages.textContent += "Message is required.\n";
            valid = false;
        }

        // If form is valid, allow submission
        if (valid) {
            alert("Form submitted successfully!");
            form.reset(); // Clear form fields
        }
    });
});
