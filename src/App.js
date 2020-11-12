import Game from "bits/ui/Game";
import { Grid } from "semantic-ui-react";
import React from "react";

function App() {
  return (
    <Grid style={{ height: "100vh" }} textAlign="center" verticalAlign="middle">
      <Grid.Row>
        <Grid.Column>
          <Game height={300} width={400}></Game>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
