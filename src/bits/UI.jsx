import { Button, Grid, Label } from "semantic-ui-react";

import React from "react";
import ReactNipple from "react-nipple";

// TODO: implement game UI
export default function UI() {
  return (
    <div>
      <Grid
        style={{
          height: "100%",
          left: "1em",
          position: "absolute",
          top: "1em",
          width: "100%",
        }}
        textAlign="left"
        verticalAlign="top"
      >
        <Grid.Row columns={2} style={{ height: "25%" }} verticalAlign="middle">
          <Grid.Column floated="left">
            <Button circular icon="home" inverted></Button>
          </Grid.Column>
          <Grid.Column floated="right" textAlign="right">
            <Label
              color="black"
              content={"123abc".toUpperCase()}
              icon="hashtag"
            ></Label>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ height: "75%" }} verticalAlign="bottom">
          <Grid.Column>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column floated="left" verticalAlign="bottom">
                  <ReactNipple
                    onMove={(evt, data) => {
                      // TODO: handle joystick movement
                    }}
                    options={{
                      mode: "static",
                      position: { top: "50%", left: "50%" },
                    }}
                    style={{
                      width: 100,
                      height: 100,
                      position: "relative",
                    }}
                  ></ReactNipple>
                </Grid.Column>
                <Grid.Column floated="right" textAlign="right">
                  <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        <Button circular icon="arrow right" inverted></Button>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} verticalAlign="bottom">
                      <Grid.Column>
                        <Button circular icon="pencil" inverted></Button>
                      </Grid.Column>
                      <Grid.Column>
                        <Button
                          circular
                          icon="camera"
                          inverted
                          size="massive"
                        ></Button>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
