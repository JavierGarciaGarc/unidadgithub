var catchedtoken = sessionStorage.getItem('token')

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer "+catchedtoken);
console.log(catchedtoken)
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
        console.log(result.productos[i])


        let html_previo=document.getElementById("contenedor_tarjetas").innerHTML;
        document.getElementById("contenedor_tarjetas").innerHTML=html_previo+crear_tarjeta(result);
        i++;
    });})
  .catch(error => console.log('error', error));

/////////////////////////////////////////////////////////////////////////////////////////////////////

function crear_tarjeta(result){
    
    let tarjeta ="<div class=\"col\">"+
    "<div class=\"card shadow-sm\">"+
    //"<svg class=\"bd-placeholder-img card-img-top\" onClick=window.open(\""+result.productos[i].url+"\") width=\"100%\" height=\"225\" <div class=\"card-body\">"+
    "<iframe width=\"100%\" height=\"225\" src=\""+result.productos[i].url+"\" title=\""+result.productos[i].nombre+"\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"+
      "<p class=\"card-text\">"+result.productos[i].nombre+"</p>"+
      "<div class=\"d-flex justify-content-between align-items-center\">"+
        "<div class=\"btn-group\">"+
          "<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Like</button>"+
          "<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Dislike</button>"+
        "</div>"+
        "<small class=\"text-muted\">Duración</small>"+
        `""`
      "</div>"+
    "</div>"+
    "</div>";

    return tarjeta


}
