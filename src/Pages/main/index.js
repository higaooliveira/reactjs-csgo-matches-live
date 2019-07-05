import React, { Component } from "react";
import api, { token } from "../../Services/api";

import Opponents from "../../Components/Opponent";
import "./styles.css";

export default class Main extends Component {
  state = {
    matches: [],
    perPage: 5,
    page: 1,
    sort: "begin_at"
  };

  componentDidMount() {
    this.loadMatches();
  }

  loadMatches = async (page = 1) => {
    const { perPage, sort } = this.state;
    const response = await api.get(
      `/csgo/matches/running?page=${page}&sort=${sort}&per_page=${perPage}&token=${token}`
    );
    const matches = response.data;
    this.setState({ matches });
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadMatches(pageNumber);
  };

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadMatches(pageNumber);
  };

  render() {
    const { matches } = this.state;
    console.log(matches);
    return (
      <div className="match-list">
        {matches.map(match => (
          <article key={match.id} className="match-info">
            <div className="match-name">
              <h3>
                {match.league.name} {match.serie.full_name} -{" "}
              </h3>
              <h3> {match.name}</h3>
            </div>
            <div className="opponents">
              <div className="odd">
                <Opponents team={match.opponents[0].opponent} />
              </div>
              <strong>X</strong>
              <div className="even">
                <Opponents team={match.opponents[1].opponent} />
              </div>
            </div>
          </article>
        ))}

        <div className="actions">
          {/* <button disabled={page === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>
            Proxima
          </button> */}
        </div>
      </div>
    );
  }
}
