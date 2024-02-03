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
  user_id: ID!
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

`

export default typeDefs;
