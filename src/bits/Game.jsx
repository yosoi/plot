import React, { useEffect, useState } from "react";

import { ConfigurationProvider } from "bits/ConfigurationContext";
import Phaser from "phaser";

export default function Game() {
  const CONTAINER_ID = "game";

  const [configuration] = useState({
    backgroundColor: "#000000",
    parent: CONTAINER_ID,
  });

  useEffect(() => {
    new Phaser.Game(configuration);
  }, [configuration]);

  return (
    <ConfigurationProvider value={configuration}>
      <div id={CONTAINER_ID}></div>
    </ConfigurationProvider>
  );
}
