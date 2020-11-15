import {
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";
import React, { useContext, useState } from "react";

import CloseIcon from "../controls/CloseIcon";
import PlotContext from "../contexts/PlotContext";
import StateContext from "../contexts/StateContext";
import states from "bits/states";

export default function Analyze() {
  // TODO: change close icon color on hover

  const plot = useContext(PlotContext);
  const [, setState] = useContext(StateContext);

  return (
    <Grid.Row verticalAlign="middle">
      <Grid.Column>
        <Segment attached="top">
          <Grid columns={2}>
            <Grid.Row columns={2} verticalAlign="middle">
              <Grid.Column>
                <Header as="h5">
                  <Icon name="pie chart"></Icon>
                  <Header.Content>Stats</Header.Content>
                </Header>
              </Grid.Column>
              <Grid.Column textAlign="right">
                <CloseIcon onClick={() => setState(states.CREATE)}></CloseIcon>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment attached="bottom">
          <Grid>
            <Grid.Row columns={2} textAlign="center">
              <Grid.Column>
                <Statistic label="stars" value={plot.stars}></Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic label="hearts" value={plot.hearts}></Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider vertical>
            <Icon name="star"></Icon>
          </Divider>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  );
}
