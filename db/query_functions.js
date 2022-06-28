const getAllOrganizationalPasswords = (orgId) => {
  return `
  SELECT website_nickname, login_email, login_password, website_url, category_id
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

module.exports = {
  getEmail,
  getOrganization,
  getAllOrganizationalPasswords
};
