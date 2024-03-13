export const typeDefs = `#graphql

enum Frequency {
  Often
  Sometimes
  DontMind
  Mind
}

enum Diet {
  Vegan
  Vegetarian
  NonVegetarian
}

type User {
  id: ID!
  name: String!
  email: String!
  phone: String
  school: String
  socials: [String!]!
  gender: String!
  cleanliness: Int!
  socialMeter: Int!
  noiseTolerance: Int!
  drinking: Frequency!
  cigs: Frequency!
  drugs: Frequency!
  diet: Diet!
  hobbies: [String!]! 
  bringingPets: Boolean!
  interests: [String!]! 
  description: String
  notes: String
}

schema {
  query: Query
  mutation: Mutation
}

type Query {
  user(id: ID!): User
  users: [User!]!
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
  deleteUser(id: ID!): User!
}

input CreateUserInput {
  name: String!
  email: String!
  phone: String
  school: String
  socials: [String!]!
  gender: String!
  cleanliness: Int!
  socialMeter: Int!
  noiseTolerance: Int!
  drinking: Frequency!
  cigs: Frequency!
  drugs: Frequency!
  diet: Diet!
  hobbies: [String!]!
  bringingPets: Boolean!
  interests: [String!]!
  description: String
}

input UpdateUserInput {
  name: String
  email: String
  phone: String
  school: String
  socials: [String!]
  gender: String
  cleanliness: Int
  socialMeter: Int
  noiseTolerance: Int
  drinking: Frequency
  cigs: Frequency
  drugs: Frequency
  diet: Diet
  hobbies: [String!]
  bringingPets: Boolean
  interests: [String!]
  description: String
}
`;