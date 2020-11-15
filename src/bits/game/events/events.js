import onAnalyzePressed from "bits/game/events/handlers/onAnalyzePressed";
import onEditTilePressed from "bits/game/events/handlers/onEditTilePressed";
import onEmotePressed from "bits/game/events/handlers/onEmotePressed";
import onExplorePressed from "bits/game/events/handlers/onExplorePressed";
import onHomePressed from "bits/game/events/handlers/onHomePressed";
import onJoystickMoved from "bits/game/events/handlers/onJoystickMoved";
import onNextPlotPressed from "bits/game/events/handlers/onNextPlotPressed";
import onSampleTilePressed from "bits/game/events/handlers/onSampleTilePressed";

const events = {
  ON_ANALYZE_PRESSED: {
    name: "onAnalyzePressed",
    handler: onAnalyzePressed,
  },
  ON_EDIT_TILE_PRESSED: {
    name: "onEditTilePressed",
    handler: onEditTilePressed,
  },
  ON_EMOTE_PRESSED: {
    name: "onEmotePressed",
    handler: onEmotePressed,
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
  ON_SAMPLE_TILE_PRESSED: {
    name: "onSampleTilePressed",
    handler: onSampleTilePressed,
  },
};

export default events;
