class Processo:
    def __init__(self, id, tempo_cpu):
        self.id = id
        self.tempo_cpu = tempo_cpu


class SistemaOperacional:
    def __init__(self):
        self.processo_atual = None

    def executar(self, processo):
        if self.processo_atual is not None:
            print(f"Processo {self.processo_atual.id} em execução...")
            return

        print(f"Iniciando a execução do Processo {processo.id}")
        self.processo_atual = processo

        while processo.tempo_cpu > 0:
            processo.tempo_cpu -= 1
            print(f"Tempo do Processo {processo.id} em {self.processo_atual.tempo_cpu} ") 

        print(f"Processo {processo.id} concluído.")
        self.processo_atual = None


# Criando uma instância do sistema operacional
so = SistemaOperacional()

# Criando processos para simulação
processo1 = Processo(1, 5)
processo2 = Processo(2, 3)
processo3 = Processo(3, 4)

# Executando os processos na simulação
so.executar(processo1)
so.executar(processo2)
so.executar(processo3)
