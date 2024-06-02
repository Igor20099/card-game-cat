import { Scene } from "phaser";

class MainScene extends Scene {
  constructor() {
    super("MainScene");
  }

  create() {
    const cards = [
      "six-clubs",
      "seven-clubs",
      "eight-clubs",
      "nine-clubs",
      "ten-clubs",
      "j-clubs",
      "q-clubs",
      "k-clubs",
      "a-clubs",
      "six-diamonds",
      "seven-diamonds",
      "eight-diamonds",
      "nine-diamonds",
      "ten-diamonds",
      "j-diamonds",
      "q-diamonds",
      "k-diamonds",
      "a-diamonds",
      "six-spades",
      "seven-spades",
      "eight-spades",
      "nine-spades",
      "ten-spades",
      "j-spades",
      "q-spades",
      "k-spades",
      "a-spades",
      "six-hearts",
      "seven-hearts",
      "eight-hearts",
      "nine-hearts",
      "ten-hearts",
      "j-hearts",
      "q-hearts",
      "k-hearts",
      "a-hearts",
    ];

    this.add.text(50, 200, cards.length.toString());
    const cardRubashka = this.add.image(60, 270, "rubashka").setScale(0.5);
    const cardRubashka1 = this.add.image(60, 270, "rubashka").setScale(0.5);

    const playerOnePos = { x: 200, y: 100 };
    const playerTwoPos = { x: 200, y: 400 };

    for (let i = 0; i < 4; i++) {
      const cardd = this.add.image(60, 270, cards[i]).setScale(0.6);
      this.tweens.add({
        targets: cardd,
        props: {
          x: { value: playerTwoPos.x, duration: 700 },
          y: { value: playerTwoPos.y, duration: 700 },
        },
        ease: "Linear",
        delay: 500,
      });
      playerTwoPos.x += 100;
      setTimeout(() => {
        console.log(1);
      }, 1000);
    }
  }
}

export default MainScene;
