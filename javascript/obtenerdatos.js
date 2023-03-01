/**
 * El siguiente Script Conecta a la pagina Ramdom User para generar datos aleatorios para insertar
 * en el curriculum viate virtual
 * los datos obtenidos son:
 * - Nombre
 * - Apellido
 * - Genero
 * - Dirección: dividido en nomnre de valle y numero, ciudad y pais
 * - E-mail
 * - Telefono Fijo
 * - Telefono Celular
 * - Fotografía
 * y los envia al documento html con su correspondiende id enlazado
*/
fetch('https://randomuser.me/api/?inc=gender,name,location,email,phone,cell,picture,nat')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        const nombre = user.name.first +" " +user.name.last;
        const genero = user.gender=== "male" ? "Masculino" : "Femenino";
        const direccion = user.location.street.name +" Numero: "+user.location.street.number;
        const ciudad = user.location.city
        const pais =user.location.country;
        const email = user.email;
        const telFijo = user.phone;
        const celular = user.cell;
        const foto = user.picture.large;
        

        document.getElementById("nombre").innerHTML = nombre;
        document.getElementById("otronombre").innerHTML = nombre;
        document.getElementById("nombre2").innerHTML = nombre;
        document.getElementById("genero").innerHTML = genero;
        document.getElementById("direccion2").innerHTML = "Calle: " +direccion + " - " + ciudad + " - " + pais;
        document.getElementById("direccion").innerHTML = "Calle: " +direccion;
        document.getElementById("ciudad").innerHTML = "Ciudad: " + ciudad;
        document.getElementById("pais").innerHTML = "Pais: " + pais
        document.getElementById("email").innerHTML = email;
        document.getElementById("email2").innerHTML = email;
        document.getElementById("telFijo").innerHTML = telFijo;
        document.getElementById("telFijo2").innerHTML = "TELEFONO FIJO: " +telFijo;
        document.getElementById("celular").innerHTML = celular;
        document.getElementById("celular2").innerHTML = "TELEFONO CELULAR: " +celular;
        document.getElementById("foto").src = foto;
        
    })
    .catch(error => console.error(error));
