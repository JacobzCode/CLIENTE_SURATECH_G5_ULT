//OBJETIVO: RECIBIR DATOSS DEL BACK Y HACERLES (render=PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS 
let medicamentos=[
    {
        id: 1,
        nombre:"Tacrolimus",
        presentacion:"tableta",
        dosis:"2 tabletas cada 12 horas",
        laboratorio:"Eccar",
        fechaCaducidad:"2025-07-30",
        contraIndicaciones:"No exceder",
        registroInvima:"0098",
        copago:true
    },
    {
        id:2,
        nombre: "Aspirina",
        presentacion: "tableta",
        dosis: "1 tableta diaria",
        laboratorio: "eccar",
        fechaCaducidad: "2025-10-15",
        contraIndicaciones: "No usar en úlceras gástricas",
        registroInvima: "10023",
        copago: true
    },
    {
        id: 3,
        nombre: "Dolex",
        presentacion: "cápsulas",
        dosis: "1 cápsula cada 8 horas",
        laboratorio: "Genfar",
        fechaCaducidad: "2025-01-12",
        contraIndicaciones: "No exceder mas de 2 tabletas",
        registroInvima: "3456",
        copago: true
    },
    {
        id: 4,
        nombre: "Asitromicina",
        presentacion: "tableta",
        dosis: "1 tableta cada 8 horas",
        laboratorio: "Abbot",
        fechaCaducidad: "2026-09-20",
        contraIndicaciones: "no exeder mas de 3 tabletas",
        registroInvima: "890890",
        copago: false
    },
    {
        id: 5,
        nombre: "Tramadol",
        presentacion: "Solucion Inyectable",
        dosis: "i inyeccion cada 24 horas",
        laboratorio: "Menphis",
        fechaCaducidad: "2027-02-13",
        contraIndicaciones: "no exeder la dosis recomendada",
        registroInvima: "3443",
        copago: true
    },
    {
        id: 6,
        nombre: "Guayacolato",
        presentacion: "Jarabe",
        dosis: "10 ml",
        laboratorio: "American",
        fechaCaducidad: "2028-01-01",
        contraIndicaciones: "no ingerir en caso de ulcera",
        registroInvima: "2030",
        copago: false
    }
];
;
//2. CREAR UNA REFERENCIA A UNA ETIQUETA DE HTML DONDE VAMOS A RENDERIZAR
let fila=document.getElementById("fila");

//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
medicamentos.forEach(function(medicamento){
    console.log(medicamento);
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card","p-5","h-100","shadow");

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL PACIENTE 
    let nombre=document.createElement("h2");
    nombre.textContent=medicamento.nombre

    let presentacion=document.createElement("p");
    presentacion.textContent=medicamento.presentacion

    let dosis=document.createElement("p");
    dosis.textContent=medicamento.dosis

    let laboratorio=document.createElement("p");
    laboratorio.textContent=medicamento.laboratorio

    let fechaCaducidad=document.createElement("p");
    fechaCaducidad.textContent=medicamento.fechaCaducidad

    let contraIndicaciones=document.createElement("p");
    contraIndicaciones.textContent=medicamento.contraIndicaciones

    let registroInvima=document.createElement("p");
    registroInvima.textContent=medicamento.registroInvima
    
    let copago=document.createElement("p");
    copago.textContent=medicamento.copago

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(presentacion);
    tarjeta.appendChild(dosis);
    tarjeta.appendChild(laboratorio);
    tarjeta.appendChild(fechaCaducidad);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
});