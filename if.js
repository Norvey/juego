r = document.getElementById("resutados");
let piedra=1;
let papel=2;
let tijera=3;

let x;
let y;

//piedra le gana a la tijera
//la tijera le gana al papel
//el papel le gana a la piedra
alert("Vamos a Jugar piedra papel o tijeras contra la consola");

let escoge = prompt("Escoge 1 = piedra, 2 = papel, 3 = tijera");



resultados = document.body.innerHTML




juego (x=escoge, y=Math.floor(Math.random()*((3+1)-1+1)));



function juego(x,y)

{
switch (escoge){
case "1":
    if(x==piedra && y ==tijera)
    {
        document.body.innerHTML = "Tú ganas";

    }else if(x==tijera && y== piedra)
    {
        document.body.innerHTML= " La Consola gana";

    }else if(x==tijera && y ==papel)
    {
        document.body.innerHTML = "Tú ganas"

    }else if(x==papel && y ==tijera)
    {
        document.body.innerHTML = "La consola gana";
    }
    else if(x== piedra && y ==papel)
    {
        document.body.innerHTML = "La consola gana";

    }
    else if(x==papel && y == piedra)
    {
        document.body.innerHTML = "Tú ganas";

    }
    else{ document.body.innerHTML = "empatados";
}
break;

case "2":
    if(x==piedra && y ==tijera)
    {
        document.body.innerHTML = "Tú ganas";

    }else if(x==tijera && y== piedra)
    {
        document.body.innerHTML= " La Consola gana";

    }else if(x==tijera && y ==papel)
    {
        document.body.innerHTML = "Tú ganas"

    }else if(x==papel && y ==tijera)
    {
        document.body.innerHTML = "La consola gana";
    }
    else if(x== piedra && y ==papel)
    {
        document.body.innerHTML = "La consola gana";

    }
    else if(x==papel && y == piedra)
    {
        document.body.innerHTML = "Tú ganas";

    }
    else{ document.body.innerHTML = "empatados";
}
break;

    
case "3":
    if(x==piedra && y ==tijera)
    {
        document.body.innerHTML = "Tú ganas";

    }else if(x==tijera && y== piedra)
    {
        document.body.innerHTML= " La Consola gana";

    }else if(x==tijera && y ==papel)
    {
        document.body.innerHTML = "Tú ganas"

    }else if(x==papel && y ==tijera)
    {
        document.body.innerHTML = "La consola gana";
    }
    else if(x== piedra && y ==papel)
    {
        document.body.innerHTML = "La consola gana";

    }
    else if(x==papel && y == piedra)
    {
        document.body.innerHTML = "Tú ganas";

    }
    else{ document.body.innerHTML = "empatados";

    }
    break;
    default:(document.body.innerHTML =" No has intriducido un valor correcto, vuelte a intentarlo."); break;
}
}
