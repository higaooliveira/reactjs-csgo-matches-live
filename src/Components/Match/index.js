import React, { Component } from "react"
import Opponents from "../Opponent"
import "./match.css"

export default class Match extends Component {
  convert = str => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2),
      hours = ("0" + date.getHours()).slice(-2),
      minutes = ("0" + date.getMinutes()).slice(-2)
    return (
      [day, mnth, date.getFullYear()].join("/") +
      " " +
      hours +
      ":" +
      minutes +
      "h"
    )
  }
  render() {
    const match = this.props.match
    const date = this.convert(new Date(match.begin_at))
    console.log(date)
    return (
      <article key={match.id} className="match-info">
        <div className="match-name">
          <h3>
            {match.league.name} {match.serie.full_name} -{match.name}
          </h3>
        </div>
        <div className="match-hour">
          <h3>Horário: {date}</h3>
        </div>
        <div className="opponents">
          <div className="odd">
            <Opponents
              team={match.opponents[0].opponent}
              results={match.results}
            />
          </div>
          <strong className="versus">X</strong>
          <div className="even">
            <Opponents
              team={match.opponents[1].opponent}
              results={match.results}
            />
          </div>
        </div>
      </article>
    )
  }
}
