<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Set up email parameters
    $to = "your-email@example.com"; // Replace with your email address
    $subject = "New message from your website";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again later.";
    }
} else {
    // If the request method is not POST, redirect to the contact page
    header("Location: contact.html");
    exit;
}
?>
