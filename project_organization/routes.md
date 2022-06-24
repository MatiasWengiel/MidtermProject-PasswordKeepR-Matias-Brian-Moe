<!-- List of routes and explanations for them (if necessary) -->
# Browse - Read - Edit - Add - Delete

## Users/Login
* B users - GET /users <!-- Seeing the users linked to an org. Stretch? -->
* R users - GET /users/:id <!-- Seeing user info (email, org) -->
* E users - POST /users/:id <!-- Edit a user's email? May be better for a stretch -->
* A users - POST /users <!-- Create new user -->
* D users - POST /users/:id/delete <!-- Delete existing user -->

* Login - POST /users/login

## Passwords
* B passwords - GET /passwords <!-- See all the PWs associated with the user's org -->
  * B passwords categories - GET /passwords/search/categories
  * B passwords searchbar - GET /passwords/search/:query
* R passwords - GET /passwords/:id <!-- See detail for a single PW -->
* E passwords - POST /passwords/:id <!-- Edit a stored password and/or change its category-->
* A passwords - POST /passwords <!-- Create new password-->
* D passwords - POST /passwords/:id/delete<!-- Delete existing passwords -->

<!-- STRETCH BELOW -->

## Organizations
Users can create an organization and a password for it, then anyone else who wants to join the org needs to put in the password

* B organizations - NULL <!-- We would not want people browsing through all our orgs -->
* R organizations - GET /organizations/:id <!-- See details for a single org -->
* E organizations - POST /organizations/:id <!-- Edit the info of an existing org -->
* A organizations - POST /organizations <!-- Create a new org -->
* D organizations - POST /organizations/:id/delete <!-- Delete existing org -->

