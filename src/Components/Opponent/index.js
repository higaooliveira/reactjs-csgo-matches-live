import React, { Component } from "react";
import "./opponents.css";
export default class Opponent extends Component {
  render() {
    return (
      <div className="opponent" key={this.props.team.id}>
        <div className="image">
          <img src={this.props.team.image_url} width="50" height="50" alt="" />
        </div>
        <strong> {this.props.team.name}</strong>
        <div className="score">
          <strong>2(15)</strong>
        </div>
      </div>
    );
  }
}
