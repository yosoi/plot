import { Button, Modal } from "semantic-ui-react";
import React, { useContext, useState } from "react";

import GameContext from "../contexts/GameContext";

export default function ModalMenu({
  actions,
  children,
  header,
  image,
  size,
  trigger,
}) {
  const game = useContext(GameContext);
  const [open, setOpen] = useState(true);

  return (
    <Modal
      dimmer="inverted"
      mountNode={game.current}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size={size}
      trigger={trigger}
    >
      <Modal.Header {...header}></Modal.Header>
      <Modal.Content>{children}</Modal.Content>
      <Modal.Actions>
        <Button content="Cancel" onClick={() => setOpen(false)}></Button>
        <Button
          content="Upload"
          icon="add"
          labelPosition="left"
          onClick={() => {
            console.log("hi");
          }}
          primary
        ></Button>
      </Modal.Actions>
    </Modal>
  );
}
