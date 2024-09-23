
function adicionar(){
    let section = document.getElementById("select-barra")
    let titulo = document.getElementById("titulo-tarefa").value
    lista.push(titulo);
    console.log(lista)

    let barra = ''

    for(let listas of lista){
         
        barra += `<div class="barra-lista">
                        <input type="checkbox" id="statusTarefa">
                        <label for="statusTarefa">${listas}  </label>
                        <button>EDITAR</button>
                        <button>EXCLUIR</button>
                    </div>
                </div>`
    }

    section.innerHTML = barra;

}
