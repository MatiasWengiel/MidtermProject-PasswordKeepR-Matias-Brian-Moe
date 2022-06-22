-- Drop and recreate passwords table

DROP TABLE IF EXISTS passwords CASCADE;
CREATE TABLE passwords (
  id SERIAL PRIMARY KEY NOT NULL,
  login_email VARCHAR(255) NOT NULL,
  login_password VARCHAR(255) NOT NULL,
  website_nickname VARCHAR(255) NOT NULL DEFAULT '-',
  website_url VARCHAR(255) NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE
);

