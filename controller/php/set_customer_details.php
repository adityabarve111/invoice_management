<?php
// set_customer_details.php
session_start();
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Check if required parameters are set in the GET request
    if (isset($_GET['customerId']) && isset($_GET['GSTNo']) && isset($_GET['address']) && isset($_GET['phone']) && isset($_GET['name'])) {
        $customerId = $_GET['customerId'];
        $GSTNo = $_GET['GSTNo'];
        $address = $_GET['address'];
        $phone = $_GET['phone'];
        $name = $_GET['name'];

        // Debugging: log received parameters
        error_log('Received customerId: ' . $customerId);
        error_log('Received GSTNo: ' . $GSTNo);
        error_log('Received address: ' . $address);
        error_log('Received phone: ' . $phone);
        error_log('Received name: ' . $name);

        // Example: update customer details in session or database
        // Success response
        $response = [
            'success' => true,
            'message' => 'Customer details updated successfully'
        ];
    } else {
        // Debugging: log missing details
        error_log('Required customer details not provided');
        
        $response = [
            'success' => false,
            'error' => 'Required customer details not provided'
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
