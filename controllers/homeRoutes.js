const router = require("express").Router();
// const { Post, Comment, User } = require("../models");

router.get("/", async (req, res) => {
    // get all posts for the homepage

    res.render('all-posts-admin');
});

router.get("/post/:id", async (req, res) => {
    // get a single post
});

router.get("/login", (req, res) => {
    // login
});

router.get("/signup", (req, res) => {
    // signup
})

module.exports = router;