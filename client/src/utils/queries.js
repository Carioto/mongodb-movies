import {gql} from '@apollo/client';

export const QUERY_RECENT_MOVIES = gql `
query GetRecentMovies{
movies{
_id
title
plot
year
poster
cast
directors
 }
}`