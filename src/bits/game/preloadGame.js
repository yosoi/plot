import events from "bits/game/events/events";

export default function preloadGame() {
  Object.values(events).forEach((event) => {
    this.game.config.canvas.addEventListener(event.name, event.handler);
  });

  // TODO: load the tilemap data in phaser scene object
}
