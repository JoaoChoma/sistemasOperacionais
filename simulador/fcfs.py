#calcular tempo de espera


class Processo:
    def __init__(self, id, tempo_cpu):
        self.id = id
        self.tempo_cpu = tempo_cpu

class SistemaOperacional:
    def __init__(self):
        self.fila_de_prontos = []
        self.processo_atual = None

    def adicionar_processo(self, processo):
        self.fila_de_prontos.append(processo)

    def executar(self):
        if not self.fila_de_prontos:
            print("Nenhum processo na fila de prontos.")
            return

        processo = self.fila_de_prontos.pop(0)
        print(f"Iniciando a execução do Processo {processo.id}")
        self.processo_atual = processo

        while processo.tempo_cpu > 0:
            processo.tempo_cpu -= 1
            print(f"Tempo do Processo {processo.id} em {self.processo_atual.tempo_cpu} ") 

        print(f"Processo {processo.id} concluído.")
        self.processo_atual = None

# Criando uma instância do sistema operacional
so = SistemaOperacional()

# Criando processos para simulação e adicionando-os à fila de prontos
processo1 = Processo(1, 5)
processo2 = Processo(2, 3)
processo3 = Processo(3, 4)

so.adicionar_processo(processo1)
so.adicionar_processo(processo2)
so.adicionar_processo(processo3)

# Executando os processos na simulação usando o FCFS
so.executar()  # Executa o primeiro processo
so.executar()  # Executa o segundo processo
so.executar()  # Executa o terceiro processo
