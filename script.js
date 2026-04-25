// ============================================
// Simulador de Orçamento Pessoal
// Aluno: Thiago Ribeiro Lopes - 916468
// ============================================

// Função auxiliar para ler número válido com while
function lerNumero(mensagem) {
  let valor;
  do {
    let entrada = prompt(mensagem);
    valor = Number(entrada);
    if (isNaN(valor) || entrada === null || entrada.trim() === "") {
      alert("❌ Valor inválido! Por favor, digite um número.");
    }
  } while (isNaN(valor) || valor === null);
  return valor;
}

// ============================================
// 1. DADOS INICIAIS
// ============================================

// Nome do usuário (string)
let nome = prompt("Olá! Qual é o seu nome?");
while (!nome || nome.trim() === "") {
  nome = prompt("Por favor, informe seu nome:");
}

// Renda mensal (number)
let renda = lerNumero(`Olá, ${nome}! Qual é a sua renda mensal? (R$)`);
while (renda <= 0) {
  alert("❌ A renda deve ser maior que zero.");
  renda = lerNumero("Qual é a sua renda mensal? (R$)");
}

// Quantidade de despesas (number, entre 1 e 5)
let qtdDespesas = lerNumero("Quantas despesas você vai informar? (mínimo 1, máximo 5)");

// Limitar entre 1 e 5
if (qtdDespesas < 1) qtdDespesas = 1;
if (qtdDespesas > 5) qtdDespesas = 5;

// ============================================
// 2. LANÇAMENTO DE DESPESAS COM for
// ============================================

let totalDespesas = 0;
let listaDespesas = [];

for (let i = 1; i <= qtdDespesas; i++) {
  let despesa = lerNumero(`Informe o valor da Despesa ${i}: (R$)`);
  while (despesa < 0) {
    alert("❌ O valor da despesa não pode ser negativo.");
    despesa = lerNumero(`Informe o valor da Despesa ${i}: (R$)`);
  }
  totalDespesas += despesa;
  listaDespesas.push(despesa);
}

// ============================================
// 3. ANÁLISE COM if / else
// ============================================

let sobra = renda - totalDespesas;
let mensagemClassificacao;

if (totalDespesas > renda) {
  mensagemClassificacao = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
  if (sobra >= renda * 0.30) {
    mensagemClassificacao = "✅ Ótimo: boa margem de sobra.";
  } else {
    mensagemClassificacao = "🙂 Ok: dá para melhorar a sobra.";
  }
}

// ============================================
// 4. SAÍDA FINAL
// ============================================

let resultado = `
===================================
  RESUMO DO ORÇAMENTO PESSOAL
===================================
👤 Nome:              ${nome}
💵 Renda mensal:      R$ ${renda.toFixed(2)}
💸 Total de despesas: R$ ${totalDespesas.toFixed(2)}
💰 Sobra:             R$ ${sobra.toFixed(2)}
-----------------------------------
${mensagemClassificacao}
===================================
`;

// Exibir no alert
alert(resultado);

// Exibir no console.log
console.log(resultado);

// Log detalhado das despesas
console.log("📋 Detalhamento das despesas:");
listaDespesas.forEach((valor, index) => {
  console.log(`   Despesa ${index + 1}: R$ ${valor.toFixed(2)}`);
});
