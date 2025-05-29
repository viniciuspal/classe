class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
      this.hobbies = [];
    }
  
    apresentar() {
      console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  
    envelhecer() {
      this.idade++;
      console.log(`${this.nome} agora tem ${this.idade} anos.`);
    }
  
    adicionarHobby(hobby) {
      this.hobbies.push(hobby);
      console.log(`${this.nome} adicionou um hobby: ${hobby}`);
    }
  
    listarHobbies() {
      if (this.hobbies.length > 0) {
        console.log(`Hobbies de ${this.nome}: ${this.hobbies.join(", ")}`);
      } else {
        console.log(`${this.nome} ainda não tem hobbies.`);
      }
    }
  
    mudarNome(novoNome) {
      console.log(`${this.nome} mudou o nome para ${novoNome}`);
      this.nome = novoNome;
    }
  }
  
  // Exportando a classe para ser usada em outro arquivo
  module.exports = Pessoa;
  