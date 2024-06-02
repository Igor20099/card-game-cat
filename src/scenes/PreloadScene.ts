import { Scene } from "phaser";

class PreloadScene extends Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    //Тут загружаем игровые ассеты из папки public
    this.load.image("six-clubs", "/sprites/cards/6-clubs.png");
    this.load.image("seven-clubs", "/sprites/cards/7-clubs.png");
    this.load.image("eight-clubs", "/sprites/cards/8-clubs.png");
    this.load.image("nine-clubs", "/sprites/cards/9-clubs.png");
    this.load.image("ten-clubs", "/sprites/cards/10-clubs.png");
    this.load.image("j-clubs", "/sprites/cards/j-clubs.png");
    this.load.image("q-clubs", "/sprites/cards/q-clubs.png");
    this.load.image("k-clubs", "/sprites/cards/k-clubs.png");
    this.load.image("a-clubs", "/sprites/cards/a-clubs.png");

    this.load.image("six-diamonds", "/sprites/cards/6-diamonds.png");
    this.load.image("seven-diamonds", "/sprites/cards/7-diamonds.png");
    this.load.image("eight-diamonds", "/sprites/cards/8-diamonds.png");
    this.load.image("nine-diamonds", "/sprites/cards/9-diamonds.png");
    this.load.image("ten-diamonds", "/sprites/cards/10-diamonds.png");
    this.load.image("j-diamonds", "/sprites/cards/j-diamonds.png");
    this.load.image("q-diamonds", "/sprites/cards/q-diamonds.png");
    this.load.image("k-diamonds", "/sprites/cards/k-diamonds.png");
    this.load.image("a-diamonds", "/sprites/cards/a-diamonds.png");

    this.load.image("six-spades", "/sprites/cards/6-spades.png");
    this.load.image("seven-spades", "/sprites/cards/7-spades.png");
    this.load.image("eight-spades", "/sprites/cards/8-spades.png");
    this.load.image("nine-spades", "/sprites/cards/9-spades.png");
    this.load.image("ten-spades", "/sprites/cards/10-spades.png");
    this.load.image("j-spades", "/sprites/cards/j-spades.png");
    this.load.image("q-spades", "/sprites/cards/q-spades.png");
    this.load.image("k-spades", "/sprites/cards/k-spades.png");
    this.load.image("a-spades", "/sprites/cards/a-spades.png");

    this.load.image("six-hearts", "/sprites/cards/6-hearts.png");
    this.load.image("seven-hearts", "/sprites/cards/7-hearts.png");
    this.load.image("eight-hearts", "/sprites/cards/8-hearts.png");
    this.load.image("nine-hearts", "/sprites/cards/9-hearts.png");
    this.load.image("ten-hearts", "/sprites/cards/10-hearts.png");
    this.load.image("j-hearts", "/sprites/cards/j-hearts.png");
    this.load.image("q-hearts", "/sprites/cards/q-hearts.png");
    this.load.image("k-hearts", "/sprites/cards/k-hearts.png");
    this.load.image("a-hearts", "/sprites/cards/a-hearts.png");

    this.load.image("rubashka", "/sprites/cards/rubashka.png");
  }

  create() {
    //Переходим после загрузки игровых ассетов на новую сцену
    this.scene.start("MainScene");
  }
}

export default PreloadScene;
