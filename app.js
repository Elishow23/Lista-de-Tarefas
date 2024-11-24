function adicionar() {
    /**
     * Adiciona uma nova tarefa à lista e atualiza a interface.
     */
    let section = document.getElementById("select-barra"); // Seletor da seção onde a lista será exibida.
    let titulo = document.getElementById("titulo-tarefa").value; // Obtém o título da tarefa do input.



    const tar = new Tarefa(titulo); // Cria um novo objeto tarefa.
    lista.push(tar); // Adiciona a tarefa à lista.

    /*for (let listas of lista){
      console.log(listas);

    }*/

    let barra = ''; // String para armazenar o HTML da lista.

    for (let listas of lista) {
        barra += `
            <div class="barra-lista">
                <input type="checkbox" id="${listas.id}" onclick="verificarCheckboxes()"> 
                <label id="titulo">${listas.titulo}</label>
                <label id="id">${listas.id}</label>
            </div>
        `;
    }

    section.innerHTML = barra; // Atualiza o HTML da seção com a nova lista.*/
}

function verificarCheckboxes() {
    // Seleciona todos os checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const marcados = [];
    const naoMarcados = [];
  
    // Itera sobre cada checkbox
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        marcados.push(checkbox.id); // Adiciona o valor ou ID ao array de marcados
      } else {
        naoMarcados.push(checkbox.id); // Adiciona o valor ou ID ao array de não marcados
      }
    });
  
    

    return marcados;
    
  }

  function excluirTarefa(){

    let section = document.getElementById("select-barra"); // Seletor da seção onde a lista será exibida.

  let marcados = verificarCheckboxes();
    
  for(let ma of marcados){
    for(let listas of lista){
      if(listas.id == ma){
        console.log("excluir", listas.titulo)
        const indice = lista.findIndex(lista => lista.id === listas.id);
        lista.splice(indice, 1);
      }
    }
  }
     
  let barra = ''; // String para armazenar o HTML da lista.

    for (let listas of lista) {
        barra += `
            <div class="barra-lista">
                <input type="checkbox" id="${listas.id}" onclick="verificarCheckboxes()"> 
                <label id="titulo">${listas.titulo}</label>
                <label id="id">${listas.id}</label>
            </div>
        `;
    }

    section.innerHTML = barra; // Atualiza o HTML da seção com a nova lista.*/


  }


    
  
      