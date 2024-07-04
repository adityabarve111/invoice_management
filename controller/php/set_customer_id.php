<?php
// set_customer_id.php
session_start();
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Check if customerId is set in the GET request
    if (isset($_GET['customerId'])) {
        $customerId = $_GET['customerId'];

        // Debugging: log received customerId
        error_log('Received customerId: ' . $customerId);

        // Set customer ID in session
        $_SESSION['customerId'] = $customerId;

        // Success response
        $response = [
            'success' => true,
            'message' => 'Customer ID set successfully'
        ];
    } else {
        // Debugging: log missing customerId
        error_log('Customer ID not provided');
        
        $response = [
            'success' => false,
            'error' => 'Customer ID not provided'
        ];
    }
} else {
    // Handle other HTTP methods
    $response = [
        'success' => false,
        'error' => 'Method not allowed'
    ];
}

echo json_encode($response);
exit;
?>
