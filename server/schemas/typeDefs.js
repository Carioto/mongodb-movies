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
    tomatoes:[Tomato]
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

type Imdb {
    rating:Int
    votes:Int 
    id:Int
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
randmovie:Movie!
# get a random movie with params
randfocusedmovie:Movie
# get list of all genres
genrelist:[Movie]
# get list of all languages
languagelist:[Movie]
#get movie list with params
movieswithparams:[Movie]
}
`;

module.exports = typeDefs;