const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const userId = req.session.userId;
    res.send(`<h1>This is the /passwords page, where you will be able to see all the passwords linked to your organization </h1><h2>The logged in user is ${userId}<h2>`);
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

    const passwordId = req.params.id;
    res.send(`<h1>This is the link where you would see the information about a single password</h1><h2>For example, now you'd be seeing the info for ${passwordId}`);
  });

  router.post('/:id', (req, res) => {
    const passwordId = req.params.id;
    res.send(`<h1>You have successfully POSTed for password ID ${passwordId}<h1>`)
  })

  router.post('/', (req, res) => {
    res.send(`<h1>You have successfully POSTed to create a new password</h1>`)
  })

  router.post('/:id/delete', (req, res) => {
    const passwordId = req.params.id;
    res.send(`<h1>You have successfully POSTed to delete password ${passwordId}</h1>`)
  })

  return router;
};
