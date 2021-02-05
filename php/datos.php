<?php 
require_once 'dbconfig.php';
 
 $query = "SELECT  a.id_articulo, a.titulo_articulo ,a.imagen_articulo, a.texto_articulo, a.tags_articulo,
 a2.id_autor, a2.nombre_autor, a2.imagen_autor, a2.titulo_autor, a2.empresa_autor, r.id_reaccion, r.likes, r.comments, r.views
 FROM
 ARTICULOS a, AUTORES a2, REACCIONES r
 WHERE a.id_autor = a2.id_autor AND a.id_reaccion =r.id_reaccion 
 ORDER BY a.id_articulo desc limit 4";
/* 
$query = "SELECT * FROM ARTICULOS"; */
 
 $stmt = $DBcon->prepare($query);
 $stmt->execute();
 
 $userData = array();
 
 while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
  
 $userData['blog'][][articulo]= $row;
 }
 
 echo json_encode($userData,JSON_UNESCAPED_UNICODE);

 ?>