let contadorId = 1;

class Tarefa {
    constructor(titulo, situacao) {
      this.id = contadorId++;
      this.titulo = titulo;
      this.situacao = situacao;
    }
  }