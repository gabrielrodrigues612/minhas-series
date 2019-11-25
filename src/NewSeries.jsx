import React, { Component } from "react";
import apis from "./Api";

const status = {
  watched: "Assistida",
  watching: "Assistindo",
  toWatch: "Assistir"
};

class NewSeries extends Component {
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
  saveSeries = () => {
    const newSeries = {
      name: this.refs.name.value,
      status: this.refs.status.value,
      genre: this.refs.genre.value,
      comments: this.refs.comments.value
    };
    apis.saveSeries(newSeries).then(res => console.log(res));
  };

  render() {
    return (
      <section className="intro-section">
        <h1>Nova série</h1>
        <form action="">
          Nome: <input ref="name" type="text" className="form-control" />
          Status:
          <select ref="status">
            {this.state.genres.map((key, index) => (
              <option key={index} value={key}>
                {key}
              </option>
            ))}
          </select>
          <br />
          Gênero:
          <select ref="genre">
            {Object.keys(status).map(key => (
              <option key={key} value={key}>
                {status[key]}
              </option>
            ))}
          </select>
          <br />
          Comentários:
          <textarea
            ref="comments"
            type="text"
            className="form-control"
          ></textarea>
          <button type="button" onClick={this.saveSeries}>
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

export default NewSeries;
