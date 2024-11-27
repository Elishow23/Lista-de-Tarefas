function adicionar() {

  let titulo = document.getElementById("titulo-tarefa").value; // Obtém o título da tarefa do input.

    const tar = new Tarefa(titulo, 'Pendente'); // Cria um novo objeto tarefa.
    lista.push(tar); // Adiciona a tarefa à lista.

    /*for (let listas of lista){
      console.log(listas);

    }*/
      filtrar()
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

  //let section = document.getElementById("select-barra"); // Seletor da seção onde a lista será exibida.

  let marcados = verificarCheckboxes(); //atribue os ID dos checkboxes marcados 
  
    const excluidos = []  //coleciona todas as tarefas excluidas

  //verifica os ID das listas e dos checkboxes marcados e exclui apenas as listas marcadas
  for(let ma of marcados){
    for(let listas of lista){
      if(listas.id == ma){
        const indice = lista.findIndex(lista => lista.id === listas.id);
        const excluido = lista.splice(indice, 1)[0];
        excluidos.push(excluido);
      }
    }
  }

    filtrar()
  return excluidos;

  }

  function editar(){
    let section = document.getElementById("select-barra"); // Seletor da seção onde a lista será exibida.

    let marcados = verificarCheckboxes()  //verifica os checkboxes marcados
    
    //faz um teste para que seja editado uma  lista por vez
    if (marcados.length > 1){
      alert("Edite um por vez");
    }else{
      for(let ma of marcados){
        for(let listas of lista){
          if(listas.id == ma){
            
            id = listas.id;
            console.log("editar", id);
            
            let barra = ''
      
            barra = `
            <div class="barra-lista">
              <input type="text" placeholder="${listas.titulo}" id="novo-titulo">
              <button onclick="update(${listas.id})">ATUALIZAR</button>
            </div> `;
      
            section.innerHTML = barra;

          }
        }
      }
    }
  }

  function update(id){
   
    //atuaiza o titulo da tarefa
    let novoTitulo = document.getElementById("novo-titulo").value
    if(novoTitulo == 0){
      atualizarLista(lista)
    }else{
      for (let listas of lista){
      if(listas.id == id){
        listas.titulo = novoTitulo;
      }
    }
  }
    
    filtrar()

  }

  function concluirTarefa(){

    let excluidos = excluirTarefa()

    //muda o status da tarefa para concluido e coloca no final da lista
    for (let ex of excluidos){
      ex.situacao = 'Concluida'
      lista.push(ex);
    }

   console.log(excluidos)

    filtrar()
  }

  function filtrar(){
    let filtro = document.getElementById("filtro").value;

    let listaFiltrada = [];

    if(filtro == 'Todas'){
      atualizarLista(lista);
    }else{
      for(let tarefa of lista){
        if(filtro == tarefa.situacao){
          listaFiltrada.push(tarefa);
        }
      }
      atualizarLista(listaFiltrada)
    }
      
    }

  function atualizarLista(t){
    let section = document.getElementById("select-barra"); // Seletor da seção onde a lista será exibida.
    let filtro = document.getElementById("filtro").value;


    let barra = ''; // String para armazenar o HTML da lista.

    if(t == 0){
      barra = `<p>Não há tarefas ${filtro}</p>`
    }else{
      for (let tarefa of t) {
        barra += `
            <div class="barra-lista">
                <input type="checkbox" id="${tarefa.id}" onclick="verificarCheckboxes()"> 
                <label id="id">${tarefa.id}</label>
                <label id="titulo">${tarefa.titulo}</label>
                <label id="situacao">${tarefa.situacao}</label>
            </div>
        `;
      }
    }

    

    section.innerHTML = barra; // Atualiza o HTML da seção com a nova lista.*/
  }
    
  
      