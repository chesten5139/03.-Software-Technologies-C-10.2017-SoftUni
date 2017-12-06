<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP Exercises</title>
</head>

<body>
<?php
$figure = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
];
foreach ($figure as $row) {
    foreach ($row as $col) {
        if ($col == 1){
            echo "<button style=\"background-color: blue\">$col</button>";
        }
        else {
            echo "<button>$col</button>";
        }
    }
    echo "<br>";
}
?>
</body>
</html>