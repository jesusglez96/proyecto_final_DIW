addEventListener('load',inicio);
let encabezados=[
    {dia:"Lunes"},
    {dia:"Martes"},
    {dia:"Miércoles"},
    {dia:"Jueves"},
    {dia:"Viernes"}
];
let horario1SMR=[
    {
        hora:"08:00-09:00",
        asignaturas:["RL","AO","MME","MME","AO"]
    },
    {
        hora:"09:00-10:00",
        asignaturas:["RL","INGLES","SOM","MME","AO"]
    },
    {
        hora:"10:00-11:00",
        asignaturas:["AO","MMW","RL","RL","MME"]
    },
    {
        hora:"11:00-12:00",
        asignaturas:["INGLES","MME","RL","RL","MME"]
    },
    {
        hora:"12:30-13:30",
        asignaturas:["SOM","RL","AO","AO","SOM"]
    },
    {
        hora:"13:30-14:30",
        asignaturas:["SOM","FOL","FOL","FOL","SOM"]
    }
];
let horario2SMR=[
    {
        hora:"08:00-09:00",
        asignaturas:["SR","SR","SR","EEIE","SI"]
    },
    {
        hora:"09:00-10:00",
        asignaturas:["SR","SR","SR","EEIE","SI"]
    },
    {
        hora:"10:00-11:00",
        asignaturas:["EEIE","SR","SOR","AW","AW"]
    },
    {
        hora:"11:00-12:00",
        asignaturas:["EEIE","HLC","SI","AW","AW"]
    },
    {
        hora:"12:30-13:30",
        asignaturas:["SOR","SOR","SI","HLC","SOR"]
    },
    {
        hora:"13:30-14:30",
        asignaturas:["SOR","SOR","SI","HLC","SOR"]
    }
];
let horario1DAW_MANANA=[
    {
        hora:"08:00-09:00",
        asignaturas:["PROG","PROG","BD","ED","FOL"]
    },
    {
        hora:"09:00-10:00",
        asignaturas:["PROG","PROG","BD","ED","FOL"]
    },
    {
        hora:"10:00-11:00",
        asignaturas:["ED","PROG","BD","FOL","SI"]
    },
    {
        hora:"11:00-12:00",
        asignaturas:["SI","BD","SI","PROG","SI"]
    },
    {
        hora:"12:30-13:30",
        asignaturas:["LMSGI","BD","SI","PROG","LMSGI"]
    },
    {
        hora:"13:30-14:30",
        asignaturas:["LMSGI","BD","SI","PROG","LMSGI"]
    }
];
let horario1DAW_TARDE=[
    {
        hora:"15:00-16:00",
        asignaturas:["-","-","-","-","PROG"]
    },
    {
        hora:"16:00-17:00",
        asignaturas:["PROG","LMSGI","PROG","SI","PROG"]
    },
    {
        hora:"17:00-18:00",
        asignaturas:["PROG","LMSGI","PROG","SI","PROG"]
    },
    {
        hora:"18:00-19:00",
        asignaturas:["PROG","FOL","FOL","SI","ED"]
    },
    {
        hora:"19:00-20:00",
        asignaturas:["BD","SI","FOL","BD","ED"]
    },
    {
        hora:"20:00-21:00",
        asignaturas:["BD","SI","LMSGI","BD","ED"]
    },
    {
        hora:"21:00-22:00",
        asignaturas:["BD","SI","LMSGI","BD","-"]
    }
];
let horario2DAW_MANANA=[
    {
        hora:"08:00-09:00",
        asignaturas:["EEIE","DWES","DWES","DWES","HLC"]
    },
    {
        hora:"09:00-10:00",
        asignaturas:["EEIE","DWES","DWES","DWES","HLC"]
    },
    {
        hora:"10:00-11:00",
        asignaturas:["DIW","DWES","DWEC","DWES","EEIE"]
    },
    {
        hora:"11:00-12:00",
        asignaturas:["HLC","DAW","DWEC","DIW","EEIE"]
    },
    {
        hora:"12:30-13:30",
        asignaturas:["DWEC","DWEC","DAW","DIW","DIW"]
    },
    {
        hora:"13:30-14:30",
        asignaturas:["DWEC","DWEC","DAW","DIW","DIW"]
    }
];
let horario2DAW_TARDE=[
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

function inicio() {
    PoblarTabla(horario1SMR,"HORARIO 1SMR","1smr")
    PoblarTabla(horario2SMR,"HORARIO 2SMR","2smr")
    PoblarTabla(horario1DAW_MANANA,"HORARIO 1DAW MAÑANA","1dawmanana")
    PoblarTabla(horario1DAW_TARDE,"HORARIO 1DAW TARDE","1dawtarde")
    PoblarTabla(horario2DAW_MANANA,"HORARIO 2DAW MAÑANA","2dawmanana")
    PoblarTabla(horario2DAW_TARDE,"HORARIO 2DAW TARDE","2dawtarde")
}
function PoblarTabla(json,titulo,id) {
let div=document.getElementById('contenedor-horarios');
let h1=document.createElement('h1')
h1.innerHTML = titulo
h1.setAttribute("class","font-weight-bold fs-4 mt-5")
h1.setAttribute('id',id)
div.appendChild(h1)
let tabla = document.createElement('table');
tabla.setAttribute('class',"table table-striped table-borderless text-center mt-5 mb-5")
let thead = document.createElement('thead')
thead.setAttribute('class',"table-dark")
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
for (let i = 0; i < json.length; i++) {
    let tr=document.createElement('tr');
    let td=document.createElement('td');
    td.setAttribute('scope',"row")
    td.innerHTML=json[i].hora
    tr.appendChild(td);
    for (let k = 0; k < json[0].asignaturas.length; k++) {
        let td=document.createElement('td');
        td.setAttribute('scope',"row")
        td.innerHTML=json[i].asignaturas[k]
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    }
    div.appendChild(tabla);
}
