import React from "react";
import RoundButton from "bits/ui/controls/RoundButton";

export default function OpenGuestbookButton() {
  return (
    <RoundButton
      icon="comment"
      onClick={() => console.log("you pressed open guestbook button")}
    ></RoundButton>
  );
}
