import React from "react";
import RoundButton from "bits/ui/controls/RoundButton";

export default function HomeButton() {
  return (
    <RoundButton
      icon="home"
      onClick={() => console.log("you pressed home button")}
    ></RoundButton>
  );
}
