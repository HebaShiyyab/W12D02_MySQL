USE library;

CREATE TABLE books (
  id INT AUTO_INCREMENT NOT NULL,
    title varchar(255),
    author varchar(255),
    published_at INT,
    price INT,
    created_at DATETIME,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

INSERT INTO books (title, author, published_at, price) VALUES ('John 1', 'john', 2010,200 );
INSERT INTO books (title, author, published_at, price) VALUES ('John ', 'jorhn', 2020,200 );
INSERT INTO books (title, author, published_at, price) VALUES ('John ', 'jorhn', 2020,200 );
INSERT INTO books (title, author, published_at, price) VALUES ('John ', 'jorhn', 2020,200 );
INSERT INTO books (title, author, published_at, price) VALUES ('John ', 'jorhn', 2020,200 );
