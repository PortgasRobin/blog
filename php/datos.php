<?php 
require_once 'dbconfig.php';
 
 $query = "SELECT  a.id_articulo, a.titulo_articulo ,a.imagen_articulo, a.texto_articulo, a.tags_articulo,
 a2.id_autor, a2.nombre_autor, a2.imagen_autor, a2.titulo_autor, a2.empresa_autor, r.id_reaccion, r.likes, r.comments, r.views
 FROM
 ARTICULOS a, AUTORES a2, REACCIONES r
 WHERE a.id_autor = a2.id_autor AND a.id_reaccion =r.id_reaccion 
 ORDER BY a.id_articulo limit 3";
/* 
$query = "SELECT * FROM ARTICULOS"; */
 
 $stmt = $DBcon->prepare($query);
 $stmt->execute();
 
 $userData = array();
 
 while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
  
 $userData['blog'][][articulo]= $row;
 }
 
 //echo ($userData);
 //var_dump($userData);
 //echo ($row);
 //$xml = simplexml_load_string($userData);

  /* print_r('<pre>');
     print_r($xml);
     print_r('</pre>');
     echo "<br>";

     $json=json_encode($xml, true);
     $objeto = json_decode($json, true);
     $items = $objeto['SOLICITUD'];
    
     $items2 = $objeto['PAQUETES'];
     echo json_encode($items);
     echo json_encode($items2);

     $array_data = json_decode(json_encode(simplexml_load_string($userData)), true);

     print_r('<pre>');
     print_r($array_data);
     print_r('</pre>'); */

  


 
 // echo $items[2]['CLAVE']; // BW
 // echo $items[2]['NOMBRE']; //BMW
 // echo $items[2]['VALOR']; // VACIO


 echo json_encode($userData);

 ?>