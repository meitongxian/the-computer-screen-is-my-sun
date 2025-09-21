function setup() {
  createCanvas(400, 400);

  // Text settings
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  let startX = 50;
  let startY = 50;

  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let width = 80;
  let angle = -Math.PI / 2;
  let radianPer = (Math.PI * 2) / Object.keys(data).length;

  noStroke();
  fill(255);
  ellipse(startX, startY, width, width);
  Object.keys(data).forEach((i) => {
    fill(255);
    stroke(255, 0, 0);
    arc(startX, startY, width, width, angle, angle + radianPer, PIE);
    fill(255);

    stroke(0, 0, 255);
    arc(startX, startY, width / 2, width / 2, angle, angle + radianPer, PIE);

    // add label here
    let textAngle = angle + radianPer / 2;

    // Use sine and cosine to determine the position for the text
    // Since sine is opposite / hypotenuse, taking the sine of the angle and
    // multiplying by distance gives us the vertical offset (i.e. the Y
    // coordinate).
    // Likewise with cosine for the X coordinate
    noStroke();
    fill(0);
    text(
      data[i].toString(),
      startX + cos(textAngle) * width / 2 * 0.75,
      startY + sin(textAngle) * width / 2 * 0.75
    );

    // Don't update angle until after calculating the angle for the label
    angle += radianPer;
  });
}

//white circle around

let capture;


function setup() {
    createCanvas(windowWidth, windowHeight);
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
    rect(windowWidth, windowHeight);
    erase();
    circle(windowWidth/2, windowHeight/2, 450);
    noErase();
    circle(windowWidth/2, windowHeight/2, 350);
}

function captureSky() {
    blendMode(NORMAL);
    clip(mask);
    image(capture, windowWidth/2, windowHeight/2);
}

function numberIndex(){
    let startX = windowWidth/2;
    let startY = windowHeight/2;
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let width = 500;
    let angle = -Math.PI / 2;
    let radianPer = (Math.PI * 2) / Object.keys(data).length;
    noStroke();
    Object.keys(data).forEach((i) => {
        fill(255);
        arc(startX, startY, width, width, angle, angle + radianPer, PIE);
        arc(startX, startY, 450, 450, angle, angle + radianPer, PIE);
        // add label here
        let textAngle = angle + radianPer / 2;
        // Use sine and cosine to determine the position for the text
        // Since sine is opposite / hypotenuse, taking the sine of the angle and
        // multiplying by distance gives us the vertical offset (i.e. the Y
        // coordinate).
        // Likewise with cosine for the X coordinate
        noStroke();
        fill(0);
        text(
        data[i].toString(),
        startX + cos(textAngle) * width / 2 * 0.95,
        startY + sin(textAngle) * width / 2 * 0.95
        );
        // Don't update angle until after calculating the angle for the label
        angle += radianPer;
        erase();
        circle(windowWidth/2, windowHeight/2, 450);
        noErase();
    });
}