import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAuthorsQuery } from "../queries/queries";

class AddForm extends Component {
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
  render() {
    return (
      <div>
        <form id="author-form">
          <div className="field">
            <label htmlFor="book-name">Book Name: </label>
            <input type="text" />
          </div>
          <div className="field">
            <label htmlFor="genre">Genre: </label>
            <input type="text" />
          </div>
          <div className="field">
            <label htmlFor="author">Author: </label>
            <select name="author">
              <option value="">Selct author</option>
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
