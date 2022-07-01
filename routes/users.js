/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get('/login', (req, res) => { //Would normally be a POST route, using GET since we are not implementing login for our DEMO. Placeholders below
    req.session.userId = '1';
    req.session.orgId = '1';
    res.redirect('/users/1');
  });

  return router;
};
