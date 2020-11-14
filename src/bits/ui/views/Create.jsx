import React, { useState } from "react";

import AddTileButton from "bits/ui/controls/AddTileButton";
import EditTileButton from "bits/ui/controls/EditTileButton";
import ExploreButton from "bits/ui/controls/ExploreButton";
import OpenGuestbookButton from "bits/ui/controls/OpenGuestbookButton";
import Play from "bits/ui/views/Play";

export default function Create() {
  return (
    <Play
      contextButton={<ExploreButton></ExploreButton>}
      primaryButton={<EditTileButton></EditTileButton>}
      secondaryButton={<AddTileButton></AddTileButton>}
      tertiaryButton={<OpenGuestbookButton></OpenGuestbookButton>}
    ></Play>
  );
}
