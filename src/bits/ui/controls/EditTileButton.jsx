import React, { useContext } from "react";

import GameContext from "../contexts/GameContext";
import RoundButton from "bits/ui/controls/RoundButton";
import events from "bits/game/events/events";

export default function EditTileButton() {
  const [, dipatchCanvasEvent] = useContext(GameContext);

  return (
    <RoundButton
      icon="paint brush"
      onClick={() => {
        dipatchCanvasEvent(
          new CustomEvent(events.ON_EDIT_TILE_PRESSED.name, { detail: {} })
        );
      }}
      size="massive"
    ></RoundButton>
  );
}
