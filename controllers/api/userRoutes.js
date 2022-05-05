const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
    // Creating a new instance of user
});

router.post("/login", async (req, res) => {
    // User login
});

router.post("/logout", async (req, res) => {
    // User logout
});

module.exports = router;