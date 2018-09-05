import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Maud_Stevens_Wagner.jpeg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1> Ink Charmer </h1>

              <hr />

              <p> Painter | Tattoo Artist | Glass Etcher</p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
