SELECT website_nickname, login_email, login_password FROM passwords
JOIN organizations ON passwords.organization_id = organizations.id
JOIN categories ON passwords.category_id = categories.id
WHERE passwords.organization_id = 1 AND categories.id = 3;
-- For the actual code, we'd need to get the current user's org. ID and a user input category
