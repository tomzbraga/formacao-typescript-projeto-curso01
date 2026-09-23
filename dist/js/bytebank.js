"use strict";
//É quando se entende o motivo da criação de uma ferramenta que realmente se passa a compreendê-la.
//Inicio da solução feita em JavaScript, conclusão em TypeScript
let saldo = 4000;
const elementSaldo = document.querySelector(".saldo-valor .valor");
elementSaldo.textContent = `R$ ${saldo}`;
const elementForm = document.querySelector(".block-nova-transacao form");
elementForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!elementForm.checkValidity()) {
        alert("Preencha todos os campos.");
        return;
    }
    const inputTipoTransacao = elementForm.querySelector("#tipoTransacao");
    const inputValor = elementForm.querySelector("#valor");
    const inputData = elementForm.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value + " 00:00:00");
    switch (tipoTransacao) {
        case "1":
            saldo += valor;
            break;
        case "2":
        case "3":
            saldo -= valor;
            break;
        default:
            throw new Error("Tipo de transação inválido");
    }
    elementSaldo.textContent = `R$ ${saldo}`;
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    console.log(novaTransacao);
    elementForm.reset();
});
