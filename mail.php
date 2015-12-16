<?php

if(!mail($emaildestinatario, $assunto, $mensagemHTML, $headers ,"-r".$emailsender)){ // Se for Postfix
    $headers .= "Return-Path: " . $emailsender . $quebra_linha; // Se "não for Postfix"
    mail($emaildestinatario, $assunto, $mensagemHTML, $headers );
}

$quebra_linha = "\n";
$emailsender = "contato@institutoalpha.com.br";
$emaildestinatario = "contato@institutoalpha.com.br";
$assunto = "Alpha Group - Enviado pelo Site";

$name = $_POST['name'];
$e_mail = $_POST['email'];
$msg = $_POST['message'];

//montando email
$mensagemHTML = '<h3><strong>E-mail enviado pelo site:</strong></h3>
<p>Nome: '.$name.'</p>
<p>E-mail: '.$e_mail.'</p>
<p>Mensagem: '.$msg.'</p>';

echo $name, $e_mail, $msg;

$headers  = "MIME-Version: 1.1".$quebra_linha;
$headers .= "Content-type: text/html; charset=utf-8".$quebra_linha;
$headers .= "From: ".$emailsender.$quebra_linha;
$headers .= "Return-Path: ".$emailsender.$quebra_linha;
$headers .= "Replay-To: ".$emailsender.$quebra_linha;

mail($emaildestinatario, $assunto, $mensagemHTML, $headers, "-r".$emailsender);

print("Mensagem enviada com sucesso!")

?>