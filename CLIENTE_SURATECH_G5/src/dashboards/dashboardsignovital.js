let signosVitales=[
    {
        nombre:"Presion arterial",
        valor:"121/71",
        fechamedida:"2024-07-09"
    },
    {
        nombre: "Frecuencia cardíaca",
        valor: "73 bpm",
        fechamedida: "2024-11-30"
    },
    {
        nombre: "Temperatura corporal",
        valor: "37.0 °C",
        fechamedida: "2024-12-15"
    },
    {
        nombre: "Frecuencia respiratoria",
        valor: "22 respiraciones/min",
        fechamedida: "2024-04-08"
    },
    {
        nombre: "Oxígeno en sangre",
        valor: "95%",
        fechamedida: "2024-05-10"
    },
    {
        nombre: "Glicemia",
        valor: "90 mg/dL",
        fechamedida: "2024-10-20"
    }
];

let fila=document.getElementById("fila");

signosVitales.forEach(function(signoVital){
    console.log(signoVital);
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");

    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card","p-5","h-100","shadow");

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL PACIENTE 
    let nombre=document.createElement("h2");
    nombre.textContent=signoVital.nombre

    let valor=document.createElement("p");
    valor.textContent=signoVital.valor
    
    let fechamedida=document.createElement("p");
    fechamedida.textContent=signoVital.fechamedida

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(valor);
    tarjeta.appendChild(fechamedida);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
    
});