// TODO: LOG IN / LOG OUT 
const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
    // Creating a new instance of user
    try {
        const dbUserData = await User.create({
            username: req.body.username,
                email: req.body.email, 
                    password: req.body.password,
        })
        req.session.save(() => {
            req.session.loggedIn = true; 
                req.status(200).json(dbUserData);
        });

    }catch (err) {
        console.log(err);
            res.status(500).json(err);
    }
});

router.post("/login", async (req, res) => {
    // User login
        try{
            const dbUserData = await User.findOne({
                where: {
                    email: req.body.email,
                },
            });

                if (!dbUserData) {
                    res.status(400).json({
                        message: 'Incorrect Email or Password. Try again!'
                    });
                    return;
                }
            
                const validPassword = await dbUserData.checkPassword(req.body.password);
            
            if(!validPassword) {
                res.status(400).json({message: 'Incorrect Email or Password. Try again!'});
                return;
            }
            // Once the user successfully logs in, set up the sessions variable 'loggedIn'
            req.session.save(() => {
                req.session.loggedIn = true;
                    res.status(200).json({message:'You are logged in! Safe travels cowboy... '});
            });
        } catch (err) {
            console.log(err);
                res.status(500).json(err);
        }
});

router.post("/logout", async (req, res) => {
    // User logout
    try {

        if(req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(204).end();
            });

        } else {
            res.status(404).end();
        }

    } catch (err) {
        console.log(err);
            res.status(500).json(err);
    }
});

module.exports = router;