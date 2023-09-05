class Processo {
    constructor(id, tempo_cpu) {
        this.id = id;
        this.tempo_cpu = tempo_cpu;
        this.tempo_esperando = 0; // Inicializa o tempo de espera como 0
    }
}

class SistemaOperacional {
    constructor() {
        this.fila_de_prontos = [];
        this.processo_atual = null;
        this.quantum = 2; // Defina o quantum (fatia de tempo) como desejado
    }

    adicionar_processo(processo) {
        this.fila_de_prontos.push(processo);
    }

    executar() {
        if (this.fila_de_prontos.length === 0) {
            document.write("Nenhum processo na fila de prontos. <br>");
            return;
        }

        const processo = this.fila_de_prontos.shift();
        document.write(`Iniciando a execucao do Processo ${processo.id} <br>`);
        this.processo_atual = processo;

        // Tempo de espera é o tempo atual menos o tempo de chegada
        processo.tempo_esperando = this.tempo_total;
        this.tempo_total += this.quantum;

        // Executa o processo em fatias de tempo (quantum)
        while (processo.tempo_cpu > 0) {
            const tempo_executado = Math.min(processo.tempo_cpu, this.quantum);
            processo.tempo_cpu -= tempo_executado;
            document.write(`Tempo do Processo ${processo.id} em ${processo.tempo_cpu} <br>`);

            // Se o processo não foi concluído, coloque-o de volta na fila
            if (processo.tempo_cpu > 0) {
                this.fila_de_prontos.push(processo);
            }
        }

        document.write(`Processo ${processo.id} concluido. Tempo de espera: ${processo.tempo_esperando} <br>`);
        this.processo_atual = null;
    }
}

// Criando uma instância do sistema operacional
const so = new SistemaOperacional();

// Criando processos para simulação e adicionando-os à fila de prontos
const processo1 = new Processo(1, 9);
const processo2 = new Processo(2, 3);
const processo3 = new Processo(3, 3);

so.adicionar_processo(processo1);
so.adicionar_processo(processo2);
so.adicionar_processo(processo3);

// Inicializando o tempo total
so.tempo_total = 0;

// Executando os processos na simulação usando Round Robin
so.executar();  // Executa o primeiro processo
so.executar();  // Executa o segundo processo
so.executar();  // Executa o terceiro processo
