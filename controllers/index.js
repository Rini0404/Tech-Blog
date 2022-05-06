const router = require("express").Router();

// finish the required routes
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

// finish the other needed routes with router.use()
router.use("/", homeRoutes);
router.use('/api/', apiRoutes);
router.use('/', dashboardRoutes);
module.exports = router;