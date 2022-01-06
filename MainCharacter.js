class MainCharacter {                      
    constructor(game, x,y) {    // all entites should have construture
        Object.assign(this, {game, x, y});
        this.spritesheet = ASSET_MANAGER.getAssset("sprites/slime.png");
        this.scale = 1;

        // state variable
        this.facing = 0; // 0 right, 1 = left;
        this.action = 0; // 0 idle, 1 = moving, 2 = taking dmg, 3 = dying;

        // animation
        this.animations = []; // list of animations
        this.loadAnimations();

        // this.walkLeft = new Animator(this.spritesheet, 3159, 238, 242, 246, 7, 0.23, 3, false, true);
        // this.walkRight = new Animator(this.spritesheet, 3159, 238, -242, 246, 7, 0.23, -3, false, true);

    };

    loadAnimations() {
        for (let i = 0; i < 4; i++) { // 4 states
            this.animations.push([]);
            for (let j = 0; j < 2; j++) { // 2 direction
                this.animations[i].push([]);
            } 
        }

        // facing right idle
        this.animations[0][0] = new Animator(this.spritesheet, )
    }


    update() {                  // must have update method
        // logic to update it's state, background have no state, just have x,y
    };

    draw(ctx) {                 // must have draw method

        // this.walkLeft.drawFrame(this.game.clockTick, ctx, 400,400,.75);
        // this.walkRight.drawFrame(this.game.clockTick, ctx, 300,400,.75);

    };
}