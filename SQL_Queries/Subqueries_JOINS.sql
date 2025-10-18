-- =============================================
-- Author: Braulio Garcia Gonzalez
-- Description:
-- Use VIEWS with JOINs and subqueries.
-- =============================================


-- View 1: film_ctgry_actor
-- Shows the title, category, and actor names for each film
CREATE VIEW film_ctgry_actor AS
SELECT f.title AS title, 
       c.name AS category_name, 
       a.first_name AS first_name, 
       a.last_name AS last_name 
FROM film f 
LEFT JOIN film_category fc
ON f.film_id = fc.film_id
LEFT JOIN category c
ON fc.category_id = c.category_id
LEFT JOIN film_actor fa
ON f.film_id = fa.film_id
LEFT JOIN actor a
ON fa.actor_id = a.actor_id;

-- Example query using the view above
-- Shows all films where the actor's last name is FAWCETT
SELECT title, category_name, first_name, last_name
FROM film_ctgry_actor
WHERE last_name = 'FAWCETT';



-- View 2: country_payments
-- Calculates the total amount of payments by country
CREATE VIEW country_payments AS
SELECT c.country, 
       (SELECT SUM(p.amount) 
        FROM city ct 
        INNER JOIN address a ON ct.city_id = a.city_id 
        INNER JOIN customer cst ON a.address_id = cst.address_id
        INNER JOIN payment p ON cst.customer_id = p.customer_id
        WHERE ct.country_id = c.country_id) AS tot_payments
FROM country c;

-- Example query using the country_payments view
SELECT * FROM country_payments;



-- View 3: rating_distribution
-- Counts the number of films by each rating category
CREATE VIEW rating_distribution AS
SELECT 
    COUNT(CASE WHEN rating = 'G' THEN rating END) AS G,
    COUNT(CASE WHEN rating = 'PG' THEN rating END) AS PG,
    COUNT(CASE WHEN rating = 'PG-13' THEN rating END) AS "PG-13",
    COUNT(CASE WHEN rating = 'R' THEN rating END) AS R,
    COUNT(CASE WHEN rating = 'NC-17' THEN rating END) AS "NC-17"
FROM film;

-- Example query using the rating_distribution view
SELECT * 
FROM rating_distribution;



-- View 4: actor_films_2006
-- Shows each actor's full name and how many films they made in 2006
CREATE VIEW actor_films_2006 AS
SELECT CONCAT(a.last_name, ", ", a.first_name) AS full_name, 
       f.release_year, 
       COUNT(f.title) AS films_made
FROM actor a 
LEFT JOIN film_actor fa
ON a.actor_id = fa.actor_id
LEFT JOIN film f
ON fa.film_id = f.film_id
WHERE f.release_year = 2006
GROUP BY full_name
ORDER BY full_name;

-- Example query using the actor_films_2006 view
SELECT * 
FROM actor_films_2006;
