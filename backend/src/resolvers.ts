const resolvers = {
  Query: {
    hello: async (parent, args, context, info) => {
      console.log(context)
      try {
        const [results, fields] = await context.db.execute('SELECT * FROM User')
        console.log(fields)
        return fields[0]
      } catch(err) {
        return [err]
      }
    },
  },
};

export default resolvers;
