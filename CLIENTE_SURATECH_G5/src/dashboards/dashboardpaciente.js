//CONTROLADOR DE DASHBOARDS

//OBJETIVO:Recibir datos del BACK y hacerles render (render = PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS

let pacientes = [
    {
      id: 344,
      nombre: "Carlos Jacobo Cano",
      anioNacimiento:"2004-05-17",
      ciudad:"Medellin",
      correo: "car@gmail.com",
      telefono: 3010090909,
      ips: "Molinos",
      grupoIngresos:"C",
      poliza:true,
      fechaAfiliación:"2007-01-23"
    },
    {
      id: 345,
      nombre: "Maria Gomez",
      anioNacimiento: "2000-10-08",
      ciudad: "Envigado",
      correo: "mag@gmail.com",
      telefono: 3005000000,
      ips: "Molinos",
      grupoIngresos: "B",
      poliza: true,
      fechaAfiliación: "2017-06-09"
    },
    {
      id: 346,
      nombre: "Miguel Velez",
      anioNacimiento: "2003-05-25",
      ciudad: "Santa Marta",
      correo: "mive@gmail.com",
      telefono: 3013004040,
      ips: "Centro",
      grupoIngresos: "A",
      poliza: false,
      fechaAfiliación: "2021-09-17"
    },
    {
      id: 347,
      nombre: "Vanesa Petro",
      anioNacimiento: "2014-08-26",
      ciudad: "Monteria",
      correo: "vap@mail.com",
      telefono: 3186002020,
      ips: "Belén",
      grupoIngresos: "C",
      poliza: true,
      fechaAfiliación: "2021-08-20"
    }
]
  
//2. CREAR UNA REFERENCIA A UNA ETIQUETA HTML DONDE VAMOS A RENDERIZAR
let fila  = document.getElementById("fila");
  
//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
  pacientes.forEach(function(paciente){
    console.log(paciente);

    //4.Se crean columnas
    let columna = document.createElement("div");
    columna.classList.add("col")

    //5. Se crean tarjetas
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-5", "h-100", "shadow");

    //6. Se crea una etiqueta para poner el nombre del paciente
    let nombre = document.createElement("h2");
    nombre.textContent = paciente.nombre;

    let ips = document.createElement("p");
    ips.textContent = paciente.ips;

    let poliza = document.createElement("p"); 
    poliza.textContent = paciente.poliza;

    //PASO FINAL (ORDENANDO LAS CARTAS)
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(ips);
    tarjeta.appendChild(poliza);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);

  });



