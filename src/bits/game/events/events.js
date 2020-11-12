import onHomePressed from "bits/game/events/handlers/onHomePressed";
import onJoystickMoved from "bits/game/events/handlers/onJoystickMoved";
import onNextPlotPressed from "bits/game/events/handlers/onNextPlotPressed";
import onOpenGuestbookPressed from "bits/game/events/handlers/onOpenGuestbookPressed";
import onPlotChanged from "bits/game/events/handlers/onPlotChanged";
import onPlotChanging from "bits/game/events/handlers/onPlotChanging";
import onSampleTilePressed from "bits/game/events/handlers/onSampleTilePressed";

export default {
  ON_HOME_PRESSED: { name: "onHomePressed", handler: onHomePressed },
  ON_JOYSTICK_MOVED: { name: "onJoystickMoved", handler: onJoystickMoved },
  ON_NEXT_PLOT_PRESSED: {
    name: "onNextPlotPressed",
    handler: onNextPlotPressed,
  },
  ON_OPEN_GUESTBOOK_PRESSED: {
    name: "onOpenGuestbookPressed",
    handler: onOpenGuestbookPressed,
  },
  ON_PLOT_CHANGED: { name: "onPlotChanged", handler: onPlotChanged },
  ON_PLOT_CHANGING: { name: "onPlotChanging", handler: onPlotChanging },
  ON_SAMPLE_TILE_PRESSED: {
    name: "onSampleTilePressed",
    handler: onSampleTilePressed,
  },
};
