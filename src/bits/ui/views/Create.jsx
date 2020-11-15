import AddTileButton from "bits/ui/controls/AddTileButton";
import AnalyzeButton from "../controls/AnalyzeButton";
import EditTileButton from "bits/ui/controls/EditTileButton";
import ExploreButton from "bits/ui/controls/ExploreButton";
import Play from "bits/ui/views/Play";
import React from "react";

export default function Create() {
  return (
    <Play
      contextButton={<ExploreButton></ExploreButton>}
      guestbookButton={<AnalyzeButton></AnalyzeButton>}
      primaryButton={<EditTileButton></EditTileButton>}
      secondaryButton={<AddTileButton></AddTileButton>}
    ></Play>
  );
}
