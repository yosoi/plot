import EmoteButton from "../controls/EmoteButton";
import HomeButton from "bits/ui/controls/HomeButton";
import NextPlotButton from "../controls/NextPlotButton";
import Play from "bits/ui/views/Play";
import React from "react";
import SampleTileButton from "bits/ui/controls/SampleTileButton";

export default function Explore() {
  return (
    <Play
      contextButton={<HomeButton></HomeButton>}
      guestbookButton={<EmoteButton></EmoteButton>}
      primaryButton={<SampleTileButton></SampleTileButton>}
      secondaryButton={<NextPlotButton></NextPlotButton>}
    ></Play>
  );
}
