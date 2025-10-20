INSERT INTO clients (clientFirstname, clientLastname, clientEmail, clientPassword, comments)
VALUES ("Tony", "Stark", "tony@starkent.com", "Iam1ronM@n", "I am the real Ironman");

UPDATE clients
SET clientLevel = 3
WHERE clientId = 4

UPDATE inventory
SET invDescription = "Do you have 6 kids and like to go off-roading? The Hummer gives you the spacious interior with an engine to get you out of any muddy or rocky situation."
WHERE invId = 12

SELECT *
FROM inventory
INNER JOIN carclassification ON inventory.classificationId = carclassification.classificationId
WHERE classificationName = "SUV"

DELETE FROM inventory WHERE invId = 1

UPDATE inventory
SET invThumbnail = CONCAT("/phpmotors", invThumbnail), invImage = CONCAT("/phpmotors", invImage);