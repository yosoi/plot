import { useEffect, useRef } from "react";

import Phaser from "phaser";
import events from "bits/ui/events/events";

export default function usePhaser(configure) {
  const canvasRef = useRef();

  const dispatchCanvasEvent = (event) => {
    canvasRef.current.dispatchEvent(event);
  };

  useEffect(() => {
    Object.values(events).forEach((event) => {
      canvasRef.current.addEventListener(event.name, event.handler);
    });

    const config = configure(canvasRef.current);
    const game = new Phaser.Game(config);

    return () => {
      game.destroy();
      Object.values(events).forEach((event) => {
        canvasRef.current.removeEventListener(event.name, event.handler);
      });
    };
  });

  return [canvasRef, dispatchCanvasEvent];
}
