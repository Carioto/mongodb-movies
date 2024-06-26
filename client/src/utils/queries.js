import {gql} from '@apollo/client';

export const GET_ALL_GENRES = gql `
query GetAllGenres{
genrelist{
_id
}
}
`
export const GET_ALL_LANGUAGES = gql `
query GetAllLanguages{
languagelist{
_id
}
}
`


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
}`

export const QUERY_RANDOM_MOVIE = gql `
query GetRandomMovie {
randmovie{
_id
title
plot
year
poster
cast
directors
released
}
}
`

export const QUERY_FOCUSED_RANDOM_MOVIE = gql `
query GetFocusedMovie ($year:year){
randfocusedmovie(year:$year){
_id
title
plot
year
poster
cast
directors
released
}
}
`