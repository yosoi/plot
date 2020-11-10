import React, { useEffect, useState } from "react";

import { ConfigurationProvider } from "bits/ConfigurationContext";
import { Grid } from "semantic-ui-react";
import Phaser from "phaser";
import play from "bits/play";

export default function Game() {
  const CONTAINER_ID = "game";

  const [configuration] = useState({
    backgroundColor: "#000000",
    scale: {
      height: 300,
      parent: CONTAINER_ID,
      width: 400,
    },
    scene: {
      create: play,
    },
    type: Phaser.AUTO,
  });

  useEffect(() => {
    new Phaser.Game(configuration);
  }, [configuration]);

  return (
    <ConfigurationProvider value={configuration}>
      <Grid
        style={{ height: "100vh" }}
        textAlign="center"
        verticalAlign="middle"
      >
        <Grid.Row>
          <Grid.Column>
            <div id={CONTAINER_ID}></div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </ConfigurationProvider>
  );
}
