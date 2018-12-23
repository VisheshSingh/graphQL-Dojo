import { gql } from "apollo-boost";

// GET AUTHORS QUERY
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

// GET BOOKS QUERY
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

// GET BOOK QUERY
const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

// ADD BOOK MUTATION
const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };
