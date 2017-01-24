<?php
	$title = $_GET['q'];

	$servername = "localhost";
	$username = "root";
	$password = "p#66wuRD";
	$dbname = "movieschema";
	//$title = "Fantastic Beasts and Where to Find Them";
	// create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error){
		die("Connection failed: " . $conn->connect_error);
	}

	// Query
	$sql = "SELECT score FROM movies WHERE title ='". $title. "'";
	$result = $conn->query($sql);

	// Return result
	if($result->num_rows > 0) {
		$row = $result->fetch_assoc();
		//echo "score: " . $row["score"]. "\n";
		//echo "<div><p>Score: " . $row["score"]. "</p></div>";	
		$math = $row["score"];
		$final = floatval($math);
		$final = (($final + 1.0) / 2.0) *100.0;
		echo number_format($final, 2, '.', '') . "%";		
	} else {
		echo "0 results mang";
	}

	$conn->close();

?>
