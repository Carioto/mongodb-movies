const { Movie } = require('../models');

const resolvers = {
    Query: {
        movies:async(parent) => {
          const newmovs =  Movie.find()
          return newmovs
        },

        movieswithparams: async(parent, {year, languages, genres}) => {
          let pipeline=[];
          if(year != 0){
          pipeline.push({$match:{year:year}})
          }
          if(languages != 'nil'){
          pipeline.push({$match:{languages:languages}})
          }
          if(genres != 'nil'){
          pipeline.push({$match:{genres:genres}})
          }
          pipeline.push({$sample: { size: 12 } })
          const parammovs = await Movie.aggregate( pipeline );
          return parammovs
        },

        
        moviewithid:async(parent, {_id}) => {
          const moviepick=  await Movie.findById(
              {_id:_id}
              );
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