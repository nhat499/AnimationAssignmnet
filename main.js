let ASSET_MANAGER = new AssetManager();
let gameEngine = new GameEngine();


// queue download of all images
ASSET_MANAGER.queueDownLoad("sprites/slime.png");
// ASSET_MANAGER.queueDownLoad();
// ASSET_MANAGER.queueDownLoad();

ASSET_MANAGER.downloadAll(function () {              // function() is a call back function, it is call when downloadAll finish running
    //let slimeSpriteSheetLeft = ASSET_MANAGER.getAssset("sprites/slimeLeft.png");
    //let slimeSpriteSheetRight = ASSET_MANAGER.getAssset("sprites/slimeRight.png");
    let canvas = document.getElementById("gameWorld");  // orgin is top left corner
    //canvas.appendChild(slimeSpriteSheet); // testing assemanager -> good
    let ctx = canvas.getContext("2d"); // the pen need to update be4 drawing;
    //console.log(ctx);

    //ctx.drawImage(slimeSpriteSheet, 20, 90, 230, 240, 0, 0, 230, 240);
    
    let slime = new Slime(gameEngine, 500, 300);

    gameEngine.addEntity(slime);

    gameEngine.init(ctx);
    //gameEngine.addEntity(new SceneManager(gameEngine));  for later, tells you what lv the game is one
    gameEngine.start();
});

// drawing notes

// ctx.fillStyle = "white"; // the inside of shape
    // ctx.strokeStyle = "white"; // the outline of shape
    // ctx.fillRect(x,y,w,h) // draw rectangle and fill
    // ctx.strokeRect(x,y,w,h) // draw outline of rect

    // cirle
    // ctx.beginPath();
            // x , y,  r,                  0: start at 0 radian, end at : 2*pi radian 
    // ctx.arc(50, 50, 25, 0, 2*math.pi); 
    // ctx.fill(); fill in the arc
    // ctx. stroke();   outline the arc

    // line segment
    // ctx beginPath();
    // ctx.moveTo(100, 100); // pick up pen to new point;
    // ctx.lineTo(200,100); // start from ^ and draw to here
    // ctx.stroke(); // draws

    // ctx.drawImage(img, dx, dy); // draw regular size
    // ctx.drawImage(img, dx, dy, dw, dh); // draw and scale img
    // ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh); // draw a part of the image

    // transformations : translation, reflection, rotation
    // translation: move the origan of the canvas from (0,0) to new point
    // refelction: refelct horizaontally or vertically // save memmory
    // rotation: rotate the canvas not the image