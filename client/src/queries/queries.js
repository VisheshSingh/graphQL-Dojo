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

// GET BOOK QUERY
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

// ADD BOOK MUTATION
const addBookMutation = gql`
  mutation {
    addBook(name: "", genre: "", authorId: "") {
      name
      id
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation };
