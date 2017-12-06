<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP Exercises</title>
</head>

<body>
<form>
    N: <input type="text" name="num" />
    <input type="submit" />
</form>
<?php
if (isset($_GET["num"])) {
    $number = intval($_GET["num"]);
    $fibonacci = [1, 1];
    for ($i = 2; $i < $number; $i++) {
        $fibonacci[$i] = $fibonacci[$i - 1] + $fibonacci[$i - 2];
    }
    for ($i = 0; $i < $number; $i++) {
        echo "$fibonacci[$i] ";
    }
}
?>
</body>
</html>