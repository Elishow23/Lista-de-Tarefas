let contadorId = 1;

class Tarefa {
    constructor(titulo) {
      this.titulo = titulo;
      this.id = contadorId++;
    }
  }