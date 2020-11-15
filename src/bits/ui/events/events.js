import onPlotLoaded from "bits/ui/events/handlers/onPlotLoaded";
import onPlotLoading from "bits/ui/events/handlers/onPlotLoading";

const events = {
  ON_PLOT_LOADED: {
    name: "onPlotLoaded",
    handler: onPlotLoaded,
  },
  ON_PLOT_LOADING: {
    name: "onPlotLoading",
    handler: onPlotLoading,
  },
};

export default events;
