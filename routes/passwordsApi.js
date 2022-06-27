const express = require('express');
const router  = express.Router();

const {
  getAllOrganizationalPasswords,
  getAllOrganizationalPasswordsWithinCategory,
  getAllOrganizationalPasswordsFromSearch
} = require('../db/query_functions')

module.exports = (db) => {

  router.post('/', (req, res) =>{
    console.log(req.body)
    res.send({id:5})
  })

  router.get('/search/categories', (req, res) => {
    const orgId = req.session.orgId;
    db.query(getAllOrganizationalPasswordsWithinCategory(orgId, 3))
    .then(data => {
      const passwords = data.rows;
      res.json({ passwords });
    })
    .catch (err => {
      res
        .status(500)
        .json({error: err.message });
    });
  })

  router.get('/search/:query', (req, res) => {
    const orgId = req.session.orgId;
    const query = req.params.query;

    db.query(getAllOrganizationalPasswordsFromSearch(orgId, query))
    .then(data => {
      const passwords = data.rows;
      res.json({ passwords });
    })
    .catch (err => {
      res
        .status(500)
        .json({error: err.message });
    });
  })

  return router;
};
