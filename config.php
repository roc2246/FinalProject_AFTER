 <?php
$hostname = "localhost";
$dbuser = "roc09090";
$dbpass = "je5umyju5";
$dbname = "roc09090_wordpress";
$con = new mysqli($hostname, $dbuser, $dbpass, $dbname);
if($con->connect_error){
die("Error connect to db");
}
?>