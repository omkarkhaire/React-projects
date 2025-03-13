use Test
select * from employees;

--Aggregate Functions
SELECT COUNT(*) "test" FROM employees;
SELECT SUM(salary) FROM employees;
SELECT AVG(salary) FROM employees;
SELECT MAX(salary) FROM employees;
SELECT MIN(salary) FROM employees;

-- String Functions
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;
SELECT SUBSTRING(email, 1, 5) FROM employees;
SELECT UPPER(first_name) FROM employees;
SELECT LOWER(last_name) FROM employees;
SELECT LEN(first_name) FROM employees;
SELECT TRIM(email) as trimmedEmail FROM employees;

--Date and Time Functions
SELECT GETDATE();

--only date
SELECT CAST(GETDATE() AS DATE);
-- Or alternatively
SELECT CONVERT(DATE, GETDATE());

SELECT DATEDIFF(DAY, '2025-01-01', '2025-12-31');
SELECT DATEDIFF(Year, '2025-01-01', '2026-12-31');

SELECT DATEADD(MONTH, 1, '2025-01-01');
SELECT DATEADD(YEAR, -1, '2025-01-01');





--Conditional Functions

SELECT first_name, 
       CASE 
          WHEN salary > 50000 THEN 'High Salary'
          ELSE 'Low Salary'
       END AS salary_category
FROM employees;

SELECT NULLIF(salary, 0) FROM employees;
SELECT COALESCE(salary, 0) FROM employees;

--Mathematical Functions

SELECT ROUND(salary, 2) FROM employees;
SELECT FLOOR(salary) FROM employees;
SELECT CEILING(salary) FROM employees;


--Window Functions

--ROW_NUMBER(): Assigns a unique number to each row in a result set.
SELECT employee_id, first_name, salary,
       ROW_NUMBER() OVER (ORDER BY salary DESC) AS rank
FROM employees;

--RANK(): Assigns a rank to each row within a partition of a result set, with gaps in the ranking if there are ties.
SELECT employee_id, first_name, salary,
       RANK() OVER (ORDER BY salary DESC) AS salary_rank
FROM employees;

--DENSE_RANK()
-- Similar to RANK(), but it does not leave gaps in the ranking when there are ties (ties i.e., rows with the same values).
SELECT employee_id, first_name, salary,
       DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_salary_rank
FROM employees;

/* IMP 1. RANK():
RANK() assigns a rank to each row within a partition, but it skips rank values if there are ties.
When two or more rows have the same value, they receive the same rank, but the next rank will be "skipped."
2. DENSE_RANK():
DENSE_RANK() also assigns a rank to each row, but it doesn't skip any rank values when there are ties.
When two or more rows have the same value, they receive the same rank, and the next rank will be the next consecutive integer without any gaps.
*/

--rank with partation
SELECT employee_id, first_name, department_id, salary,
       RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS department_salary_rank
FROM employees;

--dense rank with partation
SELECT employee_id, first_name, department_id, salary,
       Dense_rank() OVER (PARTITION BY department_id ORDER BY salary DESC) AS department_salary_rank
FROM employees;



--sum with partation it will give Cumulative Salary is calculated within each department, ordered by salary in descending order
SELECT employee_id, first_name, department_id, salary,
       SUM(salary) OVER (PARTITION BY department_id ORDER BY salary DESC) AS cumulative_salary
FROM employees;

--sum by partation as order by not used we cans also use count,avg,min,max
SELECT 
    employee_id, first_name, department_id, salary,
    sum(salary) OVER (PARTITION BY department_id) AS num_employees_in_dept 
FROM employees;

/*The LAG() function allows you to access the value from the previous row within the same result set (based on a specified order).

Example:
Let’s say you want to compare each employee's salary to the salary of the previous employee in their department (ordered by salary).
*/

SELECT 
    employee_id, 
    first_name, 
    department_id, 
    salary, 
    LAG(salary, 1) OVER (PARTITION BY department_id ORDER BY salary DESC) AS prev_salary
FROM employees;

/*
The LEAD() function allows you to access the value from the next row within the same result set (based on a specified order).

Example:
Let’s say you want to compare each employee's salary to the salary of the next employee in their department (ordered by salary).

*/

SELECT 
    employee_id, 
    first_name, 
    department_id, 
    salary, 
    lead(salary, 1) OVER (PARTITION BY department_id ORDER BY salary desc) AS next_salary
FROM employees;
































