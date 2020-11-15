import React, { useState } from "react";

import Analyze from "./views/Analyze";
import Create from "bits/ui/views/Create";
import Explore from "bits/ui/views/Explore";
import { Grid } from "semantic-ui-react";
import { StateProvider } from "./contexts/StateContext";
import Transition from "bits/ui/views/Transition";
import Upload from "./views/Upload";
import states from "bits/states";

export default function UI() {
  const [state, setState] = useState(states.CREATE);

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
      <StateProvider value={[state, setState]}>
        {state === states.CREATE ? (
          <Create></Create>
        ) : state === states.EXPLORE ? (
          <Explore></Explore>
        ) : state === states.UPLOAD ? (
          <Upload></Upload>
        ) : state === states.ANALYZE ? (
          <Analyze></Analyze>
        ) : (
          <Transition></Transition>
        )}
      </StateProvider>
    </Grid>
  );
}
