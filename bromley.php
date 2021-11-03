<?php include 'include/header.php';?>
<?php include 'include/navigation.php';?>


<div id="content">
<!--NOTE: Sources for images are located at the bottom of this page-->
<h1>Bromley</h1>

<img id ="ResortImage" src="resources/photos/resort_faces/bromley.jpg" alt="Bromley" width="350" height="180"/>


<h2>About Bromley Mountain</h2>
<p> Bromley Mountain has a little bit of everything for everyone. With a variety of beginner, intermediate, and advanced trails, 
skiers and riders of all abilities will find something to like about Bromley. There are also plenty of activities to do in the 
summer and fall with Bromley’s Adventure Park, a theme park with trampolines, zip-lines, scenic chairlift rides, a climbing wall,
 water slides, lift accessible alpine slides, and other fun features. Although smaller than most Southern Vermont mountains, Bromley
 is a fun mountain for the whole family.</p>
<p>Because the mountain’s face points south, days at Bromley Mountain are typically longer with softer snow and warmer temperatures. 
That means any skier or rider who loves being out on the slopes for longer days will enjoy the skiing and riding.</p>
<p>Fun Fact: Frederick Pabst, the grandson of the founder of Pabst Blue Ribbon beer, was the founder of Bromley Mountain. </p>
  
<h2>Location</h2>
  <div id="googleMap">
<iframe src="https://tinyurl.com/mxs3aay9" width="600" height="450" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </div>

 <!-- Note: "ResortInfoHeading" is coded as a class in case new sections are added to the site's pages that need the same 
properties and declarations. When this is the case, the class name, "ResortInfoHeading", shall be changed. -->
<h2 class="ResortInfoHeading">Resort Info</h2>
 
<div id ="bitsofinfo">
<p>Make a selection</p>
</div>
  
<div id ="selections">
	<p>Prices and Statistics:</p>
  <input type="radio" id="stats" value = "stats" name = "select" onclick="loadPSDoc('bromleyStats.xml')">
  <label for="stats">Stats</label><br>
  <input type="radio" id="tPrices" value="tPrices"  name = "select" onclick="loadPSDoc('bromleyTicket.xml')">
  <label for="tPrices">Ticket Prices</label><br>
  <input type="radio" id="pPrices" value="pPrices" name = "select" onclick="loadPSDoc('bromleyPass.xml')">
  <label for="pPrices">Pass Prices</label><br>

		<p>Local Spots:</p>
  <input type="radio" id = "eateries" value = "eateries" name = "select" onclick="loadRHDoc('bromleyFood.xml')">
  <label for="eateries">Local Restaurants/Eateries</label><br>
  <input type="radio" id="hotels" value="hotels"  name = "select" onclick="loadRHDoc('bromleyHotel.xml')">
  <label for="hotels">Local Hotels/Bed and Breakfasts</label>

</div>

 
</div>
 
<script src = "resources/javaScript/rpAjax.js"></script>
<?php include 'include/footer.php';?>


</body>


</html>
<!--
Image Sources:
	Bromley: https://tinyurl.com/2986zmxd
-->

