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
// SCHEMA - BOOK TYPE
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
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
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
