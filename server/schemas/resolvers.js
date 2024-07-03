const { Movie } = require('../models');

const resolvers = {
    Query: {
        movies:async(parent) => {
          const newmovs =  Movie.find()
          return newmovs
        },

        movieswithparams: async(parent, {genres}) => {
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!made it', genres);
        let pipeline=[];
          pipeline.push({$match:{year:1951}})
          pipeline.push({$match:{languages:'English'}})
          pipeline.push({$match:{genres:'Comedy'}})
          pipeline.push({$sample: { size: 12 } })

        const parammovs =  Movie.aggregate( pipeline );
        return parammovs
        },

        randmovie:async(parent, {year}) => {
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Made IT',parent,  year)
         const randmovie=  await Movie.aggregate(
          [{$match:{year:year}},
            { $sample: { size: 1 } }]);
          console.log(randmovie);
          return randmovie[0]
        },

        randfocusedmovie:async(parent) => {
         const randfocusedmovie=  await Movie.aggregate(
           [{$match: {$year:year}},
            { $sample: { size: 1 } }]);
          console.log(randfocusedmovie);
          return randfocusedmovie[0]
        },

        genrelist:async(parent) => {
         const listgenres=  await Movie.aggregate(
           [
             {$unwind:"$genres"},
            {$group: {"_id": "$genres"
              }},
              {$sort:{_id : 1}},
              
            ])
            return listgenres;
          },

          languagelist:async(parent) => {
            const listlanguages=  await Movie.aggregate(
              [{$unwind:"$languages"},
                {$group: 
                  {"_id": "$languages"
                  }},
                    {$sort:{_id : 1}},
            ])
          return listlanguages;
        }
    }
}

module.exports = resolvers;