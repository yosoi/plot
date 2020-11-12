import { Button, Grid, Label } from "semantic-ui-react";

import React from "react";
import ReactNipple from "react-nipple";
import events from "bits/game/events/events";

export default function UI({ onEvent }) {
  const broadcastEvent = (name, data) => {
    onEvent(new CustomEvent(name, { detail: data }));
  };

  // TODO: define event names in enum in a separate file and import it
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
            <Button
              circular
              icon="home"
              inverted
              onClick={() => broadcastEvent(events.ON_HOME_PRESSED.name, {})}
            ></Button>
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
                      broadcastEvent(events.ON_JOYSTICK_MOVED.name, data);
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
                        <Button
                          circular
                          icon="arrow right"
                          inverted
                          onClick={() =>
                            broadcastEvent(events.ON_NEXT_PLOT_PRESSED.name, {})
                          }
                        ></Button>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} verticalAlign="bottom">
                      <Grid.Column>
                        <Button
                          circular
                          icon="comment"
                          inverted
                          onClick={() =>
                            broadcastEvent(
                              events.ON_OPEN_GUESTBOOK_PRESSED.name,
                              {}
                            )
                          }
                        ></Button>
                      </Grid.Column>
                      <Grid.Column>
                        <Button
                          circular
                          icon="camera"
                          inverted
                          onClick={() =>
                            broadcastEvent(
                              events.ON_SAMPLE_TILE_PRESSED.name,
                              {}
                            )
                          }
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
