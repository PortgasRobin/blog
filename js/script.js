const descargarPropiedades = new Promise((resolve, reject) => {
  //const api = `datos/arreglo.json`;
  const api = `datos/datos.json`;
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

function listarPropiedades(articulos) {
  console.log('articulos: ' + articulos);
  let html = '';
  articulos.forEach(articulo => {
    console.log(articulo);

    html += `
    <div class="card me-3">
          <img src="images/${articulo.articulo.imagen}" class=" card-img-top" alt="...">
          <div class="card-body" >
            <img src="images/${articulo.articulo.autor.imagen_autor}" class="rounded-circle img-thumbnail top-content center" alt="..." style="max-width: 80px; height: auto;">
            <h5 class="card-title">| ${articulo.articulo.titulo}
            <button type="button"  id="${articulo.articulo.id}" class="card-title" onclick="verPropiedad(this)">${articulo.articulo.titulo}</button></h5>
            <p class="card-text text-end .fs-6 texto">${articulo.articulo.autor.nombre_autor}</p>
          </div>
          <div class="card-footer">
            <div class="row align-items-center text-muted">
              <div class="col">
                <small class="fas fa-heart"> ${articulo.articulo.reacciones.likes} </small>
              </div>
              <div class="col">
                <small class="fas fa-comment"> ${articulo.articulo.reacciones.comments} </small>
              </div>
              <div class="col">
                <small class="fas fa-eye"> ${articulo.articulo.reacciones.views} </small>
              </div>
            </div>
          </div>
        </div>
    
    `;

  });
  const contenedorApp = document.querySelector('#card_article');
  contenedorApp.innerHTML = html;
  /* const y = document.getElementById("detalle2");
  y.style.display = "none";
  const z = document.getElementById("encabezadoDetalle");
  z.style.display = "none"; */
}


function verPropiedad(comp) {
  let id = comp.id;
  console.log(id);
  myObj.ver_propiedad_detalle(id);
}

function verDetalle(articulos, id) {
  console.log(id);
  console.log('articulos: ' + articulos);
  let tituloArticulo = '';
  let imagenArticulo = '';
  let textoArticulo = '';

  const detail = articulos.find(articulo => {
    return articulo.articulo.id === id;
  });
  tituloArticulo = `<h1>| ${detail.articulo.titulo}</h1>`;
    imagenArticulo = `<img src="images/${detail.articulo.imagen}" class="card-img-top autor-a" alt="...">`;
    textoArticulo = `<p class="text-wrap articulo">${detail.articulo.texto_articulo} </p>`;

  const contenedorTitulo = document.getElementById("titulo_articulo");
  contenedorTitulo.innerHTML = tituloArticulo;

  const contenedorImagen = document.getElementById("imagen_articulo");
  contenedorImagen.innerHTML = imagenArticulo;

  const contenedorApp2 = document.querySelector('#texto_articulo');
  contenedorApp2.innerHTML = textoArticulo;

 

 /*  const y = document.getElementById("detalle2");
  y.style.display = "block";
  const z = document.getElementById("encabezadoDetalle");
  z.style.display = "block";
  const x = document.getElementById("listado");
  x.style.display = "none"; */


}

var myObj = {
  init: function() {

    descargarPropiedades
      .then(
        listar => listarPropiedades(listar),
        error => console.error(
          new Error('Hubo un error' + error)
        )
      );

  },
  ver_propiedad_detalle: function(id) {
    descargarPropiedades
      .then(
        detalle => verDetalle(detalle, id),
        error => console.error(
          new Error('Hubo un error' + error)
        )
      );


  },


}
myObj.init();