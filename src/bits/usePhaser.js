import { useEffect, useRef } from "react";

import Phaser from "phaser";

export default function usePhaser(configure) {
  const canvasRef = useRef();

  useEffect(() => {
    const config = configure(canvasRef.current);
    const game = new Phaser.Game(config);

    return () => game.destroy();
  });

  return canvasRef;
}
