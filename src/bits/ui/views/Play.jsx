import { Grid } from "semantic-ui-react";
import Joystick from "bits/ui/controls/Joystick";
import PlotLabel from "bits/ui/controls/PlotLabel";
import React from "react";

export default function Play({
  contextButton,
  primaryButton,
  secondaryButton,
  tertiaryButton,
}) {
  return (
    <>
      <Grid.Row columns={2} style={{ height: "25%" }} verticalAlign="middle">
        <Grid.Column floated="left">{contextButton}</Grid.Column>
        <Grid.Column floated="right" textAlign="right">
          <PlotLabel></PlotLabel>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ height: "75%" }} verticalAlign="bottom">
        <Grid.Column>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column floated="left" verticalAlign="bottom">
                <Joystick></Joystick>
              </Grid.Column>
              <Grid.Column floated="right" textAlign="right">
                <Grid>
                  <Grid.Row>
                    <Grid.Column>{secondaryButton}</Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={2} verticalAlign="bottom">
                    <Grid.Column>{tertiaryButton}</Grid.Column>
                    <Grid.Column>{primaryButton}</Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </>
  );
}
