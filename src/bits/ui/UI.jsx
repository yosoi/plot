import Create from "bits/ui/views/Create";
import Explore from "bits/ui/views/Explore";
import { Grid } from "semantic-ui-react";
import React from "react";

export default function UI({ onEvent }) {
  return (
    <Grid
      style={{
        height: "100%",
        left: "1em",
        position: "absolute",
        top: "1em",
        width: "100%",
      }}
      textAlign="left"
      verticalAlign="top"
    >
      <Explore></Explore>
    </Grid>
  );
}
