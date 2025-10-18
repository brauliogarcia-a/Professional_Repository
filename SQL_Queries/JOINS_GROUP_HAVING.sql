-- =============================================
-- Author: Braulio Garcia Gonzalez
-- Description:
-- use JOINs, GROUP BY, HAVING, and date functions.
-- =============================================


-- Query #1
-- Count how many courses exist in each college
SELECT c.college AS College, COUNT(c.courseNumber) AS Courses
FROM college c
JOIN course co 
ON c.courseNumber = co.courseNumber
GROUP BY college;


-- Query #2
-- Show total teaching capacity per professor, year and term
SELECT t.professorName AS ProfessorName, YEAR(t.year) AS Year, t.term AS Term, 
       SUM(c.capacityClass) AS TeachingCapacity
FROM term t  
JOIN professor p 
ON t.professorName = p.professorName
JOIN course c 
ON p.courseNumber = c.courseNumber
GROUP BY p.professorName, t.year, t.term
ORDER BY p.professorName ASC, t.year ASC;  


-- Query #3
-- Count the number of students per professor, year and term
SELECT t.professorName AS ProfessorName, YEAR(t.year) AS Year, t.term AS Term, 
       COUNT(s.studentName) AS StudentCount
FROM term t  
JOIN professor p 
ON t.professorName = p.professorName
JOIN course c 
ON p.courseNumber = c.courseNumber
JOIN student s
ON s.studentName = t.studentName
GROUP BY p.professorName, t.term, t.year
ORDER BY p.professorName ASC, t.year ASC;  


-- Query #4
-- Find the name of the professor who taught Bryce in 2017
SELECT p.professorName AS Name
FROM term t  
JOIN professor p 
ON t.professorName = p.professorName
JOIN course c 
ON p.courseNumber = c.courseNumber
JOIN student s
ON t.studentName = s.studentName
WHERE t.year = "2017-01-01" 
AND s.studentName = "Bryce";


-- Query #5
-- Find the student who took Econometrics in 2016
SELECT s.studentName AS StudentName
FROM term t  
JOIN professor p 
ON t.professorName = p.professorName
JOIN course c 
ON p.courseNumber = c.courseNumber
JOIN student s
ON t.studentName = s.studentName
WHERE t.year = "2016-01-01" 
AND c.courseName = "Econometrics";


-- Query #6
-- Calculate total credits per student, ordered by year, term and credits
SELECT s.studentName AS StudentName, t.term AS Term, YEAR(t.year) AS Year, 
       SUM(c.credits) AS Credits
FROM term t  
JOIN professor p 
ON t.professorName = p.professorName
JOIN course c 
ON p.courseNumber = c.courseNumber
JOIN student s
ON t.studentName = s.studentName
GROUP BY s.studentName
ORDER BY YEAR ASC, Term, Credits DESC;


-- Query #7
-- Same as Query #6 but only show students with more than 3 total credits
SELECT s.studentName AS StudentName, t.term AS Term, YEAR(t.year) AS Year, 
       SUM(c.credits) AS Credits
FROM term t  
JOIN professor p 
ON t.professorName = p.professorName
JOIN course c
ON p.courseNumber = c.courseNumber
JOIN student s
ON t.studentName = s.studentName
GROUP BY s.studentName
HAVING SUM(c.credits) > 3
ORDER BY YEAR ASC, Term, Credits DESC;


-- Query #8
-- Show students born in September
SELECT s.studentName AS StudentName, s.DOB
FROM term t  
JOIN professor p 
ON t.professorName = p.professorName
JOIN course c 
ON p.courseNumber = c.courseNumber
JOIN student s
ON t.studentName = s.studentName
HAVING MONTH(s.DOB) = 9;


-- Query #9
-- Calculate each student's age and remaining days in the year (based on DOB)
SELECT s.studentName AS StudentName, s.DOB, 
       FLOOR(DATEDIFF("2017-01-05", s.DOB)/365) AS Years, 
       (365 - ((MONTH(s.DOB)-1)*30 + (DAY(s.DOB)))) AS Days, 
       CONCAT(FLOOR(DATEDIFF("2017-01-05", s.DOB)/365), "-Yrs ", 
              (365 - ((MONTH(s.DOB)-1)*30 + (DAY(s.DOB)))), "-Days") AS YearsDays
FROM term t  
JOIN professor p 
ON t.professorName = p.professorName
JOIN course c 
ON p.courseNumber = c.courseNumber
JOIN student s
ON t.studentName = s.studentName
GROUP BY s.studentName
ORDER BY Years DESC;
