var mundo=[
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,2,1,2,2,1,2,1,2,2,2,2,1,2,1,2,1,2,1,2,2,2,2,1,2],
    [2,1,2,2,2,1,2,1,2,2,1,2,1,1,1,1,2,1,2,1,2,1,2,1,1,1,1,2,1,2],
    [2,1,1,2,2,1,2,1,2,2,1,2,2,2,2,1,2,1,2,1,1,1,1,1,2,2,1,2,1,2],
    [2,2,1,2,1,1,2,1,1,2,1,1,1,1,1,1,2,1,1,1,2,2,2,1,2,2,1,2,1,2],
    [2,2,1,2,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,1,2],
    [2,2,1,1,1,1,1,1,1,2,2,1,1,3,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,2],
    [2,2,1,2,2,1,2,2,1,2,2,1,1,1,1,1,1,2,1,1,1,1,2,1,2,2,2,2,2,2],
    [2,1,1,1,2,1,2,2,1,2,2,1,1,1,1,1,2,2,1,2,2,2,2,1,2,2,2,2,2,2],
    [2,1,2,1,2,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,2,2,1,1,1,1,1,1,1,1,2,1,2,2,2,1,2,2,1,2,1,2,1,2],
    [2,1,2,2,2,1,2,2,1,2,1,2,1,2,1,2,2,1,1,1,1,1,2,2,1,2,1,2,1,2],
    [2,1,1,2,2,1,1,1,1,2,1,2,1,2,1,2,2,1,2,2,2,1,2,1,1,1,1,2,1,2],
    [2,2,1,1,2,1,2,2,1,2,1,2,1,2,1,1,1,1,1,1,1,1,2,1,2,2,2,2,1,2],
    [2,2,2,1,1,1,1,1,1,2,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];
var pacman = {
    x: 6,
    y: 4
}
function displayWorld() {
    var salida='';
    for (var i=0;i<mundo.length; i++){
        salida += "\n<div class='row'>"
        for(var j=0; j<mundo[i].length; j++){
            if (mundo[i][j]==2){
                salida +="\n\t<div class='ladrillo'></div>" ; 
            }
            else if(mundo[i][j]==1){
                salida +="\n\t<div class='monedas'></div>";
            }
            else if(mundo[i][j]==3){
                salida +="\n\t<div class='pacman'></div>";
            }
            if (mundo[i][j]==0){
                salida +="\n\t<div class='vacio'></div>"  
            }   
        }
        salida +="\n</div>"      
    }
    //console.log(salida);
    document.getElementById('mundo').innerHTML=salida;

    
}
displayWorld();

document.onkeydown = function(event){
    // console.log(event);
    if (event.keyCode == 37){ // PACMAN MOVE LEFT
        if ( mundo[pacman.y][pacman.x-1] !== 1){
           // mundo[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x - 1;
           // mundo[pacman.y][pacman.x] = 5;
            displayWorld();
        }
    }
    else if (event.keyCode ==38){ // PACMAN MOVE UP
        if ( mundo[pacman.y-1][pacman.x] !== 1){
            //mundo[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y - 1;
           // mundo[pacman.y][pacman.x] = 5;
            displayWorld();
        }
    }
    else if (event.keyCode === 39){ // PACMAN MOVE RIGHT
        if ( mundo[pacman.y][pacman.x+1] !== 1){
            //mundo[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x + 1;
            //mundo[pacman.y][pacman.x] = 5;
           displayWorld();
        }
    }
    else if (event.keyCode === 40){ // PACMAN MOVE DOWN
        if ( mundo[pacman.y+1][pacman.x] !== 1){
            //mundo[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y + 1;
            //mundo[pacman.y][pacman.x] = 5;
           displayWorld();
        }
    }
    console.log(mundo)
}

// document.onkeydown=function(event){
//     if (event.keyCode == 37&& mundo[pacman.y][pacman.x-1]){ // PACMAN SE MUEVE A LA IZQUIERDA
//        pacman.x--;
//     }
//     else if (event.keyCode == 39){ // PACMAN SE MUEVE ALA DERECHA
//         pacman.x++;
//     }
//     else if (event.keyCode == 38){ // PACMAN SE MUEVE HACIA ARRIBA
//        pacman.y--;
//     }
    
//     else if (event.keyCode == 40){ // PACMAN SE MUEVE HACIA ABAJO
//         pacman.y++;
       
//     }
//     if (mundo[pacman.y][pacman.x]== 1){
//         mundo[pacman.y][pacman.x] = 0;
//        //score+=10;
//         displayWorld();
//     // displayScore();
     
//     }
//     //console.log(e.keyCode);
//     displayPacman();
// }
