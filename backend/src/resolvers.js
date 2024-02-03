const resolvers = {
  Query: {
    Users: async(parent, args, {db}, info) => {
      try {
        const [results, fields] = await db.execute('SELECT * FROM User')
        return results;
      } catch(err) {
        return err
      }
    },
  },
  Mutation : {
    // Adds a new driver, updates the role of that user to "driver"
    // RETURNS: The id of the newly created Driver in the driver table
    addDriver: async (_, args, {db}) => {
      const {
        user_id = 0,
        vehicle_capacity = 0,
        vehicle_color = "",
        vehicle_licence_num = "",
        vehicle_make = "",
        vehicle_model = "",
      } = args.Driver
      
      const [results] = await db.query(
        `INSERT INTO Driver (user_id, vehicle_capacity, vehicle_color, vehicle_licence_num, vehicle_make, vehicle_model) VALUES 
      (?,?,?,?,?,?)`,
      [user_id, vehicle_capacity, vehicle_color, vehicle_licence_num, vehicle_make, vehicle_model]
      )
      
      const [update] = await db.query(
        `UPDATE User
        SET role = "Driver"
        WHERE user_id = ?`,
        [user_id]
      )

      return results.insertId
    },
    // adds user, returns the id of the most recently added user
    // RETURNS: The id of the newly created user in the user table
    addUser: async (parent, args, {db}) => {
      const {
        address,
        birthday,
        email,
        gender,
        major,
        name,
        photo,
        rating,
        year,
      } = args.newUser

      const [results] = await db.query(
        `INSERT INTO User (address, birthday, email, gender, major, name, photo, rating, year, role ) VALUES 
      (?,?,?,?,?,?,?,?,?,?)`,
      [address, birthday, email, gender, major, name, photo, rating, year, "Rider"]
      )

      return results.insertId
    },
    addUserInterests : async(_, args, {db}) => {
      const addInterest = async(interest, id) => {
        const [results] = await db.query(
          `INSERT INTO Interest (interest, user_id) VALUES 
        (?,?)`,
        [interest, id]
        )
      }
      args.Interests.map(({interest, user_id}, idx) => {
        addInterest(interest, user_id)
      })

      return "Finished :D"
    },
    addUserRating : async(_, args, {db}) => {
      console.log(args)
      const {
        rating_description,
        rating_num,
        user_id
      } = args.newRating
      console.log(rating_description, rating_num, user_id);

      const [results] = await db.query(
        `INSERT INTO UserRating (user_id, rating_num, rating_description) VALUES 
      (?,?,?)`,
      [user_id, rating_num, rating_description]
      )

      return "Finished :D"
    },

  },
  User: {
    async ratings ({user_id}, _, {db}) {
      try {
        const [results, fields] = await db.execute(`SELECT * FROM UserRating where user_id = ${user_id}`)
        return results;
      } catch(err) {
        return err
      }
    },
    async connections({user_id}, _, {db}) {
      try {
        const [results, fields] = await db.execute(`SELECT * FROM UserConnection where user_a= ${user_id} or user_b = ${user_id}`)
        return results;
      } catch(err) {
        return err
      }
    },
    async interests({user_id}, _, {db}) {
      try {
        const [results, fields] = await db.execute(`SELECT * FROM Interest where user_id = ${user_id}`)
        return results;
      } catch(err) {
        return err
      }
    },
    async driver_info ({user_id}, _, {db}) {
      try {
        const [results, fields] = await db.execute(`SELECT * FROM Driver where user_id = ${user_id}`)
        return results;
      } catch(err) {
        return err
      }
    },
    async trips ({user_id}, _, {db}) {
      try {
        const [results, fields] = await db.execute(`SELECT * FROM Trip WHERE driver_id = ${user_id}`)
        return results;
      } catch(err) {
        return err
      }
    },
  },
  Trip: {
    async trip_riders ({driver_id}, _, {db}) {
      try {
        const [results, fields] = await db.execute(`SELECT * FROM Trip_Rider WHERE user_id = ${driver_id}`)
        return results;
      } catch(err) {
        return err
      }
    }
  }
};

export default resolvers;
