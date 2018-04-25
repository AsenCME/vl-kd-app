<?php
header('Content-type: text/plain; charset=utf-8');
header('Access-Control-Allow-Origin: *');
if(isset($_POST['submit']))
{
    $from = $_GET['sender'];
    $subject = $_GET['subject'];
    $body = $_POST['body']
    $to = "asen.connor@abv.bg";
    $mail_from ="From: $sender" ."\r\n" . "Reply-To: $sender" . "\r\n"; 
    $mail_from.="Content-type: text/html; charset = utf-8 \r\n";

    mail($to, $subject, $message, $mail_from);
?>