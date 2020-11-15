import React, { useContext } from "react";

import GameContext from "../contexts/GameContext";
import ReactNipple from "react-nipple";
import events from "bits/game/events/events";

export default function Joystick() {
  const [, dipatchCanvasEvent] = useContext(GameContext);

  return (
    <ReactNipple
      onMove={(evt, data) => {
        dipatchCanvasEvent(
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
