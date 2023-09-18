<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtenha os dados do horário e da cor do POST
    $horario = $_POST['horario'];
    $cor = $_POST['cor'];
    
    // Conecte-se ao banco de dados SQLite
    try {
        $pdo = new PDO('sqlite:bancodedados.sqlite');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Verifique se o horário já está agendado
        $stmt = $pdo->prepare("SELECT cor FROM horarios WHERE horario = :horario");
        $stmt->bindParam(':horario', $horario);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($result) {
            // O horário já está agendado, atualize a cor
            $stmt = $pdo->prepare("UPDATE horarios SET cor = :cor WHERE horario = :horario");
            $stmt->bindParam(':horario', $horario);
            $stmt->bindParam(':cor', $cor);
            $stmt->execute();
        } else {
            // O horário não está agendado, insira-o no banco de dados
            $stmt = $pdo->prepare("INSERT INTO horarios (horario, cor) VALUES (:horario, :cor)");
            $stmt->bindParam(':horario', $horario);
            $stmt->bindParam(':cor', $cor);
            $stmt->execute();
        }

        // Verifique se a inserção/atualização foi bem-sucedida
        if ($stmt->rowCount() > 0) {
            // Inserção/atualização bem-sucedida
            echo json_encode(['success' => true, 'message' => 'Horário agendado/atualizado com sucesso']);
        } else {
            // Inserção/atualização falhou
            echo json_encode(['error' => 'Falha ao inserir/atualizar os dados no banco de dados']);
        }
    } catch (PDOException $e) {
        echo json_encode(['error' => 'Erro ao conectar ao banco de dados: ' . $e->getMessage()]);
    }
}
?>
