import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";

class AddForm extends Component {
  state = {
    name: "",
    genre: "",
    authorId: ""
  };

  displayAuthors = () => {
    var data = this.props.getAuthorsQuery;
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
    this.props.addBookMutation();
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

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddForm);
