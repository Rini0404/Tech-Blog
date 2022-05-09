// You need the following required:
// path
// express
// express-handlebars
// helpers (if you are putting timestamps on posts)
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const helpers = require('./utils/helpers');


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/config");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
    // For password sessions
};

// app.use(session(sess));

// const hbs = exphbs.create({ helpers });

app.engine("handlebars", exphbs.engine());
// app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  // sequelize.sync({ force: false });
});
