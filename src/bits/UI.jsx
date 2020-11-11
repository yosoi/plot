import { Grid } from "semantic-ui-react";
import React from "react";

export default function UI() {
  return (
    <Grid style={{ backgroundColor: "blue" }}>
      <Grid.Row>
        <Grid.Column>
          <p>Hello</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
