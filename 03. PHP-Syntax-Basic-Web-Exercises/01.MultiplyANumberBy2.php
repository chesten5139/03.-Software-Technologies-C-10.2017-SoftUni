<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP Exercises</title>

</head>
<body>
<form>
    Number: <input type="text" name="num" />
    <input type="submit" />
</form>
<?php
if (isset($_GET["num"])) {
    $number = intval($_GET["num"]);
    $result = $number * 2;
    echo $result;
}
?>
</body>
</html>