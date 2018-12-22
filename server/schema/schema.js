const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = graphql;

// SCHEMA - BOOK TYPE
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: { GraphQLString } },
    name: { type: { GraphQLString } },
    genre: { type: { GraphQLString } }
  })
});

// ROOT QUERY
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: { GraphQLString } }
      },
      resolve(parent, args) {
        // Code to get data from db/ other source
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
