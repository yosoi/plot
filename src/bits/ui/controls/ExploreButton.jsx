import React, { useContext } from "react";

import GameContext from "../contexts/GameContext";
import RoundButton from "bits/ui/controls/RoundButton";
import StateContext from "../contexts/StateContext";
import events from "bits/game/events/events";
import states from "bits/states";

export default function ExploreButton(props) {
  const [, dipatchCanvasEvent] = useContext(GameContext);
  const [, setState] = useContext(StateContext);

  return (
    <RoundButton
      icon="find"
      {...props}
      onClick={() => {
        setState(states.EXPLORE);
        dipatchCanvasEvent(
          new CustomEvent(events.ON_EXPLORE_PRESSED.name, { detail: {} })
        );
      }}
    ></RoundButton>
  );
}
