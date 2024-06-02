import Phaser from "phaser";

enum Suit {
  HEARTS,
  SPADES,
  DIAMONDS,
  CLUBS,
}

class Card extends Phaser.GameObjects.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    backCardSrpite: string,
    cardSprite: string,
    name: string,
    suit: Suit
  ) {
    super(scene, x, y, backCardSrpite);
  }
}
