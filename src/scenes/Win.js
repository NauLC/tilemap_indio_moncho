export default class Win extends Phaser.Scene {
  constructor() {
    super({ key: "Win" });
  }

  winnerSound;
  create() {
    //this.winnerSound = this.sound.add("won");
    //this.winnerSound.play();
    this.add
      .image(480, 320, "congrats")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("Level1"));
  }
}
