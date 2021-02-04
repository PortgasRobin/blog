const descargarPropiedades = new Promise((resolve, reject) => {

  //const api = `datos/arreglo.json`;
  const api = `http://sistemas.consultoriaweb.mx/gruponach/datos/datos.json`;
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

document.getElementById('back').addEventListener('click', function() {
  const x = document.getElementById("listado");
  x.style.display = "block";

  const y = document.getElementById("detalle2");
  y.style.display = "none";
  const z = document.getElementById("encabezadoDetalle");
  z.style.display = "none";



});

function listarPropiedades(propiedades) {
  console.log('propiedades: ' + propiedades);
  let html = '';
  propiedades.forEach(propiedad => {
    console.log(propiedad);

    html += `
    <div class="card me-3">
          <img src="images/${articulo.articulo.imagen}" class=" card-img-top" alt="...">
          <div class="card-body" >
            <img src="images/${articulo.articulo.autor.imagen_autor}" class="rounded-circle img-thumbnail top-content center" alt="..." style="max-width: 80px; height: auto;">
            <h5 class="card-title">| ${articulo.articulo.titulo}
            <button type="button"  id="${articulo.articulo.id}" class="btn verPropiedad float-right pt-0 mt-0 mr-2" onclick="verPropiedad(this)">${articulo.articulo.titulo}</button></h5>
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
  const contenedorApp = document.querySelector('#app');
  contenedorApp.innerHTML = html;
  const y = document.getElementById("detalle2");
  y.style.display = "none";
  const z = document.getElementById("encabezadoDetalle");
  z.style.display = "none";
}


function verPropiedad(comp) {
  let id = comp.id;
  console.log(id);
  myObj.ver_propiedad_detalle(id);
}

function verDetalle(propiedades, id) {
  console.log(id);
  console.log('propiedades: ' + propiedades);
  let imagenesGaleria = '';
  let thumbsGaleria = '';
  let descripcionDetalle = '';


  const detail = propiedades.find(propiedad => {
    return propiedad.property.id === id;
  });
  console.log(detail);
  ima = `el num interior es: ${detail.property.id} asi es `;
  desc = `${detail.property.address.street} #${detail.property.address.number_ext} Int. ${detail.property.address.number_int}`;
  console.log(ima);
  console.log(desc);

  // var imagen_galeria = document.getElementById("1");
  //     imagen_galeria.style.display = "block";


  // var elemento = document.querySelector(".photor__viewportLayerSlideImg");
  // var dataID= elemento.getAttribute('id-data');
  // console.log('elemento'+elemento+ ' dataID: ' + dataID);

  // elemento.style.backgroundImage = "url('img_tree.png')";


  // document.getElementById("myDiv").style.backgroundImage = "url('img_tree.png')";



  imagenesGaleria = `
            

<div class="photor__viewportLayerSlide _8 _auto _portrait" data-id="8" style="left: 800%;">
  <div class="photor__viewportLayerSlideImg " style="background-image: url(&quot;images/${detail.property.id}_9-min.jpg&quot;);">
  </div>
</div>
<div class="photor__viewportLayerSlide _9 _auto _portrait" data-id="9" style="left: 900%;">
  <div class="photor__viewportLayerSlideImg " style="background-image: url(&quot;images/${detail.property.id}_10-min.jpg&quot;);">
  </div>
</div>

           `;

  thumbsGaleria = `
<span data-rel="0" class="photor__thumbsWrapItem _0 _current" ><img src="images/thumbs/${detail.property.id}_1-min.jpg" class="photor__thumbsWrapItemImg" data-rel="0"></span>
<span data-rel="1" class="photor__thumbsWrapItem _1"><img src="images/thumbs/${detail.property.id}_2-min.jpg" class="photor__thumbsWrapItemImg" data-rel="1"></span>
<div class="photor__thumbsWrapFrame" style="transition-duration: 0.24s; width: 78px; height: 52px; transform: translate3d(525.469px, 0px, 0px);"></div>
`;

  descripcionDetalle = `<h3 class="card-title">${detail.property.address.street} #${detail.property.address.number_ext} Int. ${detail.property.address.number_int}</h3>
    <p class="lh-sm"></p>
    <p class="precioDetalle"> $ ${detail.property.price} MDP</p>
    <h4 class="card-subtitle mb-2 text-muted">${detail.property.type_property}  en ${detail.property.type_operation} </h4>
    <p class="card-text">${detail.property.description}</p>
    `;
  const contenedorImagenes = document.getElementById("imagenes");
  contenedorImagenes.innerHTML = imagenesGaleria;
  const contenedorthumbs = document.getElementById("thumbnail");
  contenedorthumbs.innerHTML = thumbsGaleria;
  const contenedorApp2 = document.querySelector('#descripcion_detalle');
  contenedorApp2.innerHTML = descripcionDetalle;

  const y = document.getElementById("detalle2");
  y.style.display = "block";
  const z = document.getElementById("encabezadoDetalle");
  z.style.display = "block";
  const x = document.getElementById("listado");
  x.style.display = "none";


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