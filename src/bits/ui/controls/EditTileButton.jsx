import React from "react";
import RoundButton from "bits/ui/controls/RoundButton";

export default function EditTileButton() {
  return (
    <RoundButton
      icon="paint brush"
      onClick={() => console.log("you pressed edit tile button")}
      size="massive"
    ></RoundButton>
  );
}
