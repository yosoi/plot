import React, { useState } from "react";

import { DispatchCanvasEventProvider } from "bits/ui/contexts/DispatchCanvasEventContext";
import Phaser from "phaser";
import { PlotProvider } from "bits/ui/contexts/PlotContext";
import UI from "bits/ui/UI";
import createGame from "bits/game/createGame";
import preloadGame from "bits/game/preloadGame";
import usePhaser from "bits/ui/usePhaser";

// TODO: configure game for pixel art
export default function Game({ height, width }) {
  // ui tells game to load a plot
  // when plot is loaded, game fires event at ui with new plot info

  const [plot] = useState({ id: "123abc" });

  const [gameRef, dispatchCanvasEvent] = usePhaser((canvas) => {
    return {
      backgroundColor: "000000",
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
      <PlotProvider value={plot}>
        <DispatchCanvasEventProvider value={dispatchCanvasEvent}>
          <UI></UI>
        </DispatchCanvasEventProvider>
        <canvas ref={gameRef}></canvas>
      </PlotProvider>
    </div>
  );
}
