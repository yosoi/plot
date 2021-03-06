import React, { useContext } from "react";

import GameContext from "../contexts/GameContext";
import RoundButton from "bits/ui/controls/RoundButton";
import StateContext from "../contexts/StateContext";
import events from "bits/game/events/events";
import states from "bits/states";

export default function HomeButton() {
  const [, dipatchCanvasEvent] = useContext(GameContext);

  const [, setState] = useContext(StateContext);

  return (
    <RoundButton
      icon="home"
      onClick={() => {
        setState(states.CREATE);
        dipatchCanvasEvent(
          new CustomEvent(events.ON_HOME_PRESSED.name, { detail: {} })
        );
      }}
    ></RoundButton>
  );
}
