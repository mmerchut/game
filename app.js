const square = document.querySelector(".square");

let marginT = 0;
let marginR = 0;

function changePosition(e) {
    x = e.which;
    y = square.style;
    if(x == 40) {
        marginT+=4;
        y.top = `${marginT}px`;
    }
    if(x == 39) {
        marginR+=4;
        y.left = `${marginR}px`;
    }
    if(x == 38) {
        marginT-=4;
        y.top = `${marginT}px`;
    }
    if(x == 37) {
        marginR-=4;
        y.left = `${marginR}px`;
    }
    checkForShop()
}

function checkForShop() {
    if(marginR == 20){
        shop();
    }
    
}

function shop() {
    console.log("shop");
}

function checkForShop() {
    if(marginR >= 119 || marginR >= 119 & marginR <= 122){
     fight();
    }
    
}

function fight() {
    console.log("fight");
    alert('fight');
}





document.addEventListener("keydown", changePosition)