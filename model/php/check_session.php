<?php
session_start();

// Check if the user is logged in
if (isset($_SESSION['login']) && $_SESSION['login'] === true) {
    $response = array('loggedIn' => true);
} else {
    $response = array('loggedIn' => false);
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>
