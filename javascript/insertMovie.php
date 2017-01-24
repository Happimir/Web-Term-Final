<?php
	$title = $_GET['q'];
	$tweetTitle = str_replace(' ', '', $title);
	$tweetTitle = str_replace(':', '', $tweetTitle);
	$tweetTitle = strtolower($tweetTitle);

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

	// Query to see if movie exists
	$sql = "SELECT title FROM movies WHERE title ='". $title. "'";
	$result = $conn->query($sql);

	// Movie already in db
	if($result->num_rows > 0) {
			
	} else 
	// Movie not in db yet
	{
		$sql = "INSERT INTO movies (title, score, totalScore, tweetCount, tweetTitle)
		VALUES ('". $title. "', 0, 0, 0 ,'". $tweetTitle. "')";
		$conn->query($sql);
	}

	$conn->close();

?>
