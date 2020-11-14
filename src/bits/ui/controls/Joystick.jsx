import React, { useContext } from "react";

import DispatchCanvasEventContext from "../contexts/DispatchCanvasEventContext";
import ReactNipple from "react-nipple";
import RoundButton from "bits/ui/controls/RoundButton";
import StateContext from "../contexts/StateContext";
import events from "bits/game/events/events";
import states from "bits/states";

export default function Joystick() {
  const dispatchCanvasEvent = useContext(DispatchCanvasEventContext);

  return (
    <ReactNipple
      onMove={(evt, data) => {
        dispatchCanvasEvent(
          new CustomEvent(events.ON_JOYSTICK_MOVED.name, { detail: data })
        );
      }}
      options={{
        mode: "static",
        position: { top: "50%", left: "50%" },
      }}
      style={{
        width: 100,
        height: 100,
        position: "relative",
      }}
    ></ReactNipple>
  );
}
