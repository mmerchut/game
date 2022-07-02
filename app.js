const square = document.querySelector(".square");

let marginT = 0;
let marginR = 0;

function changePosition(e) {
    x = e.which;
    y = square.style;
    if(x == 40) {
        marginT+=2;
        y.marginTop = `${marginT}px`;
    }
    if(x == 39) {
        marginR+=2;
        y.marginLeft = `${marginR}px`;
    }
    if(x == 38) {
        marginT-=2;
        y.marginTop = `${marginT}px`;
    }
    if(x == 37) {
        marginR-=2;
        y.marginLeft = `${marginR}px`;
    }
}






document.addEventListener("keydown", changePosition)