<?php 
$DBhost = "174.136.25.34";
 $DBuser = "taxisnic_gruponach";
 $DBpass = "Kwqo=01,SfvS";
 $DBname = "taxisnic_gruponach";
 
 try{
  
  $DBcon = new PDO("mysql:host=$DBhost;dbname=$DBname",$DBuser,$DBpass);
  $DBcon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
 }catch(PDOException $ex){
  
  die($ex->getMessage());
 }

?>
