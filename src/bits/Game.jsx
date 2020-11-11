import { Button, Grid, Label } from "semantic-ui-react";

import Phaser from "phaser";
import React from "react";
import UI from "bits/UI";
import createGame from "bits/createGame";
import preloadGame from "bits/preloadGame";
import usePhaser from "bits/usePhaser";

// TODO: configure game for pixel art
export default function Game({ height, width }) {
  const gameRef = usePhaser((canvas) => {
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
      <UI></UI>
      <canvas ref={gameRef}></canvas>
    </div>
  );
}
