const descargarBlog = cantidad => new Promise((resolve, reject)=>{

	//const api = `https://randomuser.me/api?results=${cantidad}&nat=us`;
    
    const api = `http://sistemas.consultoriaweb.mx/gruponach/datos/datos.json`;

	const xhr = new XMLHttpRequest();

	xhr.open('GET',api,true);

	xhr.onload=() =>{
		if(xhr.status===200){
			resolve (JSON.parse(xhr.responseText).blog );
			console.log(resolve);
		} else {
			reject(Error(xhr.statusText));
		}
	}

	xhr.oneror=(error)=> reject(error);

	xhr.send()
});


descargarBlog()
.then(
	// miembros => console.log(miembros),
	miembros=>imprimirHTML(miembros),
	error=>console.error(
		new Error ('Hubo un error' + error)
		)
	);
function imprimirHTML(articulos){
	let html='';
	articulos.forEach(articulo => {
    // console.log(articulo);
    /* Nombre: ${articulo.articulo.id} 
            texto: ${articulo.articulo.texto_articulo}
            autor: ${articulo.articulo.autor.nombre_autor}

            autor_img: <img src="images/"> 
            likes: 
            comments: 
            views: 
            Nombre: ${articulo.articulo.titulo}
            Nombre: ${articulo.articulo.titulo}
			likes: ${articulo.id}
			Imagen_articulo:
        <img src="images/"> 
         <div class="card me-3">
    <img src="images/${articulo.articulo.imagen}" class=" card-img-top" alt="...">
    <div class="card-body" >
      <img src="images/${articulo.articulo.autor.imagen_autor}" class="rounded-circle img-thumbnail top-content center" alt="..." style="max-width: 80px; height: auto;">
      <h5 class="card-title">| ${articulo.articulo.titulo}</h5>
      <p class="card-text text-end .fs-6 texto">Melie Ann</p>
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
    */
    html+=`
     
   
 
    <div class="card me-3">
            <img src="images/${articulo.articulo.imagen}" class=" card-img-top" alt="...">
            <div class="card-body" >
              <img src="images/${articulo.articulo.autor.imagen_autor}" class="rounded-circle img-thumbnail top-content center" alt="..." style="max-width: 80px; height: auto;">
              <h5 class="card-title">| ${articulo.articulo.titulo}</h5>
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
	contenedorApp.innerHTML= html;
}
