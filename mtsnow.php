<?php include 'include/header.php';?>
<?php include 'include/navigation.php';?>

<div id="content">
<!--NOTE: Sources for images are located at the bottom of this page-->
<h1>Mt. Snow</h1>

<img id ="ResortImage" src="resources/photos/resort_faces/mtsnow.jpg" alt="Mt. Snow" width="350" height="180"/>

<h2>About Mt. Snow</h2>
<p>Being the closest major resort to New York City and Boston, Mt. Snow has plenty to offer for skiers and riders of all
 ability levels. Trails are mellow and wide open, terrain parks are plentiful, and there’s challenging terrain as well like 
 the legendary Rip Cord. Après life is also solid with plenty of on-snow restaurants like the 1900’ Burger and even local 
 bars like the Saloon. Regardless of what you’re looking for in a vacation, Mt. Snow will have your covered.</p>
<p>Since vail acquired Mt. Snow and other resorts under the Peaks name, Epic Pass holders can enjoy access to other resorts
 around the country. Such resorts include Vail, Beaver Creek, Heavenly, and Park City.</p>
<p>For those into riding the terrain park, Carinthia Parks at Mt. Snow is the capital for east coast 
freestyle skiing and riding. Plenty of features that range from absolute beginner to the bigger, more
 advanced features cover each trail at Carinthia.</p>
<p>Fun Fact: Mt. Snow is the only mountain to host both the X-Games and the Dew Tour.
</p>
  
  <h2>Location</h2>
    <div id="googleMap">
 <iframe src="https://tinyurl.com/yyn7fpm3" width="600" height="450" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </div>

<!-- Note: "ResortInfoHeading" is coded as a class in case new sections are added to the site's pages that need the same 
properties and declarations. When this is the case, the class name, "ResortInfoHeading", shall be changed. -->
<h2 class="ResortInfoHeading">Resort Info</h2>

<div id ="bitsofinfo">
<p>Make a selection</p>
</div>
  
<div id ="selections">
	<p>Prices and Statistics:</p>
  <input type="radio" id="stats" value = "stats" name = "select" onclick="loadPSDoc('mtsnowStats.xml')">
  <label for="stats">Stats</label><br>
  <input type="radio" id="tPrices" value="tPrices"  name = "select" onclick="loadPSDoc('mtsnowTicket.xml')">
  <label for="tPrices">Ticket Prices</label><br>
  <input type="radio" id="pPrices" value="pPrices" name = "select" onclick="loadPSDoc('mtsnowPass.xml')">
  <label for="pPrices">Pass Prices</label><br>

		<p>Local Spots:</p>
  <input type="radio" id = "eateries" value = "eateries" name = "select" onclick="loadRHDoc('mtsnowFood.xml')">
  <label for="eateries">Local Restaurants/Eateries</label><br>
  <input type="radio" id="hotels" value="hotels"  name = "select" onclick="loadRHDoc('mtsnowHotel.xml')">
  <label for="hotels">Local Hotels/Bed and Breakfasts</label>

</div> 
 
 
</div>
<script src = "resources/javaScript/rpAjax.js"></script>
  
<?php include 'include/footer.php';?>


</body>


</html>
<!--
Image Sources:
	Mount Snow: https://tinyurl.com/edthktrz
-->