<?php include 'include/header.php';?>
<?php include 'include/navigation.php';?>

<div id="content">
 <h1>Sign Up for our Newsletter</h1>

<img id="NewsletterImage" src="resources/photos/envelope.jpg" alt="Newsletter" width="350" height="180"/>

<div id="NewsletterForm">
<form name="subscribe" method="post">
  <p>Subscribe Here:</p>
Email: <input type="text" id="emailSub" name="emailSub"> <br>
<br>
<button type="submit" value="Submit" onclick="isEmail(subscribe, subTxtBox,'subscribe.php')">Subscribe</button>
 <button type="reset" value="Reset">Reset</button>
</form>


<form name="unsubscribe" method="POST"> 
  <p>Unsubscribe Here:</p>    
<label>Email:</label>
<input type="text" id="emailUnsub" name="emailUnsub"> <br> 
  <br>
<button type="submit" value="Submit" onclick="isEmail(unsubscribe, unsubTxtBox,'unsubscribe.php')">Unsubscribe</button>
<button type="reset" value="Reset">Reset</button>
</form> 
</div>
  <p id ="available"></p>
  
   <h2>Why Sign Up for our Newsletter?</h2>
<ul id="SignupReasons">
<li>
<span class="details">Constant Updates</span><br>
At After 3, we’re always updating our site with new information.
 As the industry is in constant change with the times, we’ll be in 
 constant change to keep up as well. With all of the updates, you’ll 
 feel like an industry insider in no time. 
</li>
<li>
<span class="details">Access to New Deals</span><br>
We get it. Ski trips are never the friendliest on your wallet. 
That’s why we always keep an eye out for deals on tickets, passes,
 and places to stay. For your own situation and preferences, we’ll 
 scout out some of the biggest deals in the industry, giving you less of
 a headache for planning your next trip.
</li>
<li>
<span class="details">First Access to the Movie of the Week</span><br>
One of the greatest joys of skiing and riding is to simply get stoked on
 hitting the ski slopes. Being ski bums at heart, we’re always in touch with
 some of the most major outdoor action film companies to provide you with the
 latest and greatest in ski, ride, and outdoor films out there. Through our
 newsletter, you’ll get first access to the movie of the week before the crowd. 
 No need for that Netflix or Hulu subscription!
</li>
</ul>
 
 
</div>
   



<script src = "resources/javaScript/newsletter.js"></script>

<?php include 'include/footer.php';?>

</body>


</html>