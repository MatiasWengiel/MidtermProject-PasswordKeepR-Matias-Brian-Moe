const express = require('express');
const router  = express.Router();

const {
  getAllOrganizationalPasswords,
  getAllOrganizationalPasswordsWithinCategory,
  getAllOrganizationalPasswordsFromSearch
} = require('../db/query_functions')

module.exports = (db) => {

  router.get('/new', (req, res) =>{
    res.send('<h1>This is the /users page</h1>');
  })

  router.get("/", (req, res) => {
    const userId = req.session.userId;
    const orgId = req.session.orgId;
    db.query(getAllOrganizationalPasswords(orgId))
      .then(data => {
        const passwords = data.rows;

        let templateVars = {
          passwords
        }
        console.log(passwords)
        res.render('passwords_page', templateVars); //We can change this to render the page showing the PWs
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });


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
