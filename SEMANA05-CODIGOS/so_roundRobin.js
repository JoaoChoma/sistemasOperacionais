// Função para criar um processo
function criarProcesso(id, tempo_cpu) {
    return {
        id: id,
        tempo_cpu: tempo_cpu,
        tempo_esperando: 0,
    };
}

// Função para criar o sistema operacional
function criarSistemaOperacional(processos, quantum) {
    const so = {
        fila_de_prontos: processos.slice(), // Cria uma cópia dos processos originais
        tempo_total: 0,
    };

    function executar() {
        if (so.fila_de_prontos.length === 0) {
            document.write("Todos os processos foram concluídos. <br>");
            return;
        }

        const processo = so.fila_de_prontos.shift();
        document.write(`<br>Iniciando a execucao do Processo ${processo.id} <br>`);
        let tempo_executado = 0;

        // Tempo de espera é o tempo atual menos o tempo de chegada
        processo.tempo_esperando = so.tempo_total;

        while (tempo_executado < quantum && processo.tempo_cpu > 0) {
            tempo_executado++;
            processo.tempo_cpu--;
            so.tempo_total++; // Incrementa o tempo total

            // Verifica se é hora de imprimir o status atual
            if (tempo_executado === quantum) {
                document.write(`Tempo total processado: ${so.tempo_total} <br>`);
                document.write(`Tempo restante do Processo ${processo.id} em ${processo.tempo_cpu} <br>`);
            }

            

            // Se o processo não foi concluído, coloque-o de volta na fila
            if (processo.tempo_cpu > 0) {
                so.fila_de_prontos.push(processo);
            }
        }

        // Verifica se o processo foi concluído
        if (processo.tempo_cpu === 0) {
            document.write(`Processo ${processo.id} concluido. Tempo de espera: ${processo.tempo_esperando} <br>`);
        } else {
            // O processo ainda não está concluído, coloque-o de volta na fila
            so.fila_de_prontos.push(processo);
        }
    }

    so.executar = executar; // Adiciona a função executar ao objeto so

    return so;
}

// Criando processos para simulação
const processo1 = criarProcesso(1, 9);
const processo2 = criarProcesso(2, 3);
const processo3 = criarProcesso(3, 3);

// Defina o quantum (fatia de tempo) como desejado
const quantum = 2;

// Criando uma instância do sistema operacional com a lista de processos e o quantum
const so = criarSistemaOperacional([processo1, processo2, processo3], quantum);

// Executando os processos na simulação usando Round Robin
while (so.fila_de_prontos.length > 0) {
    so.executar();
}
