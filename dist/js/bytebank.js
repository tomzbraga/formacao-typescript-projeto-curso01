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
  let valor = inputValor.value;
  let data = inputData.value;

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

  const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  };

  console.log(novaTransacao);
  elementForm.reset();
});
