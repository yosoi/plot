import onEditTilePressed from "bits/game/events/handlers/onEditTilePressed";
import onExplorePressed from "bits/game/events/handlers/onExplorePressed";
import onHomePressed from "bits/game/events/handlers/onHomePressed";
import onJoystickMoved from "bits/game/events/handlers/onJoystickMoved";
import onNextPlotPressed from "bits/game/events/handlers/onNextPlotPressed";
import onOpenGuestbookPressed from "bits/game/events/handlers/onOpenGuestbookPressed";
import onSampleTilePressed from "bits/game/events/handlers/onSampleTilePressed";

export default {
  ON_EDIT_TILE_PRESSED: {
    name: "onEditTilePressed",
    handler: onEditTilePressed,
  },
  ON_EXPLORE_PRESSED: {
    name: "onExplorePressed",
    handler: onExplorePressed,
  },
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
  ON_SAMPLE_TILE_PRESSED: {
    name: "onSampleTilePressed",
    handler: onSampleTilePressed,
  },
};
