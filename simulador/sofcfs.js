// Definindo a classe Processo
class Processo {
    constructor(id, tempo_cpu) {
        this.id = id;
        this.tempo_cpu = tempo_cpu;
        this.tempo_esperando = 0; // Inicializa o tempo de espera como 0
    }
}

// Definindo a classe SistemaOperacional
class SistemaOperacional {
    constructor() {
        this.fila_de_prontos = [];
        this.processo_atual = null;
        this.tempo_total = 0; // Inicializa o tempo total como 0
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

        // O tempo de espera do processo atual é igual ao tempo total até agora
        processo.tempo_esperando = this.tempo_total;

        document.write(`Iniciando a execucao do Processo ${processo.id} - Tempo de espera: ${processo.tempo_esperando}<br>`);
        this.processo_atual = processo;

        

        while (processo.tempo_cpu > 0) {
            processo.tempo_cpu--;
            document.write(`Tempo do Processo ${processo.id} em ${processo.tempo_cpu} <br> `);
            this.tempo_total++; // Incrementa o tempo total
        }

        document.write(`Processo ${processo.id} concluido. <br>`);
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

// Executando os processos na simulação usando o FCFS
so.executar();  // Executa o primeiro processo
so.executar();  // Executa o segundo processo
so.executar();  // Executa o terceiro processo
