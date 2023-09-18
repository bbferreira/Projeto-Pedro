<?php
$pdo = new PDO('sqlite:bancodedados.sqlite');
$pdo->exec('CREATE TABLE IF NOT EXISTS horarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    dia DATETIME,
    horario TIME,
    cor VARCHAR(20)
)');



?>
