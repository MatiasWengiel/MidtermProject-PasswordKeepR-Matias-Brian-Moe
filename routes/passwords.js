const express = require("express");
const router = express.Router();

const {
  getEmail,
  editLogin,
  getOrganization,
  addNewPassword,
  getAllOrganizationalPasswords
} = require("../db/query_functions");

const alphabetizePasswords = (passwords) => { //Only helper function server-side, if more are needed will move to dedicated
  return passwords.sort((firstPW, secondPW) => {
    let lowerCaseN1 = firstPW.website_nickname.toLowerCase();
    let lowerCaseN2 = secondPW.website_nickname.toLowerCase();

    if (lowerCaseN1 > lowerCaseN2) {
      return 1
    } else if (lowerCaseN1 < lowerCaseN2) {
      return -1
    } else {
      return 0
    }
  });
};


module.exports = (db) => {

  router.get("/", (req, res) => {
    const { userId, orgId } = req.session;

    db.query(getEmail(orgId))
      .then((data) => {
        const email = data.rows[0].email;

        db.query(getOrganization(orgId)).then((data) => {
          const organization = data.rows[0].name;

          db.query(getAllOrganizationalPasswords(orgId)).then((data) => {
            const passwords = alphabetizePasswords(data.rows);

            let templateVars = {
              passwords,
              email,
              organization,
            };
            res.render("passwords_page", templateVars);
          });
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });


  router.post("/", (req, res) => {
    const { userId, orgId } = req.session;
    const { loginEmail, newPassword, account, url, category } = req.body;
    db.query(addNewPassword(), [
      loginEmail,
      newPassword,
      account,
      url,
      category,
      orgId,
    ]);

    res.redirect("passwords");
  });

  router.post("/:id", (req, res) => {
    const passwordId = req.params.id;
    const { loginEmail, loginPassword } = req.body;
    const { orgId } = req.session;
    db.query(editLogin(loginEmail, loginPassword, orgId, passwordId));
  });

  router.post("/:id/delete", (req, res) => {
    const passwordId = req.params.id;
    res.send(
      `<h1>You have successfully POSTed to delete password ${passwordId}</h1>`
    );
  });

  return router;
};
