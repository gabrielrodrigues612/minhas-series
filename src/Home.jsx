import React, { Component } from "react";
import apis from "./Api";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    apis
      .loadGenres()
      .then(res => this.setState({ isLoading: false, genres: res.data }));
  }
  genreLink(genre) {
    return (
      <span>
        &nbsp;<a href="">{genre}</a>
        &nbsp;
      </span>
    );
  }

  render() {
    return (
      <React.Fragment>
        <section id="intro" className="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>
                  <img src="images/logo.png" />
                </h1>
                <p>
                  Nunca mais esqueça uma série que você assistiu ou que alguém
                  lhe indicou.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          {this.state.isLoading && <span>Aguarde, carregando...</span>}
          {!this.state.isLoading && (
            <div>
              Ver séries do gênero:
              {this.state.genres.map(this.genreLink)}
            </div>
          )}
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
