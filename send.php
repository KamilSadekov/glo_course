<?php
$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];
// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'kamsadead@gmail.com';                     // SMTP username
    $mail->Password   = 'gomge1-myxzoz-qYfvyn';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to
    //Recipients
    $mail->setFrom('kamsadead@gmail.com', 'Ремонт квартир');
    $mail->addAddress('kamiltrofe111163@gmail.com', 'Камиль');     // Add a recipient
  
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}. Его почта: ${userEmail}";
    $mail->send();
    header('Location: thanks.html');
} catch (Exception $e) {
    echo "Письмо не отправленно, есть ошибка. Код ошибкт: {$mail->ErrorInfo}";
}