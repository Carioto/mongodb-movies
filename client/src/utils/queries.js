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
query RandomMovie{
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
`;

export const QUERY_MOVIES_WITH_PARAMS = gql `
query getmovieswithparams{
movieswithparams{
_id
title
genres
plot
year
poster
cast
directors
}
}
`;