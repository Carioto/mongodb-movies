const { Schema, model } = require('mongoose');

const Award = new Schema({
    wins: {type:Number},
    nominations: {type:Number},
    text: {type:String},
});

const Imdb = new Schema({
    rating:{type:Number},
    votes:{type:Number}, 
    id:{type:Number},
});

const View = new Schema({
    rating:{type:Number},
    numReviews:{type:Number},
});

const Tomato = new Schema({
    viewer:[View],
    production:{type:String},
    lastUpdated:{type:Date, default:Date.now},
});


const movieSchema = new Schema (
    {
        plot: {
            type: String,
            // required:true,
        },
        genres: [
            {
            type: String,
            // required:true,
            },
        ],
        runtime: {
            type: Number,
            // required:true,
        },
        cast: [
            {
                type: String,
            },
        ],
        poster: {
            type: String,
            required:false,
        },
        title:{
            type:String,
            // required:true, 
        },
        fullplot: {
            type: String,
            required: false,
        },
        languages: [
            {
            type: String,
            required: false,
            },  
        ],
        released: {
            type: Date,
            // required: true,
        },
        directors:[
            {
                type: String, 
                // required: true,
            },
        ],
        rated: {
            type: String,
            required: false,
        },
        awards:[Award],
        lastupdated: {
            type: Date,
            default: Date.now,
        },
        year:{
            type:Date,
        },
        imdb:[Imdb],
        countries:[
            {
            type: String,
            },
        ],
        tomatoes:[Tomato],
        writers:[
            {
                type: String,
            },
        ],
        type:{
            type:String,
        },
        plot_embedding:[
            {
                type: Number,
            },
        ],
        metacritic:{
            type: Number,
        },
    },
);

const Movie = model('Movie', movieSchema)

module.exports = Movie;