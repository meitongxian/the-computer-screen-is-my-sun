let capture;
let data = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 1; i < 54; i++) {
        data.push(i);
    }
    capture = createCapture(VIDEO);
    capture.hide();
    imageMode(CENTER);
    textAlign(CENTER, CENTER);
    //blendMode(DIFFERENCE);
    numberIndex();
}

function draw() {
    captureSky();
}

function mask() {
    circle(windowWidth/2, windowHeight/2, 350);
}

function captureSky() {
    //blendMode(BLEND);
    clip(mask);
    image(capture, windowWidth/2, windowHeight/2);
}

function numberIndex(){
    let startX = windowWidth/2;
    let startY = windowHeight/2;
    let width = 400;
    let angle = -Math.PI / 2;
    let radianPer = (Math.PI * 2) / Object.keys(data).length;
    noStroke();
    Object.keys(data).forEach((i) => {
        // add label here
        let textAngle = angle + radianPer / 2;
        // Use sine and cosine to determine the position for the text
        // Since sine is opposite / hypotenuse, taking the sine of the angle and
        // multiplying by distance gives us the vertical offset (i.e. the Y
        // coordinate).
        // Likewise with cosine for the X coordinate
        noStroke();
        fill(255);
        text(
        data[i].toString(),
        startX + cos(textAngle) * width / 2 * 0.95,
        startY + sin(textAngle) * width / 2 * 0.95
        );
        // Don't update angle until after calculating the angle for the label
        angle += radianPer;
    });
}