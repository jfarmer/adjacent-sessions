# March 11 Session

## Adding New Features

1. Making room for new information in an existing database
1. Relating data between multiple tables (relationships)

## Making Room

1. Alter the database to store the new information
1. Modify the HTML to make use of the new information
   1. Displaying the information
   1. If it's information a user provides, some place for the user to provide that information
1. Add a new route (or endpoint) that works with the new information

## SQL Keywords

- `CREATE TABLE` to create a new table
- `ALTER TABLE` to modify an existing table
- `UPDATE` to update a row in a specific table
- `INSERT INTO` to insert a new row into a specific table

See [the SQL file](social_wall_group1.sql) from the session.

## Migrations

To modify or create a table, we need to create a migration using knex.  Google things like:

- `knex create migration`
- `knex alter table migration`
- `knex create table migration`

## Remember To Start With...

- What questions to we want to ask?
- What data do we need to to answer those questions and how must it be organized?
