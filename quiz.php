<?php include 'include/header.php';?>
<?php include 'include/navigation.php';?>
<script src="resources/javaScript/quizAjax.js"></script>
<div id ="content">
<h1>Take Our Quiz</h1>

<p><b>Question:</b>
<span id="question">Click "Start the Quiz" to begin!</span>
</p>
<p><b>Answer:</b>
<input type="text" name="answer" id="answer" autocomplete="off">
<input type="button" value="Submit" id="submit" onclick="checkAnswer()">
</p>
<input type="button" value="Start the Quiz" id="startresq" onclick="getQuestions()">

<p id="qR"></p>

</div>

<script src = "resources/javaScript/quiz.js"></script>

<?php include 'include/footer.php';?>

</body>
</html>