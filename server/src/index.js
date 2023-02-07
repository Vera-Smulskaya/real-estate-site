const express = require('express');
const session = require('express-session');
const passport = require('passport');
const router = require('./routes/');
const path = require('path');
const config = require('config');
const PORT = config.get('port');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require('./models/');
const sessionSecret = config.get('session_secret');

const store = new SequelizeStore({
    db: db.sequelize,
  });

store.sync();

const returnIndexHtml = (staticPath) => (req, res, next) => {
    res.sendFile(path.join(__dirname, `../${staticPath}/index.html`))};

express()    
    .use('/', express.static(path.join(__dirname, "..", "static")))
    .use(express.json())
    .use(session({ secret: sessionSecret, store: store, resave: false, saveUninitialized: true }))
    .use(passport.session())
    .use('/api', router)
    .use('/admin', returnIndexHtml('static/admin'))
    .use('/', returnIndexHtml('static'))
    .listen(PORT, () => console.log(`Started on :${PORT}`));
