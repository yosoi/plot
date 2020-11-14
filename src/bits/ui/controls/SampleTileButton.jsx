import React, { useContext } from "react";

import DispatchCanvasEventContext from "../contexts/DispatchCanvasEventContext";
import RoundButton from "bits/ui/controls/RoundButton";
import events from "bits/game/events/events";

export default function SampleTileButton() {
  const dipatchCanvasEvent = useContext(DispatchCanvasEventContext);

  return (
    <RoundButton
      icon="star"
      onClick={() => {
        dipatchCanvasEvent(
          new CustomEvent(events.ON_SAMPLE_TILE_PRESSED.name, { detail: {} })
        );
      }}
      size="massive"
    ></RoundButton>
  );
}
