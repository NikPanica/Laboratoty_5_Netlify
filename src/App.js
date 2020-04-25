import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    pictures: []
  };

  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=10`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let pictures = data.results.map(person => {
          return (
            <div>
              <img src={person.picture.large} />
              <p>
                Name : {person.name.first} {person.name.last}
              </p>
              <p>Gender: {person.gender}</p>
              <p>Date of Birthday : {person.dob.date}</p>
              <p>Phone Number : {person.phone}</p>
              <p>Email : {person.email}</p>
              <p>Location : {person.location.state};</p>
            </div>
          );
        });
        this.setState({ pictures: pictures });
        console.log(this.state.pictures);
      });
  }

  render() {
    return (
      <div className="App">
        {/* HEADER */}

        <header className="App-header">
          <h1>Random User Generator</h1>
        </header>

        {/* COMPONENTS */}

        {this.state.pictures}
      </div>
    );
  }
}

export default App;
