import React from "react";
import RoundButton from "bits/ui/controls/RoundButton";

export default function NextPlotButton() {
  return (
    <RoundButton
      icon="arrow right"
      onClick={() => console.log("you pressed next plot button")}
    ></RoundButton>
  );
}
