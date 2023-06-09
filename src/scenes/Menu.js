export default class Menu extends Phaser.Scene {
    constructor() {
      super("Menu");
    }
  
    create() {
      this.add.image(400, 300, "backGround").setScale(1.2);
      
      let startButton = this.add.image(400, 400, "startButon").setInteractive();
  
      startButton.on("pointerdown", () => {
        startButton.setTexture("startButonPressed");
      });
  
      startButton.on("pointerup", () => {
    
        this.scene.start("juego");
      });
  
      startButton.on("pointerout", () => {
        startButton.setTexture("startButon");
      });
    }
  }