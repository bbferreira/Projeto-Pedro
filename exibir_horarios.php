<?php
$pdo = new PDO('sqlite:bancodedados.sqlite');

// Consulta para selecionar todos os horários
$query = "SELECT * FROM horarios";
$stmt = $pdo->query($query);
$horarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Horários Agendados</title>
</head>
<body>
    <h1>Horários Agendados</h1>
    <table>
        <tr>
            <th>Dia</th>
            <th>Horário</th>
        </tr>
        <?php foreach ($horarios as $horario): ?>
            <tr>
                <td><?php echo $horario['dia']; ?></td>
                <td><?php echo $horario['horario']; ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>