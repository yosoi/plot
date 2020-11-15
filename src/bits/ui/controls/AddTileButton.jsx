import React, { useContext } from "react";

import RoundButton from "bits/ui/controls/RoundButton";
import StateContext from "bits/ui/contexts/StateContext";
import states from "bits/states";

export default function AddTileButton() {
  const [, setState] = useContext(StateContext);

  return (
    <RoundButton
      icon="add"
      onClick={() => setState(states.UPLOAD)}
    ></RoundButton>
  );
}
