SELECT website_nickname, login_email, login_password FROM passwords
JOIN organizations ON passwords.organization_id = organizations.id
WHERE passwords.organization_id = 1;
-- For the actual code, we'd need to get the current user's org. ID
