import { Scene } from "phaser";

class PreloadScene extends Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    //Тут загружаем игровые ассеты из папки public
  }

  create() {
    //Переходим после загрузки игровых ассетов на новую сцену
    this.scene.start("MainScene");
  }
}

export default PreloadScene;
