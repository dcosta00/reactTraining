import "./App.css";
import React, { Component } from "react";
import { Cardlist } from "./components/card-list/card-list.component";
import { Searchbox } from "./components/search-box/search-box.component";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    console.log(monsters);
    console.log(filteredMonsters);
    return (
      <div className="App">
        <Searchbox
          placeholder="Search Robot"
          handleChange={e => this.setState({ searchfield: e.target.value })}
        ></Searchbox>
        <Cardlist monsters={filteredMonsters}></Cardlist>
      </div>
    );
  }
}
