class tarefa{
    constructor(titulo, status){
        this.titulo = titulo
        this.status = status
    }

}

function adicionar(){

    let section = document.getElementById("select-barra")
    let titulo = document.getElementById("titulo-tarefa").value
    
    const tar = new tarefa(titulo, )

    lista.push(tar.titulo, tar.status)
    console.log(lista)

    let barra = ''

    for(let listas of lista){
         
        barra += `<div class="barra-lista" >
                    <input type="checkbox" id="statusTarefa">
                    <label for="statusTarefa">${listas}</label>
                </div>`
    }


    section.innerHTML = barra;

}

function excluirTarefa(){

    //let section = document.getElementById("select-barra")
    let status = document.getElementById("statusTarefa")

    if(status.checked){
        console.log(1)
    }else{
       console.log(0)
    }

    /*let barra = ''

    for(let listas of lista){
         
        barra += `<div class="barra-lista" >
                        <input type="checkbox" id="statusTarefa">
                        <label for="statusTarefa">${listas}</label>
                </div>`
    }*/


    //section.innerHTML = barra;

}
