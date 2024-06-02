import { Scene } from "phaser";
import CardStack from "../objects/CardStack";

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

    const cardStack: CardStack = new CardStack(
      this,
      70,
      300,
      cards,
      "rubashka"
    );

    const playerOnePos = { x: 200, y: 400, isDrop: false };
    const playerTwoPos = { x: 200, y: 100, isDrop: false };

    //   for (let i = 0; i < 8; i++) {
    //     const cardd = this.add.image(60, 270, cards[i]).setScale(0.6);
    //     if (playerOnePos.isDrop === false) {
    //       this.tweens.add({
    //         targets: cardd,
    //         props: {
    //           x: { value: playerOnePos.x, duration: 700 },
    //           y: { value: playerOnePos.y, duration: 700 },
    //         },
    //         ease: "Linear",
    //         delay: 500 * i,
    //       });
    //       playerOnePos.isDrop = true;
    //       playerTwoPos.isDrop = false;
    //       playerOnePos.x += 100;
    //       cardLength -= 1;
    //       cardLengthText.setText(cardLength.toString());
    //     } else if (playerTwoPos.isDrop === false) {
    //       this.tweens.add({
    //         targets: cardd,
    //         props: {
    //           x: { value: playerTwoPos.x, duration: 700 },
    //           y: { value: playerTwoPos.y, duration: 700 },
    //         },
    //         ease: "Linear",
    //         delay: 500 * i,
    //       });
    //       playerTwoPos.isDrop = true;
    //       playerOnePos.isDrop = false;
    //       playerTwoPos.x += 100;
    //       cardLengthText.setText(cardLength.toString());
    //     }
    //   }
  }
}

export default MainScene;
