const { Movie } = require('../models');

const resolvers = {
    Query: {
        movies:async(parent) => {
          const newmovs =  Movie.find()
          return newmovs
        },
        // movieswithparams:async(parent) => {
        //   const parammovs =  Movie.aggregate([
        //     {
        //       $match: { genres: ["Action"] }
        //     },
        //     {
        //       $group:{_id:"$title", year:"year"}
        //     }
        //   ]);
        movieswithparams:async(parent) => {
          const parammovs =  Movie.find(
            {
          languages:["English"],
          genres:["$default"]

            },
          
          );


          console.log("🚀 ~ movieswithparams:async ~ parammovs:", parammovs)
          return parammovs
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