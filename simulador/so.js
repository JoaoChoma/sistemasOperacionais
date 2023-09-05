class Processo {
    constructor(id, tempo_cpu) {
        this.id = id;
        this.tempo_cpu = tempo_cpu;
    }
}

class SistemaOperacional {
    constructor() {
        this.processo_atual = null;
    }

    executar(processo) {
        if (this.processo_atual !== null) {
            document.write(`Processo ${this.processo_atual.id} em execucao... \n`);
            return;
        }

        document.write(`Iniciando a execucao do Processo ${processo.id} <br>`);
        this.processo_atual = processo;

        while (processo.tempo_cpu > 0) {
            processo.tempo_cpu--;
            document.write(`Tempo do Processo ${processo.id} em ${processo.tempo_cpu} <br>`);
        }

        document.write(`Processo ${processo.id} concluido. <br>`);
        this.processo_atual = null;
    }
}

// Criando uma instância do sistema operacional
const so = new SistemaOperacional();

// Criando processos para simulação
const processo1 = new Processo(1, 5);
const processo2 = new Processo(2, 3);
const processo3 = new Processo(3, 4);

// Executando os processos na simulação
so.executar(processo1);
so.executar(processo2);
so.executar(processo3);
