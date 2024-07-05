const { Movie } = require('../models');

const resolvers = {
    Query: {
        movies:async(parent) => {
          const newmovs =  Movie.find()
          return newmovs
        },

        movieswithparams: async(parent, {year}) => {
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!made it', year);
        let pipeline=[];
          pipeline.push({$match:{year:year}})
          pipeline.push({$match:{languages:'English'}})
          pipeline.push({$match:{genres:'Comedy'}})
          pipeline.push({$sample: { size: 12 } })

        const parammovs = await Movie.aggregate( pipeline );
        console.log("🚀 ~ movieswithparams:async ~ parammovs:", parammovs)
        return parammovs
        },

        randmovie:async(parent, {year}) => {
         const randmovie=  await Movie.aggregate(
          [{$match:{year:year}},
            { $sample: { size: 1 } }]);
          return randmovie[0]
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