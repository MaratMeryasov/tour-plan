<?php
require 'phpmailer/PHPMailer.php';require 'phpmailer/SMTP.php';require 'phpmailer/Exception.php';$mail=$_POST['mail'];$name=$_POST['name'];$phone=$_POST['phone'];$message=$_POST['message'];$title="Новое обращение Best Tour Plan";$body="
<h2>New message</h2>
<b>Name:</b>$name<br>
<b>Phone Number:</b>$phone<br><br>
<b>Message:</b><br>$message<br><br>
<br>E-Mail:</br>$mail
";$mail=new PHPMailer\PHPMailer\PHPMailer();try{$mail->isSMTP();$mail->CharSet="UTF-8";$mail->SMTPAuth=true;$mail->SMTPDebug=2;$mail->Debugoutput=function($str,$level){$GLOBALS['status'][]=$str;};$mail->Host='smtp.gmail.com';$mail->Username='meryasovmarat@gmail.com';$mail->Password='Rombica2200@';$mail->SMTPSecure='ssl';$mail->Port=465;$mail->setFrom('meryasovmarat@gmail.com','Marat');$mail->addAddress('sss8822@icloud.com');$mail->isHTML(true);$mail->Subject=$title;$mail->Body=$body;if($mail->send()){$result="success";}else {$result="error";}}catch(Exception$e){$result="error";$status="Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";}header('Location: thankyou.html');