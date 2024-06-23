const Movie = require('../models/Movie');

const resolvers = {
    Query: {
        movies:async(parent) => {
          const newmovs =  Movie.find()
          return newmovs
        },
    }
}

module.exports = resolvers;