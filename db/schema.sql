
-- Create the database
-- CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table events.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN DEFAULT false NOT NULL,
date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

-- Display Table records.
SELECT * FROM burgers;
