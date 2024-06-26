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
        },
        randfocusedmovie:async(parent) => {
         const randfocusedmovie=  await Movie.aggregate(
           [{$match: {year:year}},
            { $sample: { size: 1 } }]);
          console.log(randfocusedmovie);
          return randfocusedmovie[0]
        },
        genrelist:async(parent) => {
         const listgenres=  await Movie.aggregate(
          [{$unwind:"$genres"},
            {$group: 
            {"_id": "$genres"
              }}])
          return listgenres;
        },
        languagelist:async(parent) => {
         const listlanguages=  await Movie.aggregate(
          [{$unwind:"$languages"},
            {$group: 
            {"_id": "$languages"
              }}])
          return listlanguages;
        }
    }
}

module.exports = resolvers;