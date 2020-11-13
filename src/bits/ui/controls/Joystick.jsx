import React from "react";
import ReactNipple from "react-nipple";

export default function Joystick() {
  return (
    <ReactNipple
      onMove={(evt, data) => {
        // broadcastEvent(events.ON_JOYSTICK_MOVED.name, data);
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
