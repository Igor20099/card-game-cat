import GameState from "../states/GameState";

class GameManager {
  private static instance: GameManager | null = null;

  gameState: GameState = GameState.INIT;

  private constructor() {
    //пустой конструктор
  }

  static getInstance(): GameManager {
    if (GameManager.instance === null) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }

  public updateGameState(newState: GameState): void {
    this.gameState = newState;
    //здесь логика с состоянием игры
  }
}

export default GameManager;
