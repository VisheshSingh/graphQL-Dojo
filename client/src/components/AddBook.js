import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAuthorsQuery } from "../queries/queries";

class AddForm extends Component {
  state = {
    name: "",
    genre: "",
    authorId: ""
  };

  displayAuthors = () => {
    var data = this.props.data;
    if (data.loading) {
      return <option disabled>Loading Authors...</option>;
    } else {
      return data.authors.map(author => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ));
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form id="author-form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="book-name">Book Name: </label>
            <input
              type="text"
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="genre">Genre: </label>
            <input
              type="text"
              onChange={e => this.setState({ genre: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="author">Author: </label>
            <select
              name="author"
              onChange={e => this.setState({ authorId: e.target.value })}
            >
              <option>Select author</option>
              {this.displayAuthors()}
            </select>
          </div>
          <button>+</button>
        </form>
      </div>
    );
  }
}

export default graphql(getAuthorsQuery)(AddForm);
