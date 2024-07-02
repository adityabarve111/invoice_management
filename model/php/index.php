<?php
session_start();
if (!isset($_SESSION['login']) || $_SESSION['login'] !== true) {
    // User is not logged in, redirect to login.html
    header("Location: ../../view/html/login.html");
    exit();
}
?>