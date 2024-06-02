import Phaser from "phaser";

export default class Player extends Phaser.GameObjects.Container {
  private cards: Phaser.GameObjects.Sprite[];
  constructor(scene: Phaser.Scene, x: number, y: number, playerNumber: number) {
    super(scene);
    this.cards = [];
  }

  addCard(card: Phaser.GameObjects.Sprite) {
    this.cards.push(card);
  }
}
