const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = graphql;

// DUMMY DATA
const books = [
  { id: "1", name: "The Wind Of Fire", genre: "Fantasy" },
  { id: "2", name: "Final Empire", genre: "Fantasy" },
  { id: "3", name: "The Long Drill", genre: "Sci-fi" }
];
const authors = [
  { id: "1", name: "Patrick Adams", age: 54 },
  { id: "2", name: "Demi Lovato", age: 22 },
  { id: "3", name: "Adam Smith", age: 45 }
];

// SCHEMA - BOOK TYPE
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});
// SCHEMA - AUTHOR TYPE
const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

// ROOT QUERY
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // Code to get data from db/ other source
        return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // Code to get data from db/ other source
        return _.find(authors, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
