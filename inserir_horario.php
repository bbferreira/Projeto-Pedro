<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $horarioSelecionado = $_POST['horario'];
    $dataSelecionadas = $_POST['data'];
   
   
    $dataFormatada = DateTime::createFromFormat('d/m/Y', $dataSelecionadas)->format('Y-m-d');

    
    // Conectar ao banco de dados SQLite
    $pdo = new PDO('sqlite:bancodedados.sqlite');
  

    // Função para verificar se o horário já foi agendado
    function verificarHorario($pdo, $dataFormatada, $horarioSelecionado) {
        $stmt = $pdo->prepare("SELECT COUNT(*) FROM horarios WHERE dia = :dia AND horario = :horario");
        $stmt->bindParam(':dia', $dataFormatada);
        $stmt->bindParam(':horario', $horarioSelecionado);
        $stmt->execute();
        $count = $stmt->fetchColumn();

        return $count > 0; // Retorna true se o horário já foi agendado, caso contrário, retorna false
    }



    // Verificar se o horário já foi agendado
    if (verificarHorario($pdo, $dataFormatada, $horarioSelecionado)) {
        echo json_encode(["error" => "Este horário já foi agendado."]);
    } else {
        $stmt = $pdo->prepare("INSERT INTO horarios (dia, horario) VALUES (:dia, :horario)");
        $stmt->bindParam(':dia', $dataFormatada);
        $stmt->bindParam(':horario', $horarioSelecionado);

        if ($stmt->execute()) {
            $lastInsertId = $pdo->lastInsertId(); // Recupera o ID do registro inserido
            echo json_encode(["message" => "Agendamento inserido com sucesso com o ID $lastInsertId"]);
            
         
    
        } else {
            echo json_encode(["error" => "Erro ao inserir agendamento"]);
            print_r($stmt->errorInfo()); // Adicione esta linha para obter informações detalhadas sobre o erro
        }


        



      
    }
}
?>
