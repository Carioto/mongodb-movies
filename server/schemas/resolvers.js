const { Movie, Comment } = require('../models');

const resolvers = {
    Query: {
        movies:async(parent) => {
          const newmovs =  Movie.find()
          return newmovs
        },

        movieswithparams: async(parent, {year, languages, genres,searchwords}) => {
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
          if(searchwords !='nil'){
            const wordsArr = searchwords.split(" ");

            pipeline.push({$addFields:{'search_title': {$toLower:"$title"}}}, {$addFields:{'search_words':{$split:['$search_title',' ']}}},{$match:{'search_words':{$all: wordsArr}}});
          }
          pipeline.push({$sample: { size: 12 } })
          const parammovs = await Movie.aggregate( pipeline );
          return parammovs
        },

        comments:async(parent,{movie_id}) => {
          const moviecomms = await Comment.find({"movie_id":movie_id})
          // const moviecomms = await Comment.aggregate([
          //   {$match:{movie_id:movie_id}},
          //   {$sort:{date:1}},
          // ]);
          return moviecomms
        },

        moviewithid:async(parent, {_id}) => {
          const moviepick=  await Movie.findById(
              {_id:_id}
              ).populate('comments');
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
             {$sortByCount:"$languages"},
             {$limit:33}
            ])
          return listlanguages;
        }
    }
}

module.exports = resolvers;