<?php include 'include/header.php';?>
<?php include 'include/navigation.php';?>

<div id="content">

<h1>Sign Up for our Newsletter</h1>
  
 <?php
require("config.php");
if($_SERVER['REQUEST_METHOD'] == "POST"){
	$email=$_POST['emailUnsub'];
	$stmt = $con->prepare("DELETE FROM After3_newsletter WHERE email=?");
	$stmt->bind_param("s", $email);
	$select = mysqli_query($con, "SELECT `email` FROM `After3_newsletter` 
	WHERE `email` = '".$_POST['emailUnsub']."'");//
		if($stmt->execute()&& mysqli_num_rows($select)){
			echo "Unsubscribed successfully.<br/><br/>";
		}else{
			echo "Email is not subscribed.<br/>";
		}
}
?>

  
  
  <br>
   <a href="newsletterSignup.php">Return to newsletter signup.</a>


</div>

<?php include 'include/footer.php';?>


</body>


</html>





