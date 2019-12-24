<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];


// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp1.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'kamsadead@gmail.com';                     // SMTP username
    $mail->Password   = 'gomge1-myxzoz-qYfvyn';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('kamsadead@gmail.com', 'Kamil');
    $mail->addAddress('sadekovk98@mail.ru');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка сайта';
    $mail->Body    = "имя пользователя:${userName}, его телефон:${userPhone}, и его почта:${userEmail}";

    $mail->send();
    header('Location: thanks.html');
} catch (Exception $e) {
    echo "Ошибка отправки. Код ошибки: {$mail->ErrorInfo}";
}



?>