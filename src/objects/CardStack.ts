import Phaser from "phaser";

export default class CardStack extends Phaser.GameObjects.Container {
  private cards: string[];
  private cardTextLength: Phaser.GameObjects.Text;
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    cards: string[],
    sprite: string
  ) {
    super(scene);
    this.x = x;
    this.y = y;
    this.cards = cards;
    this.cardTextLength = new Phaser.GameObjects.Text(
      scene,
      x,
      y - 80,
      this.cards.length.toString(),
      { font: "bold 24px Arial" }
    );
    const rubashka = new Phaser.GameObjects.Sprite(
      scene,
      x,
      y,
      sprite
    ).setScale(0.6);
    this.scene.add.existing(this.cardTextLength).setDepth(2).setOrigin(0.5);
    this.scene.add.existing(rubashka);
  }

  getCard() {
    const card = this.cards.pop();
    this.cardTextLength.setText(this.cards.length.toString());
    return card;
  }
}
