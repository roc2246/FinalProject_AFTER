<?php include 'include/header.php';?>
<?php include 'include/navigation.php';?>

<div id="content">
<!--NOTE: Sources for images are located at the bottom of this page-->
<h1>Stratton</h1>

<img id ="ResortImage" src="resources/photos/resort_faces/stratton.jpg" alt="Stratton" width="350" height="180"/>

<h2>About Stratton Mountain</h2>
<p>Throughout the years, Stratton Mountain has been a place of prestige and notoriety. Home to major competitions both past 
and present, Stratton has seen an influx of some of the top athletes in skiing and riding. Outside of the events, Stratton 
also has plenty of wide, windy trails to excite anyone of any ability level. Typical of Southern Vermont mountains, trails
are spread out across the mountain’s face. Both famous and fun, Stratton is a solid choice for anyone to spend their next trip.</p>
<p>Stratton’s own on site village also has plenty to offer with restaurants, candy shops, and even some bars.
 Walking though the Stratton village is often comparable to being in a whole other world.</p>
<p>Fun Fact: Stratton was the long time host of Burton’s US Open, a three day event where the top snowboard pros competed in 
slopestyle, superpipe, boardercross, rail jams, big air, giant slalom, quater pipe, and other events. 
</p>
  
  <h2>Location</h2>
  <div id="googleMap">
<iframe src="https://tinyurl.com/c6fs75dn" width="600" height="450" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </div>


<!-- Note: "ResortInfoHeading" is coded as a class in case new sections are added to the site's pages that need the same 
properties and declarations. When this is the case, the class name, "ResortInfoHeading", shall be changed. -->
<h2 class="ResortInfoHeading">Resort Info</h2>

<div id ="bitsofinfo">
<p>Make a selection</p>
</div>
  
<div id ="selections">
	<p>Prices and Statistics:</p>
  <input type="radio" id="stats" value = "stats" name = "select" onclick="loadPSDoc('strattonStats.xml')">
  <label for="stats">Stats</label><br>
  <input type="radio" id="tPrices" value="tPrices"  name = "select" onclick="loadPSDoc('strattonTicket.xml')">
  <label for="tPrices">Ticket Prices</label><br>
  <input type="radio" id="pPrices" value="pPrices" name = "select" onclick="loadPSDoc('strattonPass.xml')">
  <label for="pPrices">Pass Prices</label><br>

		<p>Local Spots:</p>
  <input type="radio" id = "eateries" value = "eateries" name = "select" onclick="loadRHDoc('strattonFood.xml')">
  <label for="eateries">Local Restaurants/Eateries</label><br>
  <input type="radio" id="hotels" value="hotels"  name = "select" onclick="loadRHDoc('strattonHotel.xml')">
  <label for="hotels">Local Hotels/Bed and Breakfasts</label>

</div> 

 
</div>
 
<script src = "resources/javaScript/rpAjax.js"></script>
<?php include 'include/footer.php';?>


</body>


</html>
<!--
Image Sources:
	Stratton: https://tinyurl.com/3sumuebr
-->