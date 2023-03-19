var catchedtoken = sessionStorage.getItem('token')

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer "+catchedtoken);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

j=0;

fetch("https://restlabingsoft-production-0999.up.railway.app/api/categorias", requestOptions)
  .then(response => response.json())
  .then(result => {
    result.categorias.forEach(element => {

        let categorias_previo=document.getElementById("contenedor_categorias").innerHTML;
        document.getElementById("contenedor_categorias").innerHTML=categorias_previo+crear_seccion(result);
        j++;

      });})
      .catch(error => console.log('error', error));
 
///////////////////////////////////////////////////////////////////////////////////////////////////

function crear_seccion(result){

  let categoria_creada="<div class=\"album py-5 bg-light\" style=\"background-image: url(img/fondoprueba.jpg); background-size: cover; border-width: 3px; border-radius: 16px; margin: 80px\">"+
  "<div class=\"row\" id=\"contenedor_tarjetas_"+result.categorias[j].nombre+"\" style=\"color: white; font: bold; margin: 10px; \">"+
    "<h5 class=\"title\" style=\"margin: 5px; font-size: larger; background-color: rgba(255, 255, 255, 0)\">"+result.categorias[j].nombre+"</h5>"+
    
    "</div>"+
  "</div>";
  
  return categoria_creada
}
///////////////////////////////////////////////////////////////////////////////////////////////////

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer "+catchedtoken);
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

i=0;

fetch("https://restlabingsoft-production-0999.up.railway.app/api/videos?limite=10&desde=0", requestOptions)
  .then(response => response.json())
  .then(result => {
    result.productos.forEach(element => {

        let html_previo=document.getElementById("contenedor_tarjetas_"+result.productos[i].categoria.nombre).innerHTML;
        
        document.getElementById("contenedor_tarjetas_"+result.productos[i].categoria.nombre).innerHTML=html_previo+crear_tarjeta(result);
        i++;

    });})
  .catch(error => console.log('error', error));

/////////////////////////////////////////////////////////////////////////////////////////////////////

function crear_tarjeta(result){

  obtenerurl=result.productos[i].url;
  stringurl=obtenerurl.toString();
  urlobtenida=stringurl.slice(-11);
    
    let tarjeta ="<div class=\"col-4\">"+
    "<div class=\"card shadow-sm\" onClick=window.open(\"https://youtube.com/watch?v="+urlobtenida+"\")>"+
    //"<svg class=\"bd-placeholder-img card-img-top\" onClick=window.open(\""+result.productos[i].url+"\") width=\"100%\" height=\"225\" <div class=\"card-body\">"+
    "<iframe height=\"225\" src=\""+result.productos[i].url+"\" title=\""+result.productos[i].nombre+"\" frameborder=\"3px\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"+
      "<h5 style=\"margin: 4px; color: black\" class=\"card-title\">"+result.productos[i].nombre+"</h5>"+
      "<div class=\"d-flex justify-content-between align-items-center\">"+

        "<p class=\"card-text\" style=\"color: black\">"+"CATEGORÍA "+result.productos[i].categoria.nombre+"</p>"+
        "</p>"+
        "</p>"+
        "<div class=\"usuario\">"+
        "<h5 class=\"text-muted\" style=\"margin: 4px; font-size: smaller\">"+result.productos[i].usuario.nombre+"</h5>"+
        "</div>"+
        
      "</div>"+
    "</div>"+
    "</div>";

    return tarjeta


}
