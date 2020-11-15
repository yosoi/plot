import { Icon } from "semantic-ui-react";
import React from "react";

export default function CloseIcon({ onClick }) {
  return (
    <Icon
      onClick={onClick}
      onMouseLeave={() => {
        console.log("leave");
      }}
      onMouseEnter={() => {
        console.log("enter");
      }}
      name="close"
    ></Icon>
  );
}
