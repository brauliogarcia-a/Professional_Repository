<?php
//The model for the search page

//Query the database to populate the list of results based on the used keyword
function getSearchData($keyword){ 
    $keyword = "%$keyword%";
    $db = phpmotorsConnect(); 
    $sql = "SELECT * FROM inventory WHERE invDescription LIKE :keyword OR invMake LIKE :keyword OR invModel LIKE :keyword OR invColor LIKE :keyword";
    $stmt = $db->prepare($sql); 
    $stmt->bindValue(':keyword',$keyword, PDO::PARAM_STR);
    $stmt->execute(); 
    $keywordSearched = $stmt->fetchAll(PDO::FETCH_ASSOC); 
    $stmt->closeCursor(); 
    return $keywordSearched; 
}

//Query the database to populate the list of results based on pagination
function getSearchData2($keywordSearched,$keyword,$page){ 
    $results_display = 10;
    $keyword = "%$keyword%";
    $from_page = ($page-1)*$results_display;
    $db = phpmotorsConnect(); 
    $sql = "SELECT * FROM inventory WHERE invDescription LIKE :keyword OR invMake LIKE :keyword OR invModel LIKE :keyword OR invColor LIKE :keyword LIMIT $from_page,$results_display";
    $stmt = $db->prepare($sql); 
    $stmt->bindValue(':keyword',$keyword, PDO::PARAM_STR);
    $stmt->execute(); 
    $keywordSearched = $stmt->fetchAll(PDO::FETCH_ASSOC); 
    $stmt->closeCursor(); 
    return $keywordSearched; 
}

//Total Results
function getTotalResults($keyword){ 
    $keyword = "%$keyword%";
    $db = phpmotorsConnect(); 
    $sql = 'SELECT * FROM inventory WHERE invDescription LIKE :keyword OR invMake LIKE :keyword OR invModel LIKE :keyword OR invColor LIKE :keyword';
    $stmt = $db->prepare($sql); 
    $stmt->bindValue(':keyword',$keyword, PDO::PARAM_STR);
    $stmt->execute(); 
    $keywordSearched = $stmt->fetchAll(PDO::FETCH_ASSOC); 
    $total_results = $stmt->rowCount();
    $stmt->closeCursor(); 
    return $total_results; 
}


?>