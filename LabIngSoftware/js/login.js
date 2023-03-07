$(document).ready(function () {
    console.log("Mensaje recibido")
});

function iniciar() {
   var email = document.getElementById("floatingInput").value
   var pwd = document.getElementById("floatingPassword").value
console.log(pwd)
   var myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   
   var raw = JSON.stringify({
     "correo": email,
     "password": pwd
   });
   
   var requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   };
   
   fetch("https://restlabingsoft-production-0999.up.railway.app/api/auth/login", requestOptions)
     .then(response => response.json())
     .then(result => {
        console.log(result.token)
        sessionStorage.setItem('token', result.token)
        window.location.href="videos.html"})

     .catch(error => console.log('error', error));

   
}


   