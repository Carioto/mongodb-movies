const { Movie } = require('../models');

const resolvers = {
    Query: {
        movies:async(parent) => {
          const newmovs =  Movie.find()
          return newmovs
        },

        movieswithparams: async(parent, {year, language}) => {
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!made it', language);
          let pipeline=[];
          pipeline.push({$match:{year:year}})
          pipeline.push({$match:{languages:'English'}})
          pipeline.push({$match:{genres:'Comedy'}})
          pipeline.push({$sample: { size: 2 } })
          const parammovs = await Movie.aggregate( pipeline );
          console.log("🚀 ~ movieswithparams:async ~ pipeline:", pipeline)
          console.log("🚀 ~ movieswithparams:async ~ parammovs:", parammovs)
          return parammovs
        },

        
        moviewithid:async(parent, {_id}) => {
          console.log("----------------------->>>>>resolvers 🚀 ~ moviewithid:async ~ _id:",_id);
          // const moviepick = await Movie.aggregate(
          //   [{$match:{id:_id}}]
          // )
          const moviepick=  await Movie.findById(
              {_id:_id}
              );
            console.log("🚀 ~99999999999999999999999999999999999999999999999999999999999999999 moviewithid:async ~ moviepick:", moviepick)
            return moviepick
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