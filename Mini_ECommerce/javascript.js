

let productos = document.querySelectorAll(".contenedores-productos");

for(let i=0;i<productos.length;i++){
     productos[i].addEventListener("click", function(){

        let contenido_descripcion = productos[i].querySelector(".descripcion");
        let titulo = productos[i].querySelector("h3");
        let boton_x = contenido_descripcion.querySelector("button")
    
        /* --- Para mostrar el dic de descripcion del producto ---*/
        contenido_descripcion.style.display = "block";
        titulo.style.display = "none";

        /* -- Evento para quitar la descripcion cuando usuario le da click a la x --*/
        boton_x.addEventListener("click",function(event){
            event.stopPropagation(); 
            contenido_descripcion.style.display = "none";
            titulo.style.display = "block";
        });

    });
}