import React, { Component } from "react";
import PlayersDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";

export default class PlayersList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchLastName = this.onChangeSearchLastName.bind(this);
    this.retrievePlayers = this.retrievePlayers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePlayers = this.setActivePlayers.bind(this);
    this.removeAllPlayers = this.removeAllPlayers.bind(this);
    this.searchLastName = this.searchLastName.bind(this);

    this.state = {
      players: [],
      currentPlayers: null,
      currentIndex: -1,
      searchLastName: "",
    };
  }

  componentDidMount() {
    this.retrievePlayers();
  }

  onChangeSearchLastName(e) {
    const searchLastName = e.target.value;

    this.setState({
      searchLastName: searchLastName,
    });
  }

  retrievePlayers() {
    PlayersDataService.getAll()
      .then((response) => {
        this.setState({
          players: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrievePlayers();
    this.setState({
      currentPlayers: null,
      currentIndex: -1,
    });
  }

  setActivePlayers(Players, index) {
    this.setState({
      currentPlayers: Players,
      currentIndex: index,
    });
  }

  removeAllPlayers() {
    PlayersDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchLastName() {
    this.setState({
      currentPlayers: null,
      currentIndex: -1,
    });

    PlayersDataService.findByLastName(this.state.searchLastName)
      .then((response) => {
        this.setState({
          Players: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { searchLastName, Players, currentPlayers, currentIndex } =
      this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Filter player by name"
              value={searchLastName}
              onChange={this.onChangeSearchLastName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchLastName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-right">
          <h4>Players list</h4>

          <ul className="list-group">
            {Players &&
              Players.map((Players, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActivePlayers(Players, index)}
                  key={index}
                >
                  {Players.lastName}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllPlayers}
          >
            Delete all
          </button>
        </div>
        <div className="col-md-6">
          {currentPlayers ? (
            <div>
              <h4>Statistics</h4>
              <div>
                <label>
                  <strong>Last-Name:</strong>
                </label>{" "}
                {currentPlayers.lastName}
              </div>
              <div>
                <label>
                  <strong>First-Name:</strong>
                </label>{" "}
                {currentPlayers.firstName}
              </div>
              <div>
                <label>
                  <strong>Age:</strong>
                </label>{" "}
                {currentPlayers.age}
              </div>
              <div>
                <label>
                  <strong>Wins:</strong>
                </label>{" "}
                {currentPlayers.wins}
              </div>
              <div>
                <label>
                  <strong>Losses:</strong>
                </label>{" "}
                {currentPlayers.losses}
              </div>
              <div>
                <label>
                  <strong>Points-Scored:</strong>
                </label>{" "}
                {currentPlayers.pointsScored}
              </div>
              <div>
                <label>
                  <strong>Club:</strong>
                </label>{" "}
                {currentPlayers.club}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentPlayers.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentPlayers.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/Players/" + currentPlayers.id}
                className="btn btn-warning"
              >
               Update
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a player...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
