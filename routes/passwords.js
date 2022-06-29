const express = require("express");
const router = express.Router();

const {
  getEmail,
  editLogin,
  getOrganization,
  addNewPassword,
  getAllOrganizationalPasswords,
  // getAllOrganizationalPasswordsWithinCategory,
  getAllOrganizationalPasswordsFromSearch,
} = require("../db/query_functions");

module.exports = (db) => {
  router.get("/new", (req, res) => {
    res.send("<h1>This is the /users page</h1>");
  });

  router.get("/", (req, res) => {
    const { userId, orgId } = req.session;

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

  // router.get("/json", (req, res) => {
  //   const userId = req.session.userId;
  //   const orgId = req.session.orgId;

  //   db.query(getEmail(orgId))
  //     .then((data) => {
  //       const email = data.rows[0].email;

  //       db.query(getOrganization(orgId)).then((data) => {
  //         const organization = data.rows[0].name;

  //         db.query(getAllOrganizationalPasswords(orgId)).then((data) => {
  //           const passwords = data.rows;

  //           let templateVars = {
  //             passwords,
  //             email,
  //             organization,
  //           };

  // //            res.render("passwords_page", templateVars); //We can change this to render the page showing the PWs
  //           res.json(templateVars);
  //         });
  //       });
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
  // });


  router.post("/", (req, res) => {

    const { userId, orgId } = req.session;
    const { loginEmail, newPassword, account, url, category } = req.body
    const { email, password, label } = req.body;
    db.query(addNewPassword(), [loginEmail, newPassword, account, url, category, orgId])
    db.query(editLogin(email, password, orgId, label));


    res.send(`<h1>You have successfully POSTed to create a new password</h1>`);
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
