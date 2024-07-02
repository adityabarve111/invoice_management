<?php
session_start();
 // Connect to the database
include_once "../../model/php/connection.php";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $shopId = (isset($_POST['shopId']) ? $_POST['shopId'] : '');
    // $shopId = $_POST['shopId'];
    $password = $_POST['password'];

    // Fetch the shop owner data based on SHOPID
    $sql = "SELECT * FROM shop_owner_credentials WHERE SHOPID = '$shopId'";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
        // Verify the password
        if (password_verify($password, $row['PASSWORD'])) {
            // Password is correct, set session variables
            $_SESSION['login'] = true;
            $_SESSION['shopId'] = $shopId;
            header('Location: ../../view/html/index.html'); // Redirect to a dashboard page or any other page
            exit();
        } else {
            echo "<script> alert('Invalid password.');
            window.location='../../view/html/login.html';</script>";
        }
    } else {
        echo "<script> alert('No account found with that Shop ID.');
        window.location='../../view/html/login.html';</script>";
    }

    $stmt->close();
    $conn->close();
} else {
    header('Location: shop_owner_login.html');
    exit();
}
?>
