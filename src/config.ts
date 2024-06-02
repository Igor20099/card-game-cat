import Phaser from "phaser";
import { scenes } from "./scenes/scenes";
//Настройка проекта
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "app",
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 200 },
    },
  },
  scene: scenes,
};

export default config;
