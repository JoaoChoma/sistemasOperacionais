
// definir um processo
function criarProcesso(id, tempo_cpu) {
    return {
        id: id,
        tempo_cpu: tempo_cpu,
    };
}

//um SO
function so(processo) {
    //processo pronto
    document.write(`<br> O PROCESSO ${processo.id} está pronto para execução. <br>`);
 

    //processo em execução
    while (processo.tempo_cpu > 0) {
        processo.tempo_cpu--;
        document.write(`Processo ${processo.id} está em execução em ${processo.tempo_cpu} tempo. <br>`);
    }

    document.write(`Processo ${processo.id} foi concluído. <br>`);


}

var processo1 = criarProcesso(1, 9);

so(processo1);