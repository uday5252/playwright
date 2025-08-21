-- create database books_db;

-- use books_db;

-- -- primary key = unique + not null

-- create table books(
-- id int primary key auto_increment, 
-- title varchar(10) not null,
-- author varchar(20) not null);

-- insert into books values(1, "DSA", 
-- "Raju");
-- insert into books(title, author) values("SDA", "Ramu");

-- -- select * from books;






-- -- select author || " learns " || title as Info from books;

-- select @@sql_mode;

-- set sql_mode="PIPES_AS_CONCAT";

-- select author || " learns " || title as Info from books;

create database persons_db;
 use persons_db;
 -- Create table
CREATE TABLE persons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);

-- Insert rows (same age but different names)
INSERT INTO persons (name, age) VALUES
('Alice', 25),
('Bob', 25),       
('Charlie', 30),
('David', 30),     
('Eve', 35),
('Frank', 35),     
('Grace', 40);     


select * from persons order by age desc, 
name desc limit 3 offset 2;







