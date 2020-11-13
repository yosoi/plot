import React from "react";
import RoundButton from "bits/ui/controls/RoundButton";

export default function ExploreButton() {
  return (
    <RoundButton
      icon="find"
      onClick={() => console.log("you pressed explore button")}
    ></RoundButton>
  );
}
