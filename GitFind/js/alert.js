class Alert{

    //  Generate an alert based on an error type argument
    static show(errorType){

        let message;
        let className;

        // Error Types
        if(errorType === "no-user-found"){
            message = "No user found. Please try again";
            className = "alert-warning";
        }
        else if(errorType === "no-input"){
            message = "Please enter a valid Github username";
            className = "alert-warning";
        }
        else if(errorType === "offline"){
            message = "Looks like you're offline. Please turn on your internet connection."
            className = "alert-danger";
        }
        else if(errorType === "catch-error"){
            message = "An unforseen error occured. Please try again.";
            className = "alert-danger";
        }

        // Create and display alert
        let element = document.querySelector("#error-box");
        let errorBox = document.createElement("div");
        errorBox.classList.add("alert", className);
        errorBox.appendChild(document.createTextNode(message));
        element.appendChild(errorBox);

        // Scroll to top of page to ensure the alert is seen.
        scrollTo(0, 0);

        // Alert timer to remove alert after 3 seconds
        window.setTimeout(() => {
            errorBox.remove();
        }, 3000);

    }
}
