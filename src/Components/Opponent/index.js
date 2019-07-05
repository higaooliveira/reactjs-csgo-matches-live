import React, { Component } from "react";

export default class Opponent extends Component {
  render() {
    return (
      <div className="opponent" key={this.props.team.id}>
        <img src={this.props.team.image_url} width="50" height="50" alt="" />
        <strong> {this.props.team.name}</strong>
      </div>
    );
  }
}
