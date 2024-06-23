const { Movie } = require('../models');

const resolvers = {
    Query: {
        movies:async(parent) => {
          const newmovs =  Movie.find()
          return newmovs
        },
        randmovie:async(parent) => {
         const randmovie=  await Movie.aggregate(
            [{ $sample: { size: 1 } }]);
          console.log(randmovie);
          return randmovie[0]
        }
    }
}

module.exports = resolvers;