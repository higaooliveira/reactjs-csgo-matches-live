import React, { Component } from "react";
import api, { token } from "../../Services/api";
import { Link } from "react-router-dom";
import Opponents from "../../Components/Opponent";
import "./styles.css";

export default class Main extends Component {
  state = {
    matches: [],
    perPage: 5,
    page: 1
  };

  componentDidMount() {
    this.loadMatches();
  }

  loadMatches = async (page = 1) => {
    const { perPage } = this.state;
    const response = await api.get(
      `/csgo/matches/past?page=${page}&per_page=${perPage}&token=${token}`
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
      <div className="product-list">
        {matches.map(match => (
          <article key={match.id} className="match-info">
            <h1>{match.league.name}</h1>
            <h4>{match.name}</h4>
            <div className="odd">
              <Opponents team={match.opponents[0].opponent} />
            </div>
            <strong>X</strong>
            <div className="even">
              <Opponents team={match.opponents[1].opponent} />
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
