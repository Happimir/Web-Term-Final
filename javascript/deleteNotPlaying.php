<?php
	$sql = $_GET['q'];
	$servername = "localhost";
	$username = "root";
	$password = "p#66wuRD";
	$dbname = "movieschema";
	// create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error){
		die("Connection failed: " . $conn->connect_error);
	}

	// Query to remove movies not in the GET list 	
	$result = $conn->query($sql);

	$conn->close();
?>
