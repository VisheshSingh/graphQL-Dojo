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

export { getAuthorsQuery, getBooksQuery };
