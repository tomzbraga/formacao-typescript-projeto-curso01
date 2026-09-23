//É quando se entende o motivo da criação de uma ferramenta que realmente se passa a compreendê-la.
//Inicio da solução feita em JavaScript, conclusão em TypeScript

let saldo = 4000;

const elementSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
elementSaldo.textContent = `R$ ${saldo}`;

const elementForm = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!elementForm.checkValidity()) {
    alert("Preencha todos os campos.");
    return;
  }

  const inputTipoTransacao = elementForm.querySelector("#tipoTransacao") as HTMLSelectElement;
  const inputValor = elementForm.querySelector("#valor") as HTMLInputElement;
  const inputData = elementForm.querySelector("#data") as HTMLInputElement;

  let tipoTransacao: string = inputTipoTransacao.value;
  let valor: number = inputValor.valueAsNumber;
  let data: Date = new Date(inputData.value + " 00:00:00");

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
