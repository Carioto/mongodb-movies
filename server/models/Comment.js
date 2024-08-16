const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    name: {
        type:String,
    },
    email: {
        type:String,
    },
    movie_id: {
        type:Schema.Types.ObjectId,
        ref:"Movie"
    },
    text: {
        type:String,
    },
    date: {
        type:Date,
    },
})

const Comment = model('comment', commentSchema);

module.exports = Comment;