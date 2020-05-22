r = document.getElementById("resutados");
let piedra=1;
let papel=2;
let tijera=3;

let x;
let y;

//piedra le gana a la tijera
//la tijera le gana al papel
//el papel le gana a la piedraMath.floor(Math.random()*((3+1)-1+1))
alert("Vamos a Jugar piedra papel o tijeras contra la consola");

let escoge = prompt("Escoge 1 = piedra, 2 = papel, 3 = tijera");



resultados = document.body.innerHTML




juego (x=escoge, y=1);



function juego(x,y)
{
    if(x==piedra && y ==tijera)
    {
        document.body.innerHTML = "Tú ganas";

    }
    else if(x==tijera && y== piedra)
    {
        document.body.innerHTML= " La Consola gana";

    }
    else if(x==tijera && y ==papel)
    {
        document.body.innerHTML = "Tú ganas"

    }
    else if(x==papel && y ==tijera)
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
    else if(x==y){document.body.innerHTML = "empatados";}
    else if(x<1){document.body.innerHTML = "No es un valor correcto, debes ingresar un numero entre el 1 y 3, vuelve a intentarlo...";}
    else if(x>3){document.body.innerHTML = "No es un valor correcto, debes ingresar un numero entre el 1 y 3, vuelve a intentarlo...";}
    else if (x=true){document.body.innerHTML = "No es un valor correcto, debes ingresar un numero entre el 1 y 3, vuelve a intentarlo...";} 
    else{ document.body.innerHTML = "Erro 404";}
 }

