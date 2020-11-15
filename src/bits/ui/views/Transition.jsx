import { Grid, Loader } from "semantic-ui-react";

import React from "react";

export default function Transition() {
  return (
    <Grid.Row>
      <Grid.Column verticalAlign="middle">
        <Loader active inverted></Loader>
      </Grid.Column>
    </Grid.Row>
  );
}
