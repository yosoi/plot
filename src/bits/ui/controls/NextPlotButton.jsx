import React, { useContext } from "react";

import DispatchCanvasEventContext from "../contexts/DispatchCanvasEventContext";
import RoundButton from "bits/ui/controls/RoundButton";
import events from "bits/game/events/events";

export default function NextPlotButton() {
  const dipatchCanvasEvent = useContext(DispatchCanvasEventContext);

  return (
    <RoundButton
      icon="arrow right"
      onClick={() => {
        dipatchCanvasEvent(
          new CustomEvent(events.ON_NEXT_PLOT_PRESSED.name, { detail: {} })
        );
      }}
    ></RoundButton>
  );
}
