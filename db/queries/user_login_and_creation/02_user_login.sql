SELECT password
FROM users
WHERE email LIKE $1;
-- Note, $1 will be a sanitized value fetched from the login form. The retrieved (and hopefully hashed!) password could then be used to compare against the user input one.
