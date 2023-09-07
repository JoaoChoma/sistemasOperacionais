// Função para criar um processo
function criarProcesso(id, tempo_cpu) {
    return {
        id: id,
        tempo_cpu: tempo_cpu,
        tempo_esperando: 0,
    };
}

// Função para criar o sistema operacional
function criarSistemaOperacional() {
    const fila_de_prontos = [];
    let processo_atual = null;
    let tempo_total = 0;

    function adicionarProcesso(processo) {
        fila_de_prontos.push(processo);
    }

    function executar() {
        if (fila_de_prontos.length === 0) {
            document.write("Nenhum processo na fila de prontos. <br>");
            return;
        }

        const processo = fila_de_prontos.shift();

        processo.tempo_esperando = tempo_total;

        document.write(`Iniciando a execucao do Processo ${processo.id} - Tempo de espera: ${processo.tempo_esperando}<br>`);
        processo_atual = processo;

        while (processo.tempo_cpu > 0) {
            processo.tempo_cpu--;
            document.write(`Tempo do Processo ${processo.id} em ${processo.tempo_cpu} <br> `);
            tempo_total++;
        }

        document.write(`Processo ${processo.id} concluido. <br>`);
        processo_atual = null;
    }

    return {
        adicionarProcesso: adicionarProcesso,
        executar: executar,
    };
}

// Criando uma instância do sistema operacional
const so = criarSistemaOperacional();

// Criando processos para simulação e adicionando-os à fila de prontos
const processo1 = criarProcesso(1, 9);
const processo2 = criarProcesso(2, 3);
const processo3 = criarProcesso(3, 3);

so.adicionarProcesso(processo1);
so.adicionarProcesso(processo2);
so.adicionarProcesso(processo3);

// Executando os processos na simulação usando o FCFS
so.executar();  // Executa o primeiro processo
so.executar();  // Executa o segundo processo
so.executar();  // Executa o terceiro processo
