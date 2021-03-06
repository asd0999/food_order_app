import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch("https://zuber-eats-api.herokuapp.com/users")
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({
          users: json,
        });
      });
  }

  render() {
    return (
      <>
        <div className="sign-in-container"></div>
        <div className="sign-in-items">
          {this.state.users.map((user) => {
            return (
              <div className="users">
                <h1>{user.username}</h1>
                <Link to="/home">
                  <button
                    onClick={() => {
                      this.props.updateStateUI(user._id, user.username);
                    }}
                  >
                    Login
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
