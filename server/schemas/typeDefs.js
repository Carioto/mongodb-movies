const typeDefs = `

type Movie {
    _id:ID
    plot: String
    genres: [String]
    runtime: Int
    cast: [String]
    poster: String
    title:String
    fullplot: String
    languages: [String]
    released: String
    directors:[String]
    rated: String
    awards:[Award]
    lastupdated: String
    year:Int
    imdb:[Imdb]
    countries:[String]
    tomatoes:Tomato
    writers:[String]
    type:String
    plot_embedding:[Int]
    metacritic:Int
    }
    
 type Award {
      id:ID
      wins: Int
      nominations: Int
      text: String
    }
        
 "for the imdb object"
 type Imdb {
      id:Int
      rating:Float
      votes:Int 
   }
        
type Tomato {
   viewer:[View]
    production:String
    lastUpdated:String
}

type View {
    rating:Int
    numReviews:Int
}

type Query {
# get all movies
movies:[Movie]!
# get a random movie
randmovie(year: Int): Movie
# get a random movie with params
randfocusedmovie:Movie
# get list of all genres
genrelist:[Movie]
# get list of all languages
languagelist:[Movie]
#get movie list with params
movieswithparams(year: Int, languages:String, genres:String):[Movie]
#get movie using id
moviewithid(_id: ID!):Movie
}
`;

module.exports = typeDefs;