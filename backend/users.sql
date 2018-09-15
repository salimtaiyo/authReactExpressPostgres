DROP TABLE IF EXISTS users;

CREATE TABLE users(
    username CHARACTER(64),
    password CHARACTER(64)
);

INSERT INTO users(username, password) VALUES
('shalomshalom', 'shalom21'),
('hal', 'shalom21');

