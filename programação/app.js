const Pessoa = require('.classe/Pessoa');

// Criando uma instância da classe Pessoa
const pessoa1 = new Pessoa("Ana", 30);

// Usando os métodos
pessoa1.apresentar();
pessoa1.adicionarHobby("pintura");
pessoa1.adicionarHobby("caminhada");
pessoa1.listarHobbies();
pessoa1.envelhecer();
pessoa1.mudarNome("ana");
pessoa1.apresentar();