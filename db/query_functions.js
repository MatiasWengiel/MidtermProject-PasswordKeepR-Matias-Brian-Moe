
const getAllOrganizationalPasswords = (orgId) => {
  return `
  SELECT website_nickname, login_email, login_password, website_url, category_id
  FROM passwords
  JOIN organizations ON passwords.organization_id = organizations.id
  JOIN categories ON passwords.category_id = categories.id
  WHERE passwords.organization_id = ${orgId};
  `
}

const getAllOrganizationalPasswordsWithinCategory = (orgId, category) => {
  return `
  SELECT website_nickname, login_email, login_password FROM passwords
  JOIN organizations ON passwords.organization_id = organizations.id
  JOIN categories ON passwords.category_id = categories.id
  WHERE passwords.organization_id = ${orgId} AND categories.id = ${category};
  ` // Still need to change categories.id to fetch the id from the user selection
}


const getAllOrganizationalPasswordsFromSearch = (orgId, query) => {
  return `
  SELECT website_nickname, login_email, login_password FROM passwords
  JOIN organizations ON passwords.organization_id = organizations.id
  JOIN categories ON passwords.category_id = categories.id
  WHERE passwords.website_nickname LIKE '%${query}%' OR
        passwords.website_url LIKE '%${query}%' OR
        categories.category LIKE '%${query}%' AND
        passwords.organization_id = ${orgId};;
  `
}
module.exports = {
  getAllOrganizationalPasswords,
  getAllOrganizationalPasswordsWithinCategory,
  getAllOrganizationalPasswordsFromSearch
}
