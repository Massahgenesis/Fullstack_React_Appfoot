import React, { Component } from "react";
import PlayersDataService from "../services/tutorial.service";

export default class AddPlayers extends Component {
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
    this.savePlayers = this.savePlayers.bind(this);
    this.newPlayers = this.newPlayers.bind(this);

    this.state = {
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

      submitted: false,
    };
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  onChangeWins(e) {
    this.setState({
      wins: e.target.value,
    });
  }

  onChangeLosses(e) {
    this.setState({
      losses: e.target.value,
    });
  }

  onChangePointsScored(e) {
    this.setState({
      pointsScored: e.target.value,
    });
  }

  onChangeClub(e) {
    this.setState({
      club: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  savePlayers() {
    var data = {
      lastName: this.state.lastName,
      firstName: this.state.firstName,
      age: this.state.age,
      wins: this.state.wins,
      losses: this.state.losses,
      pointsScored: this.state.pointsScored,
      club: this.state.club,
      description: this.state.description,
    };

    PlayersDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          lastName: response.data.lastName,
          firstName: response.data.firstName,
          age: response.data.age,
          wins: response.data.wins,
          losses: response.data.losses,
          pointsScored: response.data.pointsScored,
          club: response.data.club,
          description: response.data.description,
          published: response.data.published,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newPlayers() {
    this.setState({
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

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Successfully saved!</h4>
            <button className="btn btn-success" onClick={this.newPlayers}>
              Add a new player
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="lastName">Last-Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                value={this.state.lastName}
                onChange={this.onChangeLastName}
                name="lastName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstName">First-Name</label> 
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
                name="firstName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                className="form-control"
                id="age"
                required
                value={this.state.age}
                onChange={this.onChangeAge}
                name="age"
              />
            </div>

            <div className="form-group">
              <label htmlFor="wins">Wins</label>
              <input
                type="text"
                className="form-control"
                id="wins"
                required
                value={this.state.wins}
                onChange={this.onChangeWins}
                name="wins"
              />
            </div>

            <div className="form-group">
              <label htmlFor="losses">Losses</label>
              <input
                type="text"
                className="form-control"
                id="losses"
                required
                value={this.state.losses}
                onChange={this.onChangeLosses}
                name="losses"
              />
            </div>

            <div className="form-group">
              <label htmlFor="pointsScored">Points-Scored</label>
              <input
                type="text"
                className="form-control"
                id="pointsScored"
                required
                value={this.state.pointsScored}
                onChange={this.onChangePointsScored}
                name="pointsScored"
              />
            </div>

            <div className="form-group">
              <label htmlFor="club">Club</label>
              <input
                type="text"
                className="form-control"
                id="club"
                required
                value={this.state.club}
                onChange={this.onChangeClub}
                name="club"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <button onClick={this.savePlayers} className="btn btn-primary">
              Send
            </button>
          </div>
        )}
      </div>
    );
  }
}
