//OBJETIVO: RECIBIR DATOSS DEL BACK Y HACERLES (render=PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS 
let medicos=[
    {
        id: 20,
        nombre:"Andres Arbelaez",
        matriculaProfesional:"OM09456",
        especialidad:"Optometra",
        salario:3000000,
        ips:"SURA",
        correo:"anar@gmail.com",
        telefono:"3004002020",
        direccionConsultorio:"Centro",
        finDeSemanaDisponible:true
    },
    {
        id: 21,
        nombre:"Luis Castro",
        matriculaProfesional: "OF090807",
        especialidad: "Oftalmologo",
        salario: 2000000,
        ips: "SURA",
        correo: "luca@gmail.com",
        telefono: "3330005050",
        direccionConsultorio: "Calle 1 # 20-30",
        finDeSemanaDisponible: false
    },
    {
        id: 22,
        nombre: "Manuela Arias",
        matriculaProfesional: "MG200500",
        especialidad: "General",
        salario: 3200000,
        ips: "SURA",
        correo: "maa@gmail.com",
        telefono: "3120000101",
        direccionConsultorio: "Carrera 20 # 05-12",
        finDeSemanaDisponible: true
    },
    {
        id: 23,
        nombre: "Eliza Vega",
        matriculaProfesional: "MD100200",
        especialidad: "Dermatóloga",
        salario: 3000000,
        ips: "Sanitas",
        correo: "elv@gmail.com",
        telefono: "3025005050",
        direccionConsultorio: "Circular 4 # 06-20",
        finDeSemanaDisponible: true
    },
    {
        id: 24,
        nombre: "Olga Marin",
        matriculaProfesional: "MN700789",
        especialidad: "Neurologa",
        salario: 4000000,
        ips: "Coomeva",
        correo: "olm@gmail.com",
        telefono: "3409009090",
        direccionConsultorio:"Calle 30 # 65-32",
        finDeSemanaDisponible: false
    },
    {
        id: 25,
        nombre: "Ana Perez",
        matriculaProfesional: "MC234567",
        especialidad: "Cirujana",
        salario: 6000000,
        ips: "SURA",
        correo: "nap@gmail.com",
        telefono: "380123123",
        direccionConsultorio: "Carrera 5 # 80-65",
        finDeSemanaDisponible: false
    }
];

//2. CREAR UNA REFERENCIA A UNA ETIQUETA DE HTML DONDE VAMOS A RENDERIZAR
let fila=document.getElementById("fila");

//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
medicos.forEach(function(medico){
    console.log(medico);
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card","p-5","h-100","shadow");

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL MEDICO 
    let nombre=document.createElement("h2");
    nombre.textContent=medico.nombre

    let matriculaProfesional=document.createElement("p");
    matriculaProfesional.textContent=medico.matriculaProfesional

    let especialidad=document.createElement("p");
    especialidad.textContent=medico.especialidad

    let salario=document.createElement("p");
    salario.textContent=medico.salario

    let ips=document.createElement("p");
    ips.textContent=medico.ips

    let correo=document.createElement("p");
    correo.textContent=medico.correo

    let telefono=document.createElement("p");
    telefono.textContent=medico.telefono

    let direccionConsultorio=document.createElement("p");
    direccionConsultorio.textContent=medico.direccionConsultorio
    
    let finDeSemanaDisponible=document.createElement("p");
    finDeSemanaDisponible.textContent=medico.finDeSemanaDisponible

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(matriculaProfesional);
    tarjeta.appendChild(especialidad);
    tarjeta.appendChild(salario);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
});