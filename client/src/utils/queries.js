import {gql} from '@apollo/client';

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