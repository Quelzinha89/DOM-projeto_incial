import BotaoConclui from "./componentes/concluirTarefa.js"
import BotaoDeleta from "./componentes/deletaTarefa.js"
    const criarTarefa=(evento)=> {
    
    evento.preventDefault ()

    const lista = document.querySelector ('[data-list]')
    const input = document.querySelector('[data-form-input]')
    

    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class = "content">${valor}</p>`
   
    tarefa.innerHTML = conteudo

   
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " "
}


    const novaTarefa = document.querySelector('[data-form-button]')


    novaTarefa.addEventListener('click', criarTarefa)



// uma constante e componente começa com maiúsculo, então const BotaoDeleta = ()
// ()-indicativo de execução de função
// função anonima-a função anônima é passada como um argumento para o método addEventListener(). Quando o botão é clicado, 
// a função é executada e exibe um alerta na tela.