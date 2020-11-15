import { Button, Grid, Input, Segment } from "semantic-ui-react";
import React, { useContext } from "react";

import StateContext from "bits/ui/contexts/StateContext";
import states from "bits/states";

// TODO: restyle this to match Analyze view
// TODO: check file size limit
// TODO: add info hover circle with tooltip restrictions

export default function Upload({ onValidate, onValidated }) {
  const [, setState] = useContext(StateContext);

  return (
    <Grid.Row verticalAlign="middle">
      <Grid.Column>
        <Segment basic>
          <Input
            accept=".png,.gif"
            action
            fluid
            multiple
            onChange={(event, data) =>
              onValidate(event, data)
                .then((event, data) => onValidated(event, data))
                .catch((error) => {
                  // TODO: display error on input
                  console.log(error);
                })
            }
            type="file"
          >
            <input></input>
            <Button
              icon="close"
              onClick={() => setState(states.CREATE)}
            ></Button>
          </Input>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  );
}
