const Movie = require('../models/Movie');

const resolvers = {
    Query: {
        movies:async(parent) => {
            console.log(Movie.find())
            return Movie.find()
        },
    }
}

module.exports = resolvers;