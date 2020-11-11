import Phaser from "phaser";
import React from "react";
import UI from "bits/UI";
import createGame from "bits/createGame";
import preloadGame from "bits/preloadGame";
import usePhaser from "bits/usePhaser";

// TODO: configure game for pixel art
export default function Game() {
  const gameRef = usePhaser((canvas) => {
    return {
      canvas: canvas,
      height: 300,
      scene: {
        create: createGame,
        preload: preloadGame,
      },
      type: Phaser.CANVAS,
      width: 400,
    };
  });

  return (
    <>
      <canvas
        display="inline"
        height={300}
        ref={gameRef}
        style={{ backgroundColor: "#000000" }}
        width={400}
      ></canvas>
    </>
  );
}
