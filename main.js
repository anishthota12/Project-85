canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "canvasbg.jpg";
car_image = "car.png";

car_width = 90;
car_height = 45;

carx = 10;
cary = 10;

function add() {
    backgroundimagetag = new Image();
    backgroundimagetag.onload = uploadBackground();
    backgroundimagetag.src = background_image;

    carimagetag = new Image();
    carimagetag.onload = uploadCar();
    carimagetag.src = car_image;
}

function uploadBackground() {
    ctx.drawImage(backgroundimagetag, 0, 0, canvas.width, canvas.height);
}

function uploadCar() {
    ctx.drawImage(carimagetag, carx, cary, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
}

function up() {
    if (cary >= 10) {
        cary = cary - 5;
        console.log("User Pressed Up, x = " + carx + " | y = " + cary)
        uploadBackground();
        uploadCar();
    }
}

function down() {
    if (cary <= 550) {
        cary = cary + 5;
        console.log("User Pressed Down, x = " + carx + " | y = " + cary)
        uploadBackground();
        uploadCar();
    }
}

function left() {
    if (carx >= 15) {
        carx = carx - 5;
        console.log("User Pressed Left, x = " + carx + " | y = " + cary)
        uploadBackground();
        uploadCar();
    }
}

function right() {
    if (carx <= 715) {
        carx = carx + 5;
        console.log("User Pressed Right, x = " + carx + " | y = " + cary)
        uploadBackground();
        uploadCar();
    }
}