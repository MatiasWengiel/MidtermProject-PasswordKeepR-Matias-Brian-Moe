INSERT INTO users (email, password, organization_id) VALUES ($1, $2, $3);
--Note: $1, $2 and $3 will be sanitized values retrieved from a form in the HTML
