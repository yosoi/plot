import gameEvents from "bits/ui/events/events";
import uiEvents from "bits/game/events/events";

export default function preloadGame() {
  const canvas = this.game.config.canvas;

  Object.values(uiEvents).forEach((event) => {
    canvas.addEventListener(event.name, event.handler);
  });

  this.game.dispatchCanvasEvent = (event) => {
    canvas.dispatchEvent(event);
  };

  // this.game.dispatchCanvasEvent(
  //   new CustomEvent(gameEvents.ON_PLOT_LOADING.name, { detail: {} })
  // );

  // TODO: load the tilemap data in phaser scene object
}
