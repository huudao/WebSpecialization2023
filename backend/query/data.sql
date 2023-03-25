use perfumania;

# CREATE TABLE

DROP TABLE IF EXISTS user;
CREATE TABLE user
(
    user_id     INT          NOT NULL AUTO_INCREMENT,
    username    VARCHAR(255) NOT NULL,
    password    VARCHAR(255) NOT NULL,
    email       VARCHAR(255) NOT NULL,
    first_name  VARCHAR(255) NOT NULL,
    last_name   VARCHAR(255) NOT NULL,
    telephone   VARCHAR(20)  NOT NULL,
    active      BOOLEAN      NOT NULL,
    inserted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id)
);

DROP TABLE IF EXISTS role;
CREATE TABLE role
(
    role_id     INT         NOT NULL AUTO_INCREMENT,
    name        VARCHAR(50) NOT NULL,
    inserted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (role_id)
);

DROP TABLE IF EXISTS user_roles;
CREATE TABLE user_roles
(
    user_id     INT NOT NULL,
    role_id     INT NOT NULL,
    inserted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES user (user_id),
    FOREIGN KEY (role_id) REFERENCES role (role_id)
);


# INSERT DATA

INSERT INTO role (name)
VALUES ('ROLE_USER'),
       ('ROLE_ADMIN');

INSERT INTO user (username, password, email, first_name, last_name, telephone, active, inserted_at, updated_at)
VALUES ('huudao', '1', '19130029@gmail.com', 'Dao', 'Nguyen Huu', '555-1234', 1, NOW(), NOW());

INSERT INTO user_roles (user_id, role_id)
VALUES ('1', '1'),
       ('1', '2');


