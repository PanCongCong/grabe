<?php
//引入发送邮件类
require("smtp.php"); 
//使用163邮箱服务器
$smtpserver = "smtp.126.com";
//163邮箱服务器端口 
$smtpserverport = 25;
//你的163服务器邮箱账号
$smtpusermail = "wubaoqiu@126.com";
//收件人邮箱
$smtpemailto = "wubaoqiu@126.com";
//你的邮箱账号(去掉@163.com)
$smtpuser = "wubaoqiu";//SMTP服务器的用户帐号 
//你的邮箱密码
$smtppass = "lijiatong222"; //SMTP服务器的用户密码 

$Name=$_POST["Name"];
$Email=$_POST["Email"];
$Services=$_POST["Services"];
$Suburb=$_POST["Suburb"];
$Phone=$_POST["Phone"];
$Comment=$_POST["Comment"];
$contentBody="Name:$Name;<br/>Email:$Email;<br/>Services:$Services;<br/>Suburb:$Suburb;<br/>Phone:$Phone;<br/>Comment:$Comment;<br/>";

//邮件主题 
$mailsubject = "User feedback";
//邮件内容 
$mailbody = $contentBody;
//邮件格式（HTML/TXT）,TXT为文本邮件 
$mailtype = "HTML";
//这里面的一个true是表示使用身份验证,否则不使用身份验证. 
$smtp = new smtp($smtpserver,$smtpserverport,true,$smtpuser,$smtppass);
//是否显示发送的调试信息 
$smtp->debug = TRUE;
//发送邮件
$smtp->sendmail($smtpemailto, $smtpusermail, $mailsubject, $mailbody, $mailtype); 
//说明，尽量使用163邮箱，并开启SMTP