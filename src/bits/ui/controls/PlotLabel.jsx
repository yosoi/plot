import React, { useContext } from "react";

import { Label } from "semantic-ui-react";
import PlotContext from "bits/ui/contexts/PlotContext";

export default function PlotLabel() {
  const plot = useContext(PlotContext);
  return plot ? (
    <Label content={plot.id.toUpperCase()} icon="hashtag"></Label>
  ) : (
    <></>
  );
}
