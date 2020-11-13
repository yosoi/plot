import React from "react";
import RoundButton from "bits/ui/controls/RoundButton";

export default function AddTileButton() {
  return (
    <RoundButton
      icon="add"
      onClick={() => console.log("you pressed upload tile button")}
    ></RoundButton>
  );
}
