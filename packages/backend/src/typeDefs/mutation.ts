import gql from 'graphql-tag'

export default gql`
  type Mutation {
    mutationTest(test: Boolean): Boolean
    login(email: String!, password: String!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    company: String
  }
`
