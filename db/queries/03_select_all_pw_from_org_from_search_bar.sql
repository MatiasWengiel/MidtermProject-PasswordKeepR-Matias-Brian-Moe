SELECT website_nickname, login_email, login_password FROM passwords
JOIN organizations ON passwords.organization_id = organizations.id
JOIN categories ON passwords.category_id = categories.id
WHERE passwords.website_nickname LIKE '%%' OR
      passwords.website_url LIKE '%%' OR
      categories.category LIKE '%%' AND
      passwords.organization_id = 1;
-- Inside the % we'll have a sanitized value from the search field
