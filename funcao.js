// Função para adicionar uma nova tarefa à lista
function adicionarTarefa() {
  // Obtém o campo de entrada do usuário
  const campoEntrada = document.getElementById("taskInput");
  // Pega o texto digitado e remove espaços extras
  const textoTarefa = campoEntrada.value.trim();
  // Se o campo estiver vazio, não faz nada
  if (textoTarefa === "") return;

  // Obtém a lista de tarefas
  const listaTarefas = document.getElementById("taskList");
  // Cria um novo item de lista (li) para a tarefa
  const item = document.createElement("li");
  // Define o texto do item como o texto da tarefa
  item.textContent = textoTarefa;

  // Cria um container para os botões da tarefa
  const botoes = document.createElement("div");
  botoes.className = "botoes-tarefa";

  // Cria o botão de concluir tarefa
  const botaoConcluir = document.createElement("button");
  botaoConcluir.innerHTML = "✔️";
  // Adiciona evento para marcar/desmarcar como concluída
  botaoConcluir.onclick = () => item.classList.toggle("completed");

  // Cria o botão de excluir tarefa
  const botaoExcluir = document.createElement("button");
  botaoExcluir.innerHTML = "🗑️";
  // Adiciona evento para remover o item da lista
  botaoExcluir.onclick = () => item.remove();

  // Adiciona os botões ao container
  botoes.appendChild(botaoConcluir);
  botoes.appendChild(botaoExcluir);
  // Adiciona o container de botões ao item da tarefa
  item.appendChild(botoes);

  // Adiciona o item à lista de tarefas
  listaTarefas.appendChild(item);
  // Limpa o campo de entrada
  campoEntrada.value = "";
}