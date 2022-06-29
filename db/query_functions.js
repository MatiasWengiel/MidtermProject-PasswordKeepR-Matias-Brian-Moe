const getAllOrganizationalPasswords = (orgId) => {
  return `
  SELECT website_nickname, login_email, login_password, website_url, category_id, passwords.id
  FROM passwords
  JOIN organizations ON passwords.organization_id = organizations.id
  JOIN categories ON passwords.category_id = categories.id
  WHERE passwords.organization_id = ${orgId};
  `;
};

const getEmail = (userId) => {
  return `SELECT users.email
  FROM users
  WHERE users.id = ${userId};`;
};

const getOrganization = (userId) => {
  return `SELECT organizations.name
  FROM organizations
  JOIN users ON organization_id = organizations.id
  WHERE organizations.id = ${userId};
  `;
};


const addNewPassword = () => {
  return `INSERT INTO passwords (login_email, login_password, website_nickname, website_url, category_id, organization_id)
  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`

};

const editLogin = (newEmail, newPassword, organizationId, passwordId) => {

  return `UPDATE passwords
 SET login_email='${newEmail}', login_password='${newPassword}'
 WHERE organization_id=${organizationId} AND passwords.id='${passwordId}';`;
};

module.exports = {
  getEmail,
  editLogin,
  getOrganization,
  addNewPassword,
  getAllOrganizationalPasswords

};
