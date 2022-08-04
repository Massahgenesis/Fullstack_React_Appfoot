import React, { Component } from "react";
import PlayersDataService from "../services/tutorial.service";

export default class Players extends Component {
  constructor(props) {
    super(props);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeWins = this.onChangeWins.bind(this);
    this.onChangeLosses = this.onChangeLosses.bind(this);
    this.onChangePointsScored = this.onChangePointsScored.bind(this);
    this.onChangeClub = this.onChangeClub.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getPlayers = this.getPlayers.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updatePlayers = this.updatePlayers.bind(this);
    this.deletePlayers = this.deletePlayers.bind(this);

    this.state = {
      currentPlayers: {
        id: null,
        lastName: "",
        firstName:"",
        age:"",
        wins:"",
        losses:"",
        pointsScored:"",
        club:"",
        description: "",
        published: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getPlayers(this.props.match.params.id);
  }

  onChangeLastName(e) {
    const lastName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPlayers: {
          ...prevState.currentPlayers,
          lastName: lastName,
        },
      };
    });
  }

  onChangeFirstName(e) {
    const firstName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPlayers: {
          ...prevState.currentPlayers,
          firstName: firstName,
        },
      };
    });
  }

  onChangeAge(e) {
    const age = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPlayers: {
          ...prevState.currentPlayers,
          age: age,
        },
      };
    });
  }

  onChangeWins(e) {
    const wins = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPlayers: {
          ...prevState.currentPlayers,
          wins: wins,
        },
      };
    });
  }

  onChangeLosses(e) {
    const losses = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPlayers: {
          ...prevState.currentPlayers,
          losses: losses,
        },
      };
    });
  }

onChangePointsScored(e) {
    const pointsScored = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPlayers: {
          ...prevState.currentPlayers,
          pointsScored: pointsScored,
        },
      };
    });
  }

onChangeClub(e) {
    const club = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPlayers: {
          ...prevState.currentPlayers,
          club: club,
        },
      };
    });
  }


  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentPlayers: {
        ...prevState.currentPlayers,
        description: description,
      },
    }));
  }

  getPlayers(id) {
    PlayersDataService.get(id)
      .then((response) => {
        this.setState({
          currentPlayers: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentPlayers.id,
      lastName: this.state.currentPlayers.lastName,
      firstName:this.state.currentPlayers.firstName,
      age: this.state.currentPlayers.age,
      wins: this.state.currentPlayers.wins,
      losses: this.state.currentPlayers.losses,
      pointsScored: this.state.currentPlayers.pointsScored,
      club:this.state.currentPlayers.club,
      description: this.state.currentPlayers.description,
      published: status,
    };

    PlayersDataService.update(this.state.currentPlayers.id, data)
      .then((response) => {
        this.setState((prevState) => ({
          currentPlayers: {
            ...prevState.currentPlayers,
            published: status,
          },
        }));
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updatePlayers() {
    PlayersDataService.update(
      this.state.currentPlayers.id,
      this.state.currentPlayers
    )
      .then((response) => {
        console.log(response.data);
        this.setState({
          message: "The player was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deletePlayers() {
    PlayersDataService.delete(this.state.currentPlayers.id)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/Players");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentPlayers } = this.state;

    return (
      <div>
        {currentPlayers ? (
          <div className="edit-form">
            <h4>Players</h4>
            <form>
              <div className="form-group">
                <label htmlFor="lastName">Last-Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={currentPlayers.lastName}
                  onChange={this.onChangeLastName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="firstName">First-Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={currentPlayers.firstName}
                  onChange={this.onChangeFirstName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  value={currentPlayers.age}
                  onChange={this.onChangeAge}
                />
              </div>

              <div className="form-group">
                <label htmlFor="wins">Wins</label>
                <input
                  type="text"
                  className="form-control"
                  id="wins"
                  value={currentPlayers.wins}
                  onChange={this.onChangeWins}
                />
              </div>

              <div className="form-group">
                <label htmlFor="losses">Losses</label>
                <input
                  type="text"
                  className="form-control"
                  id="losses"
                  value={currentPlayers.losses}
                  onChange={this.onChangeLosses}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pointsScored">Points-Scored</label>
                <input
                  type="text"
                  className="form-control"
                  id="pointsScored"
                  value={currentPlayers.pointsScored}
                  onChange={this.onChangePointsScored}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Club</label>
                <input
                  type="text"
                  className="form-control"
                  id="club"
                  value={currentPlayers.club}
                  onChange={this.onChangeClub}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentPlayers.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentPlayers.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentPlayers.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button className="btn btn-danger" onClick={this.deletePlayers}>
              Delete
            </button>

            <button
              type="submit"
              className="btn btn-success"
              onClick={this.updatePlayers}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Players...</p>
          </div>
        )}
      </div>
    );
  }
}
