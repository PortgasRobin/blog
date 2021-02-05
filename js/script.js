const descargarBlog = new Promise((resolve, reject) => {
  //const api = `datos/arreglo.json`;
  //const api = `datos/datos.json`;
  const api = `php/datos.php`;
  console.log(api);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', api, true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.responseText).blog);
      console.log(resolve);
    } else {
      reject(Error(xhr.statusText));
    }
  }
  xhr.oneror = (error) => reject(error);
  xhr.send()
});

/* document.getElementById('back').addEventListener('click', function() {
  const x = document.getElementById("listado");
  x.style.display = "block";

  const y = document.getElementById("detalle2");
  y.style.display = "none";
  const z = document.getElementById("encabezadoDetalle");
  z.style.display = "none";



}); */

function listarBlog(articulos) {
  console.log('articulos h: ' + articulos);
  let html = '';
  let articulo_home = '';

  
  articulos.forEach(articulo => {
    console.log(articulo);

    html += `
    <div class="card me-3">
          <img src="images/${articulo.articulo.imagen_articulo}" class=" card-img-top" alt="...">
          <div class="card-body" >
            <img src="images/${articulo.articulo.imagen_autor}" class="rounded-circle img-thumbnail top-content center" alt="..." style="max-width: 80px; height: auto;">
            <h5 class="card-title"><button type="button"  id="${articulo.articulo.id_articulo}" class="card-title boton-titulo" onclick="verArticulo(this)">| ${articulo.articulo.titulo_articulo}</button></h5>
            <p class="card-text text-end .fs-6 texto">${articulo.articulo.nombre_autor}</p>
          </div>
          <div class="card-footer">
            <div class="row align-items-center text-muted">
              <div class="col">
                <small class="fas fa-heart"> ${articulo.articulo.likes} </small>
              </div>
              <div class="col">
                <small class="fas fa-comment"> ${articulo.articulo.comments} </small>
              </div>
              <div class="col">
                <small class="fas fa-eye"> ${articulo.articulo.views} </small>
              </div>
            </div>
          </div>
        </div>
    
    `;


    //articulo_home+= `<img src="images/${articulos.b.imagen}" class="card-img-top" alt="...">`;


  });

  
  //articulo_home+= `<img src="images/${articulos.articulo.imagen}" class="card-img-top" alt="...">`;




  const contenedorApp = document.querySelector('#card_article');
  contenedorApp.innerHTML = html;

  /* const contenedorArticuloH = document.querySelector('#articulo_home');
  contenedorArticuloH.innerHTML = articulo_home; */

  /* const y = document.getElementById("detalle2");
  y.style.display = "none";
  const z = document.getElementById("encabezadoDetalle");
  z.style.display = "none"; */

  /* 
  let f=2;
  //verArticuloInicio(f);
  myObj.ver_articulo_detalle(f); */
}

function verArticuloInicio(f) {
  let id = f;
  console.log(id);
  myObj.ver_articulo_detalle(id);
}

function verArticulo(comp) {
  let id = comp.id;
  console.log(id);
  myObj.ver_articulo_detalle(id);
}

function verDetalle(articulos, id) {
  console.log(id);
  console.log('articulos aca: ' + articulos);
  let tituloArticulo = '';
  let imagenArticulo = '';
  let textoArticulo = '';
  let tarjetaAutor = '';
  let tagsArticulo = '';
  

  const articulo = articulos.find(articulo => {
    return articulo.articulo.id_articulo === id;
  });
    tituloArticulo = `<h1>| ${articulo.articulo.titulo_articulo}</h1>`;
    imagenArticulo = `<img src="images/${articulo.articulo.imagen_articulo}" class="card-img-top autor-a" alt="...">`;
    textoArticulo = `<p class="text-wrap articulo">${articulo.articulo.texto_articulo} </p>`;
    tarjetaAutor = `<div class="row g-0">
    <div class="col-md-4" >
      <img src="images/${articulo.articulo.imagen_autor}" class="rounded-circle img-thumbnail" alt="..." >
    </div>
    <div class="col-md-8">
      <div class="card-body mx-auto" >
        <h4 class="card-title mb-0">${articulo.articulo.nombre_autor}</h4>
        <p class="card-text mb-0">${articulo.articulo.titulo_autor}</p>
        <p class="card-text mb-0"><small class="text-muted">${articulo.articulo.empresa_autor}</small></p>
      </div>
    </div>
  </div>`;
 let tagsarrayaDividir = articulo.articulo.tags_articulo;
 let coma=",";
  var arrayDeCadenas = tagsarrayaDividir.split(coma);
  console.log(arrayDeCadenas);
  console.log(arrayDeCadenas[0]); 
  for (var i=0; i < arrayDeCadenas.length; i++) {
    tagsArticulo += `
    <button type="button" class="btn btn-outline-secondary d-lg-inline-block mb-2" style="width: 100%;">${arrayDeCadenas[i]}</button>   
    `;

 }

  const contenedorTitulo = document.getElementById("titulo_articulo");
  contenedorTitulo.innerHTML = tituloArticulo;

  const contenedorImagen = document.getElementById("imagen_articulo");
  contenedorImagen.innerHTML = imagenArticulo;

  const contenedorApp2 = document.querySelector('#texto_articulo');
  contenedorApp2.innerHTML = textoArticulo;
  
  const contenedorTarjetaAutor = document.querySelector('#tarjeta_autor');
  contenedorTarjetaAutor.innerHTML = tarjetaAutor;

  const contenedorTagsArticulo = document.querySelector('#tags_articulo');
  contenedorTagsArticulo.innerHTML = tagsArticulo;
  
 

 /*  const y = document.getElementById("detalle2");
  y.style.display = "block";
  const z = document.getElementById("encabezadoDetalle");
  z.style.display = "block";
  const x = document.getElementById("listado");
  x.style.display = "none"; */


}

var myObj = {
  init: function() {
    descargarBlog
      .then(
        listar => listarBlog(listar),
        error => console.error(
          new Error('Hubo un error' + error)
        )
      );
      
     
  },
  ver_articulo_detalle: function(id) {
    descargarBlog
      .then(
        detalle => verDetalle(detalle, id),
        error => console.error(
          new Error('Hubo un error' + error)
        )
      );


  },
  


}
myObj.init();