-- =============================================
-- File: Join_Practice_Exercises.sql
-- Author: Braulio Garcia Gonzalez
-- Description:
-- Practice with SQL JOINs and subqueries.
-- This file includes different join types: LEFT, RIGHT, 
-- CROSS, NATURAL, and examples with UNION and REGEXP.
-- =============================================


-- Example 1: LEFT JOIN
-- Count total rentals and total payments per customer
SELECT c.customer_id, 
       CONCAT(c.first_name, ' ', c.last_name) AS Name, 
       COUNT(p.amount) AS Total_Rents, 
       SUM(p.amount) AS Total_Payment
FROM customer AS c
LEFT OUTER JOIN payment AS p
ON c.customer_id = p.customer_id
GROUP BY Name, c.customer_id;


-- Example 2: RIGHT JOIN
-- Same result as Example 1, but starting from the payment table
SELECT c.customer_id, 
       CONCAT(c.first_name, ' ', c.last_name) AS Name, 
       COUNT(p.amount) AS Total_Rents, 
       SUM(p.amount) AS Total_Payment
FROM customer AS c
RIGHT OUTER JOIN payment AS p
ON c.customer_id = p.customer_id
GROUP BY Name, c.customer_id;



-- Example 3: CROSS JOIN
-- Creates a simple counter table from 1 to 100 using ones and tens
SELECT ones.x + tens.x + 1 AS Counter
FROM
(SELECT 0 x UNION ALL
 SELECT 1 x UNION ALL
 SELECT 2 x UNION ALL
 SELECT 3 x UNION ALL
 SELECT 4 x UNION ALL
 SELECT 5 x UNION ALL
 SELECT 6 x UNION ALL
 SELECT 7 x UNION ALL
 SELECT 8 x UNION ALL
 SELECT 9 x) ones
CROSS JOIN
(SELECT 0 x UNION ALL
 SELECT 10 x UNION ALL
 SELECT 20 x UNION ALL
 SELECT 30 x UNION ALL
 SELECT 40 x UNION ALL
 SELECT 50 x UNION ALL
 SELECT 60 x UNION ALL
 SELECT 70 x UNION ALL
 SELECT 80 x UNION ALL
 SELECT 90 x) tens
ORDER BY Counter;



-- Example 4: RIGHT JOIN with REGEXP
-- Shows films starting with 'RAI' or 'RAN' and their inventory IDs
SELECT f.film_id, f.title, i.inventory_id
FROM inventory i 
RIGHT JOIN film f 
ON i.film_id = f.film_id
WHERE f.title REGEXP '^RA(I|N).*$'
ORDER BY f.film_id, f.title, i.inventory_id;



-- Example 5: RIGHT JOIN with additional filter
-- Filters the previous query by specific film IDs
SELECT f.film_id, f.title, i.inventory_id
FROM inventory i 
RIGHT JOIN film f 
ON i.film_id = f.film_id 
WHERE f.title REGEXP '^RA(I|N).*$'
  AND (f.film_id = 712 OR f.film_id = 713)
ORDER BY f.film_id, f.title, i.inventory_id;



-- Example 6: Simple UNION
-- Combines simple text values into one column
SELECT * 
FROM (SELECT 'Yes' AS reply
      UNION ALL
      SELECT 'No' AS reply
      UNION ALL
      SELECT 'Maybe' AS reply) r;



-- Example 7: CROSS JOIN with UNION
-- Demonstrates Cartesian product between two derived tables
SELECT * 
FROM (SELECT 'Yes' AS reply
      UNION ALL
      SELECT 'No' AS reply) decided
CROSS JOIN
     (SELECT 'Maybe' AS reply) undecided;



-- Example 8: NATURAL JOIN
-- Matches columns with the same name automatically
SELECT f.film_id AS left_id,        
       i.film_id AS right_id,        
       f.title
FROM (SELECT film_id, title
      FROM film) f 
NATURAL JOIN inventory i
ORDER BY 1;



-- Example 9: LEFT JOIN with UNION
-- Combines values and then performs a join to compare replies
SELECT * 
FROM (SELECT 'Yes' AS reply, 'Decided' AS answer
      UNION ALL
      SELECT 'No' AS reply, 'Decided' AS answer
      UNION ALL
      SELECT 'Maybe' AS reply, 'Undecided' AS answer) a
LEFT JOIN
     (SELECT 'Yes' AS reply
      UNION ALL
      SELECT 'No' AS reply) b
ON a.reply = b.reply;
