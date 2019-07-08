import React, { Component } from "react"
import api, { token } from "../../Services/api"

import Match from "../../Components/Match"

export default class Main extends Component {
  state = {
    matches: [],
    page: 1,
    sort: "begin_at",
  }

  componentDidMount() {
    this.loadMatches()
  }

  loadMatches = async (page = 1) => {
    const { sort } = this.state
    const apiCall = [
      `/csgo/matches/running?page=${page}&sort=${sort}&token=${token}`,
      `/csgo/matches/upcoming?page=${page}&sort=${sort}&token=${token}`,
    ]
    let response = await api.get(apiCall[0])
    if (response.data.length === 0) {
      response = await api.get(apiCall[1])
    }
    const matches = response.data
    this.setState({ matches })
  }

  prevPage = () => {
    const { page } = this.state

    if (page === 1) return

    const pageNumber = page - 1

    this.loadMatches(pageNumber)
  }

  nextPage = () => {
    const { page } = this.state

    const pageNumber = page + 1

    this.loadMatches(pageNumber)
  }

  render() {
    const { matches, page } = this.state
    let games = matches.filter(match => match.opponents.length > 0)
    return (
      <div className="match-list">
        {games.map(match => (
          <Match key={match.id} match={match} />
        ))}

        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <button onClick={this.nextPage}>Proxima</button>
        </div>
      </div>
    )
  }
}
