import React from "react";
import RoundButton from "bits/ui/controls/RoundButton";

export default function SampleTileButton() {
  return (
    <RoundButton
      icon="star"
      onClick={() => console.log("you pressed sample tile button")}
      size="massive"
    ></RoundButton>
  );
}
