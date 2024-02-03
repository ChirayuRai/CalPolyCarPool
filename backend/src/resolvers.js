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
