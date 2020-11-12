import Phaser from "phaser";
import React from "react";
import UI from "bits/ui/UI";
import createGame from "bits/game/createGame";
import preloadGame from "bits/game/preloadGame";
import usePhaser from "bits/ui/usePhaser";

// TODO: configure game for pixel art
export default function Game({ height, width }) {
  const [gameRef, dispatchCanvasEvent] = usePhaser((canvas) => {
    return {
      canvas: canvas,
      height: height,
      scene: {
        create: createGame,
        preload: preloadGame,
      },
      type: Phaser.CANVAS,
      width: width,
    };
  });

  return (
    <div
      style={{
        display: "inline-block",
        height: height,
        position: "relative",
        width: width,
      }}
    >
      <UI onEvent={(event) => dispatchCanvasEvent(event)}></UI>
      <canvas ref={gameRef}></canvas>
    </div>
  );
}
