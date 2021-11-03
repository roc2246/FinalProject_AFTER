<?php include 'include/header.php';?>
<?php include 'include/navigation.php';?>

<div id="content">
<!--NOTE: Sources for images are located at the bottom of this page-->
<h1>Welcome to After3.com!</h1>

<p>Our mission here is simple, to help you plan your next big trip in beautiful Southern Vermont.  
Too often, those who plan for their next trip get overwhelmed by all the options and can miss out on 
important deals. That’s where we do all the dirty work for you. No one should struggle to plan their 
next vacation. All the important bits of info are condescend into one convenient, easy to access site 
to help with making those decisions on where to go next.</p>

<p> Here, you can click on the links to the left to 
plan your next big trip. Be sure to sign up for our 
<a href="newsletterSignup.php">newsletter</a> where you can stay up to 
 date on new deals and new resorts featured. You can also click on the images on this page to be taken each resort's web page.</p>
 
<p>Disclaimer: This website is intended as a class project only. The creator is in no way affiliated with any of 
the Featured Resorts or any of the Movies of the Week. If you're affiliated with Mt. Snow, Stratton, Bromley, Expect Films, Forum Snowboards,
or Mack Dawg Productions and would like any copyrighted material or other relevant information removed from the site,
email the creator <a href="mailto:roc09090@ccv.vsc.edu">here</a>.</p>
 
 

<div id="FeaturedResorts">
<h2>Featured Resorts</h2>
<a href="https://www.mountsnow.com/"><img src="resources/photos/resort_logos/mtsnow.jpg" height="140" width="240" alt="Mt. Snow" /></a>
<a href="https://www.stratton.com/"><img src="resources/photos/resort_logos/stratton.jpg" height="140" width="240" alt="Stratton" /></a>
<a href="https://www.bromley.com/"><img src="resources/photos/resort_logos/bromley.jpg" height="140" width="240" alt="Bromley" /></a>
</div>

<!--Change movie every week-->
<div id="movie">
<h2>Movie of the Week</h2>
<div class="movieoftheweek">
<video id = "video" width="320" height="240" controls>
  <!--motw.js will create a <source> tag where a movie will display-->
Your browser does not support the video tag.
</video>
</div>

<div class="moviedescription">
<!--For Loop will enter in movie facts-->
</div>
<!-- Note: "moviedescription" and "movieoftheweek" are coded as classes in case there's a 'double feature' where multiple
Movies of the Week are displayed on this site  -->
</div>

</div>


<script src = "resources/javaScript/motw.js"></script>

<?php include 'include/footer.php';?>
</body>


</html>
<!--
Image Sources:
	Mount Snow: https://www.mountsnow.com/content/uploaded/images/events/events_default.jpg
	Bromley: https://www.bromley.com/media/img/newsletter/default/header-logo-default.jpg
	Stratton: https://www.snowindustrynews.com/media/3735/stratton-logo.jpg
-->