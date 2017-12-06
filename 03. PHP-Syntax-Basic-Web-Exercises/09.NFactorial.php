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
    $nFactorial = 1;
    for ($i = 2; $i <= $number; $i++) {
        $nFactorial *= $i;
    }
    echo "$nFactorial";
}
?>
</body>
</html>