const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    // fill out the rest of the belongsTo relationship
});

Post.hasMany(Comment, {
    // fill out the rest of the hasMany relationship
});

Comment.belongTo(User, {
    // fill out the rest of the belongsTo relationship
});

module.exports = {
    User,
    Comment,
    Post
};