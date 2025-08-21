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




1️⃣ Show all employees ordered by salary in ascending order.

2️⃣ Show employees ordered by age in descending order.

3️⃣ Show the top 3 highest paid employees.

4️⃣ Show the 2 youngest employees.

5️⃣ Show employees ordered by department (A→Z), and within each department by salary (highest first).

6️⃣ Skip the 2 highest paid employees and show the next 3.

7️⃣ Show the 4th and 5th oldest employees.

8️⃣ Show all employees, but display only rows 6 to 8 in the sorted order (by name A→Z).

9️⃣ Show employees in the IT department, sorted by salary (highest first), but display only the 2nd and 3rd employees in that order.




=======================================

1️⃣ Find the total sales amount (quantity × price) for each category.

2️⃣ Show only categories where the total sales exceed 50,000.

3️⃣ Find the average price of products in each category, sorted by highest average price.

4️⃣ Show the 2nd and 3rd most expensive products.



create database employee_db;
use employee_db;
CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_name VARCHAR(50),
    department VARCHAR(50),
    salary INT,
    age INT
);

INSERT INTO employees (emp_name, department, salary, age) VALUES
('Alice', 'HR', 40000, 25),
('Bob', 'IT', 60000, 30),
('Charlie', 'IT', 60000, 28),
('David', 'Finance', 50000, 30),
('Eve', 'Finance', 50000, 35),
('Frank', 'HR', 40000, 25),
('Grace', 'IT', 70000, 40),
('Helen', 'HR', 45000, 32),
('Ian', 'Finance', 55000, 29),
('Jack', 'IT', 75000, 45);

