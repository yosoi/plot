import React, { useContext } from "react";

import GameContext from "../contexts/GameContext";
import RoundButton from "bits/ui/controls/RoundButton";
import events from "bits/game/events/events";

export default function HomeButton() {
  const [, dipatchCanvasEvent] = useContext(GameContext);

  return (
    <RoundButton
      icon="heart"
      onClick={() => {
        dipatchCanvasEvent(
          new CustomEvent(events.ON_EMOTE_PRESSED.name, { detail: {} })
        );
      }}
    ></RoundButton>
  );
}
