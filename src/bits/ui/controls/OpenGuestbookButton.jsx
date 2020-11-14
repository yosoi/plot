import React, { useContext } from "react";

import DispatchCanvasEventContext from "../contexts/DispatchCanvasEventContext";
import RoundButton from "bits/ui/controls/RoundButton";
import events from "bits/game/events/events";

export default function OpenGuestbookButton() {
  const dipatchCanvasEvent = useContext(DispatchCanvasEventContext);

  return (
    <RoundButton
      icon="comment"
      onClick={() => {
        dipatchCanvasEvent(
          new CustomEvent(events.ON_OPEN_GUESTBOOK_PRESSED.name, { detail: {} })
        );
      }}
    ></RoundButton>
  );
}
