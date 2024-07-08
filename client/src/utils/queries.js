import {gql} from '@apollo/client';

export const GET_ALL_GENRES = gql `
query GetAllGenres{
genrelist{
_id
}
}
`;
export const GET_ALL_LANGUAGES = gql `
query GetAllLanguages{
languagelist{
_id
}
}
`;


export const QUERY_ALL_MOVIES = gql `
query GetRecentMovies{
movies{
_id
title
plot
year
poster
cast
directors
released
 }
}`;

export const QUERY_RANDOM_MOVIE = gql `
query RandomMovie($year:Int!){
randmovie(year:$year){
_id
title
genres
plot
year
poster
cast
directors
released
languages
countries
}
}
`;

export const QUERY_MOVIES_WITH_PARAMS = gql `
query getmovieswithparams($year:Int!,$language:String,$genre:String){
movieswithparams(year:$year,languages:$language,genres:$genre){
_id
title
plot
year
cast
}
}
`;

export const QUERY_A_MOVIE_WITH_ID = gql `
query getamoviewithid($id:ID!){
moviewithid(_id:$id){
_id
title
cast
directors
runtime
year
genres
languages
countries
plot
fullplot
poster
rated
imdb {
    rating
    votes
    id
    }
awards{
  id
  wins
  nominations
  text}
}
}
`;