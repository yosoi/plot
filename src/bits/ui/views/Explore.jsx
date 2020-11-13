import EditTileButton from "bits/ui/controls/EditTileButton";
import HomeButton from "bits/ui/controls/HomeButton";
import NextPlotButton from "../controls/NextPlotButton";
import OpenGuestbookButton from "bits/ui/controls/OpenGuestbookButton";
import Play from "bits/ui/views/Play";
import React from "react";
import SampleTileButton from "bits/ui/controls/SampleTileButton";

export default function Explore() {
  return (
    <Play
      contextButton={<HomeButton></HomeButton>}
      primaryButton={<SampleTileButton></SampleTileButton>}
      secondaryButton={<NextPlotButton></NextPlotButton>}
      tertiaryButton={<OpenGuestbookButton></OpenGuestbookButton>}
    ></Play>
  );
}
