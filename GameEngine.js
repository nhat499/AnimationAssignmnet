class GameEngine {
    constructor() {
        this.entities = []; // all the thing that are in the game
        this.entitiesToAdd = [];
        this.ctx = null;
        this.surfaceWidth = null;
        this.surfaceHeight = null;

        // input controls 
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.jump = false;
    }

    init(ctx) { // call after the page has loaded
        this.ctx = ctx;
        this.surfaceWidth = this.ctx.canvas.width;
        this.surfaceHeight = this.ctx.canvas.height;
        this.startInput();
        this.timer = new Timer();
    }

    // update render loop (the heart of it)
    start() {
        let self = this;
        (function gameLoop() {
            self.loop();    // does stuff on our end
            //requestAnimFrame(gameLoop, that.ctx.canvas); // for backward compatiblity
            requestAnimationFrame(gameLoop, self.ctx.canvas); //requestAnimation -> build in method, that will call back when the monitor finish updating the frame
        })();
    };



    startInput() {
    // teacher will go over this later
    }

    addEntity(entity) {
        this.entitiesToAdd.push(entity);
    };

    draw() {
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.save();
        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].draw(this.ctx);                  // thing that are draw last are on top
        }
    }

    update() {
        let entitiesCount = this.entities.length;
        for (let i = 0; i < entitiesCount; i++) {
            let entity = this.entities[i];
            if (!entity.removeFromWorld) {
                entity.update();              // update all entites
            }
        }

        for (let i = this.entities.length -1; i >= 0; i--) {
            if (this.entities[i].removeFromWorld) {
                this.entities.splice(i, 1);       // delete entities if they are removeFromWorld
            }
        }

        // add new things
        this.entities = this.entities.concat(this.entitiesToAdd);
        this.entitiesToAdd = [];
    }

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    }
}