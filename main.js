pacman = {
    x: 6,
    y: 4
}

mapita = [ 
    [1,1,1,1,1,1,1,1,1,1,1,1,1], 
    [1,2,2,2,2,2,1,2,2,2,2,2,1], 
    [1,2,1,1,1,2,1,2,1,1,1,2,1], 
    [1,2,1,2,2,2,2,2,2,2,1,2,1], 
    [1,2,2,2,1,1,5,1,1,2,2,2,1], 
    [1,2,1,2,2,2,2,2,2,2,1,2,1], 
    [1,2,1,1,2,2,1,2,2,1,1,2,1], 
    [1,2,2,2,2,2,1,2,2,2,2,2,1], 
    [1,1,1,1,1,1,1,1,1,1,1,1,1]
]

var mundo = document.getElementById('mundo');

function drawWorld(){
    mundo.innerHTML = '';
    for(var i = 0; i< mapita.length ; i++) {
        for(var j = 0; j< mapita[i].length ; j++) {		
            if (mapita[i][j] === 1) {
                mundo.innerHTML += "<div class='ladrillo'></div>";
            }
            else if (mapita[i][j] === 2) {
                mundo.innerHTML += "<div class='coin'></div>";
            }
            else if (mapita[i][j] === 3) {
                mundo.innerHTML += "<div class='vacio'></div>";
            }
            else if (mapita[i][j] === 4) {
                mundo.innerHTML += "<div class='ghost'></div>";
            }
            else if (mapita[i][j] === 5) {
                mundo.innerHTML += "<div id='pacman'></div>";
            }
        }
        mundo.innerHTML += "<br>";
    }
}
drawWorld();
document.onkeydown = function(event){
    if (event.keyCode == 37){ // PACMAN MOVE LEFT
        document.getElementById("pacman").style.transform = "rotate(180deg)";
        if ( mapita[pacman.y][pacman.x-1] !== 1){
            mapita[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x - 1;
            mapita[pacman.y][pacman.x] = 5;
            drawWorld();
        }
    }
    else if (event.keyCode == 38){ // PACMAN MOVE UP
        document.getElementById("pacman").style.transform = "rotate(90deg)";
        if ( mapita[pacman.y-1][pacman.x] !== 1){
            mapita[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y - 1;
            mapita[pacman.y][pacman.x] = 5;
            drawWorld();
        }
    }
    else if (event.keyCode == 39){ // PACMAN MOVE RIGHT
        document.getElementById("pacman").style.transform = "rotate(0deg)";
        if ( mapita[pacman.y][pacman.x+1] !== 1){
            mapita[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x + 1;
            mapita[pacman.y][pacman.x] = 5;
            drawWorld();
        }
    }
    else if (event.keyCode == 40){ // PACMAN MOVE DOWN
        document.getElementById("pacman").style.transform = "rotate(270deg)";
        if ( mapita[pacman.y+1][pacman.x] !== 1){
            mapita[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y + 1;
            mapita[pacman.y][pacman.x] = 5;
            drawWorld();
        }
    }
}
