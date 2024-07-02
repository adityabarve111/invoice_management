  // Function to check if user is logged in
  function checkLoggedIn() {
    // Perform an AJAX request to a PHP script to check session status
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../../model/php/check_session.php', true); // Adjust path as needed
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.loggedIn) {
                    // User is logged in, continue loading the page
                    console.log("User is logged in.");
                } else {
                    // User is not logged in, redirect to login.html or handle as needed
                    console.log("User is not logged in. Redirecting...");
                    alert("Please login to access this page.");
                    window.location.href = "../../view/html/login.html";
                }
            } else {
                // Handle AJAX error
                console.error('Error checking session status:', xhr.status);
            }
        }
    };
    xhr.send();
}

// Check if user is logged in when the page loads
document.addEventListener('DOMContentLoaded', function() {
    checkLoggedIn();
});