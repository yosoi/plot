import Create from "./views/Create";
import Explore from "bits/ui/views/Explore";
import { Grid } from "semantic-ui-react";
import React from "react";
import Transition from "./views/Transition";

export default function UI({}) {
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
      <Transition></Transition>
    </Grid>
  );
}
