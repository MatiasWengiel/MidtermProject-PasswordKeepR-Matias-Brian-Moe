/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.send('<h1>This is the /users page</h1>');
    // db.query(`SELECT * FROM users;`)
    //   .then(data => {
    //     const users = data.rows;
    //     res.json({ users });
    //   })
    //   .catch(err => {
    //     res
    //       .status(500)
    //       .json({ error: err.message });
    //   });


  });

  router.get('/:id', (req, res) => {
    const userID = req.params.id;
    res.send(`<h1>This route allows you to see the info of user ${userID}<h1>`);
  });

  router.post('/:id', (req, res) => {
    res.send('You successfully POSTed to /users/:id')
  })

  router.post('/', (req, res) => {
    res.send('You successfully posted to /users')
  })

  router.post('/:id/delete', (req, res) => {
    res.send('You successfully posted to /users/:id/delete');
  })
  router.get('/login', (req, res) => { //Would normally be a POST route, using GET since we are not implementing login for our DEMO. Placeholders below
    req.session.userId = '1';
    res.redirect('/users/1');
  });

  return router;
};
