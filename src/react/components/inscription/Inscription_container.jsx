import React, { Component } from "react";
import InscriptionComponent from "./Inscription_component";

class InscriptionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      username: "",
      first_name: "",
      last_name: ""
    };

    this.authenticate = this.authenticate.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
  }
  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  authenticate(e) {
    //     const { login } = this.props;
    //     const { email, password } = this.props;
    //     e.preventDefault();
    //     login({ email, password });
    //
    e.preventDefault();
  }
  render() {
    return (
      <InscriptionComponent
        email={this.state.email}
        username={this.state.username}
        first_name={this.state.first_name}
        last_name={this.state.last_name}
        password={this.state.password}
        signup={this.authenticate}
        onFieldChange={this.onFieldChange}
      />
    );
  }
}

export default InscriptionContainer;
