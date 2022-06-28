const express = require("express");
const router = express.Router();

const {
  getEmail,
  editLogin,
  getOrganization,
  getAllOrganizationalPasswords,
  // getAllOrganizationalPasswordsWithinCategory,
  getAllOrganizationalPasswordsFromSearch,
} = require("../db/query_functions");

module.exports = (db) => {
  router.get("/new", (req, res) => {
    res.send("<h1>This is the /users page</h1>");
  });

  router.get("/", (req, res) => {
    const userId = req.session.userId;
    const orgId = req.session.orgId;

    db.query(getEmail(orgId))
      .then((data) => {
        const email = data.rows[0].email;

        db.query(getOrganization(orgId)).then((data) => {
          const organization = data.rows[0].name;

          db.query(getAllOrganizationalPasswords(orgId)).then((data) => {
            const passwords = data.rows;

            let templateVars = {
              passwords,
              email,
              organization,
            };

            res.render("passwords_page", templateVars); //We can change this to render the page showing the PWs
          });
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/:id", (req, res) => {
    const passwordId = req.params.id;
    res.send(
      `<h1>You have successfully POSTed for password ID ${passwordId}<h1>`
    );
  });

  router.post("/", (req, res) => {
    const { userId, orgId } = req.session;
    const { email, password, label } = req.body;
    db.query(editLogin(email, password, orgId, label));
  });

  router.post("/:id/delete", (req, res) => {
    const passwordId = req.params.id;
    res.send(
      `<h1>You have successfully POSTed to delete password ${passwordId}</h1>`
    );
  });

  return router;
};
