let nombreEnfermedad = document.getElementById("nombreenfermedad");
let sintomasEnfermedad = document.getElementById("sintomasenfermedad");
let clasificacionEnfermedad = document.getElementById("clasificacionenfermedad");
let gradoEnfermedad = document.getElementById("gradoenfermedad");
let probabilidadDeVidaEnfermedad = document.getElementById("probabilidadvidaenfermedad");

let botonRegistroEnfermedad = document.getElementById("botonregistroenfermedad");

botonRegistroEnfermedad.addEventListener("click", function(evento){
    evento.preventDefault();

    datosFormularioEnfermedad = {

        nombre: nombreEnfermedad.value,
        sintomas: sintomasEnfermedad.value,
        clasificacion: clasificacionEnfermedad.value,
        grado: gradoEnfermedad.value,
        probabilidadVida: probabilidadDeVidaEnfermedad.value

    }

    console.log(datosFormularioEnfermedad);

    swal.fire({
        title: "Registro Exitoso",
        text: "¡Datos introducidos correctamente!",
        icon: "success"
    })
})


