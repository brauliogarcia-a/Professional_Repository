<?php
// This is the accounts model file 

function regVeh($invMake, $invModel, $invDescription, $invPrice, $invYear, $invMiles, $invColor, $classification){
 // Create a connection object using the phpmotors connection function
 $db = phpmotorsConnect();
 // The SQL statement
 $sql = 'INSERT INTO inventory (invMake, invModel, invDescription, invPrice, invYear, invMiles, invColor, classificationId)
     VALUES (:invMake, :invModel, :invDescription, :invPrice, :invYear, :invMiles, :invColor, :classificationId)';
 // Create the prepared statement using the phpmotors connection
 $stmt = $db->prepare($sql);
 // The next four lines replace the placeholders in the SQL
 // statement with the actual values in the variables
 // and tells the database the type of data it is
 $stmt->bindValue(':invMake', $invMake, PDO::PARAM_STR);
 $stmt->bindValue(':invModel', $invModel, PDO::PARAM_STR);
 $stmt->bindValue(':invDescription',$invDescription, PDO::PARAM_STR);
 $stmt->bindValue(':invPrice', $invPrice, PDO::PARAM_STR);
 $stmt->bindValue(':invYear', $invYear, PDO::PARAM_STR);
 $stmt->bindValue(':invMiles', $invMiles, PDO::PARAM_STR);
 $stmt->bindValue(':invColor', $invColor, PDO::PARAM_STR);
 $stmt->bindValue(':classificationId', $classification, PDO::PARAM_STR);
 // Insert the data
 $stmt->execute();
 // Ask how many rows changed as a result of our insert
 $rowsChanged = $stmt->rowCount();
 // Close the database interaction
 $stmt->closeCursor();
 // Return the indication of success (rows changed)
 return $rowsChanged;
}

// Get vehicles by classificationId 
function getInventoryByClassification($classificationId){ 
    $db = phpmotorsConnect(); 
    $sql = ' SELECT * FROM inventory WHERE classificationId = :classificationId'; 
    $stmt = $db->prepare($sql); 
    $stmt->bindValue(':classificationId', $classificationId, PDO::PARAM_INT); 
    $stmt->execute(); 
    $inventory = $stmt->fetchAll(PDO::FETCH_ASSOC); 
    $stmt->closeCursor(); 
    return $inventory; 
}

// Get vehicle information by invId
function getInvItemInfo($invId){
    $db = phpmotorsConnect();
    $sql = 'SELECT * FROM inventory WHERE invId = :invId';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':invId', $invId, PDO::PARAM_STR);
    $stmt->execute();
    $invInfo = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $invInfo;
}

function updateVehicle($invId, $invMake, $invModel, $invDescription, $invPrice, $invYear, $invMiles, $invColor, $classification){
    // Create a connection object using the phpmotors connection function
    $db = phpmotorsConnect();
    // The SQL statement
    $sql = 'UPDATE inventory SET invMake = :invMake, invModel = :invModel, 
	invDescription = :invDescription, invPrice = :invPrice, invYear = :invYear,
	invMiles = :invMiles, invColor = :invColor, 
	classificationId = :classificationId WHERE invId = :invId';
    // Create the prepared statement using the phpmotors connection
    $stmt = $db->prepare($sql);
    // The next four lines replace the placeholders in the SQL
    // statement with the actual values in the variables
    // and tells the database the type of data it is
    $stmt->bindValue(':invMake', $invMake, PDO::PARAM_STR);
    $stmt->bindValue(':invModel', $invModel, PDO::PARAM_STR);
    $stmt->bindValue(':invDescription',$invDescription, PDO::PARAM_STR);
    $stmt->bindValue(':invPrice', $invPrice, PDO::PARAM_STR);
    $stmt->bindValue(':invYear', $invYear, PDO::PARAM_STR);
    $stmt->bindValue(':invMiles', $invMiles, PDO::PARAM_STR);
    $stmt->bindValue(':invColor', $invColor, PDO::PARAM_STR);
    $stmt->bindValue(':classificationId', $classification, PDO::PARAM_STR);
    $stmt->bindValue(':invId', $invId, PDO::PARAM_STR);
    // Insert the data
    $stmt->execute();
    // Ask how many rows changed as a result of our insert
    $rowsChanged = $stmt->rowCount();
    // Close the database interaction
    $stmt->closeCursor();
    // Return the indication of success (rows changed)
    return $rowsChanged;
   }

//To delete a specific car from the database. vehicle delete page.   
function deleteVehicle($invId) {
    $db = phpmotorsConnect();
    $sql = 'DELETE FROM inventory WHERE invId = :invId';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':invId', $invId, PDO::PARAM_STR);
    $stmt->execute();
    $rowsChanged = $stmt->rowCount();
    $stmt->closeCursor();
    return $rowsChanged;
   }

//Get an array from the database. first extract from the inventory table, and then match the classification id in the inventory with the classification id and classification name from the classification table.
//The function will be updated to get the image URL from the new images table
function getVehiclesByClassification($classificationName){
    $db = phpmotorsConnect();
    //The IN value will filter the entire inventory table but will show the cars just for the category that was selected at the moment of clicking the mega menu (things occurr in the middle to make this happen)
    $sql = 'SELECT inventory.classificationId,images.imgPath,images.imgPrimary,inventory.invId,inventory.invMake,inventory.invModel,inventory.invPrice
    FROM images
    LEFT JOIN inventory ON images.invId=inventory.invId
    WHERE images.imgPath LIKE "%-tn.%" AND imgPrimary = 1 AND inventory.classificationId IN (SELECT classificationId FROM carclassification WHERE classificationName = :classificationName)';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':classificationName', $classificationName, PDO::PARAM_STR);
    $stmt->execute();
    $vehicles = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $vehicles;
   }

// Get vehicle information by Model - The function will be updated to get the image URL from the new images table
function getVehicleInventory($invId){
    $db = phpmotorsConnect();
    $sql = 'SELECT inventory.invId,inventory.invMake,inventory.invModel,inventory.invDescription,inventory.invPrice,images.imgPath,images.imgPrimary,inventory.invMiles,inventory.invColor,inventory.classificationId
    FROM inventory 
    LEFT JOIN images ON inventory.invId=images.invId
    WHERE inventory.invId = :invId AND images.imgPath NOT LIKE "%-tn.%" AND imgPrimary = 1';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':invId', $invId, PDO::PARAM_STR);
    $stmt->execute();
    $invVehicle = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $invVehicle;
}

//Get Thumbnails
function getVehicleThumb($invId){
    $db = phpmotorsConnect();
    $sql = 'SELECT *
    FROM images
    WHERE invId = :invId AND imgPath LIKE "%-tn.%"';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':invId', $invId, PDO::PARAM_STR);
    $stmt->execute();
    $vehiclesThumb = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $vehiclesThumb;
   }

// Get information for all vehicles
function getVehicles(){
	$db = phpmotorsConnect();
	$sql = 'SELECT invId, invMake, invModel FROM inventory';
	$stmt = $db->prepare($sql);
	$stmt->execute();
	$invInfo = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$stmt->closeCursor();
	return $invInfo;
}

?>