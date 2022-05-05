const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    // Create a post
});

router.put("/:id", withAuth, async (req, res) => {
    // Update a post
});

router.delete("/:id", withAuth, async (req, res) => {
    // Delete the post
});

module.exports = router;