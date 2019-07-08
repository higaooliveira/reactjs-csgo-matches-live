import React, { Component } from "react"
import "./opponents.css"
export default class Opponent extends Component {
  render() {
    const teamResult = this.props.results.filter(
      result => result.team_id === this.props.team.id,
    )

    return (
      <div className="opponent" key={this.props.team.id}>
        <div className="image">
          <img src={this.props.team.image_url} width="50" height="50" alt="" />
        </div>
        <strong> {this.props.team.name}</strong>
        <div className="score">
          {teamResult[0].score && <strong>teamResult[0].score</strong>}
        </div>
      </div>
    )
  }
}
