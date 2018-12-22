import React, { Component } from "react";
import BookList from "./components/BookList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ninja's Readling List</h1>
        <BookList />
      </div>
    );
  }
}

export default App;