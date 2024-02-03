const typeDefs = `
type Driver {
  user_id: ID!
  vehicle_model: String
  vehicle_make: String
  vehicle_color: String
  vehicle_capacity: Int
  vehicle_licence_num: Int
}
type Interest {
  interest: String!
  user_id: Int!
}
type UserRating {
  user_id: Int
  rating_num: Int
  rating_description: String
}
type UserConnection {
  user_a: ID!
  user_b: ID!
}
type User {
  photo: String
  rating: Float
  name: String
  major: String
  interest: Int
  gender: String
  year: Int
  birthday: String
  role: String
  user_id: ID!
  address: String
  email: String
  ratings: [UserRating]
  connections: [UserConnection]
  interests: [Interest]
  driver_info: [Driver]
  trips: [Trip]
}

type newUser {
  photo: String
  rating: Float
  name: String
  major: String
  interest: Int
  gender: String
  year: Int
  birthday: String
  role: String
  user_id: ID!
  address: String
  email: String
}

## Starting Trips section
type TripRider {
  trip_id: ID!
  user_id: ID!
}
type Trip {
  trip_id: ID!
  driver_id: ID!
  pickup_location: String
  dropoff_location: String
  start_time: String
  end_time: String
  trip_riders: [TripRider]
}
type Query {
  Users: [User]
}

# Starting mutations and inputs
input DriverInput {
  user_id: Int!
  vehicle_model: String
  vehicle_make: String
  vehicle_color: String
  vehicle_capacity: Int
  vehicle_licence_num: String
}

input InterestInput {
  interest: String!
  user_id: Int!
}

input UserRatingInput {
  user_id: Int!
  rating_num: Int
  rating_description: String
}

input UserConnectionInput {
  user_a: ID!
  user_b: ID!
}

input UserInput {
  photo: String
  rating: Float
  name: String
  major: String
  interest: Int
  gender: String
  year: Int
  birthday: String
  role: String
  address: String
  email: String
}

input TripRiderInput {
  trip_id: ID!
  user_id: ID!
}

input TripInput {
  trip_id: ID!
  driver_id: ID!
  pickup_location: String
  dropoff_location: String
  start_time: String
  end_time: String
}



type Mutation {
  addDriver(Driver: DriverInput!): Int
  addUser(newUser: UserInput!) : Int
  addUserInterests(Interests: [InterestInput!]) : String
  addUserRating(newRating: UserRatingInput) : String
}

`

export default typeDefs;
