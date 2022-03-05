addEventListener('load',inicio);
function inicio() {
    PoblarTabla()
}
let encabezados=[
    {dia:"Lunes"},
    {dia:"Martes"},
    {dia:"Miércoles"},
    {dia:"Jueves"},
    {dia:"Viernes"}
];
let horario=[
    {
        hora:"15:00-16:00",
        asignaturas:["-","-","-","-","DWS"]
    },
    {
        hora:"16:00-17:00",
        asignaturas:["DWS","EIE","DWS","DAW","DWS"]
    },
    {
        hora:"17:00-18:00",
        asignaturas:["DWS","EIE","DWS","DAW","DWS"]
    },
    {
        hora:"18:00-19:00",
        asignaturas:["DWS","HLC","DIW","DAW","DWC"]
    },
    {
        hora:"19:00-20:00",
        asignaturas:["DIW","HLC","HLC","DWC","DWC"]
    },
    {
        hora:"20:00-21:00",
        asignaturas:["DIW","DIW","EIE","DWC","DWC"]
    },
    {
        hora:"21:00-22:00",
        asignaturas:["DIW","DIW","EIE","DWC","-"]
    }
];
function PoblarTabla() {
let div=document.getElementById('contenedor-horarios');
let tabla = document.createElement('table');
tabla.setAttribute('id','tabla')
tabla.setAttribute('class',"table table-borderless text-center")
let thead = document.createElement('thead')
thead.setAttribute('class',"table-primary")
let tbody = document.createElement('tbody')
 let tr=document.createElement('tr');
 thead.appendChild(tr);
 tabla.appendChild(thead);
 let td=document.createElement('td');
 td.innerHTML=''
 tr.appendChild(td);
 for (let f = 0; f < encabezados.length; f++) {
     let td=document.createElement('th');
     td.setAttribute('scope',"col")
     td.innerHTML=encabezados[f].dia
     tr.appendChild(td);
}
for (let i = 0; i < 7; i++) {
    let tr=document.createElement('tr');
    let td=document.createElement('td');
    td.setAttribute('scope',"row")
    td.innerHTML=horario[i].hora
    tr.appendChild(td);
    for (let k = 0; k < horario[0].asignaturas.length; k++) {
        let td=document.createElement('td');
        td.setAttribute('scope',"row")
        td.innerHTML=horario[i].asignaturas[k]
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    }
    div.appendChild(tabla);
}
