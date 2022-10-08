export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ) {}

    getIdade(): number { return this.idade; }

    getCpf(): string { return this.cpf; }

    getNomeCompleto(): string { return this.nome + ' ' + this.sobrenome; }
}

export class Aluno extends Pessoa {
    constructor(
        //propriedades que serão repassadas para a base class quando for criar aluno
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,

        public sala: string, //sala pertence apenas a aluno

    ) {
        //dessa maneira eu utilizo o super para a construção de pessoa e de aluno
        super(nome, sobrenome, idade, cpf);
        
    }
    getNomeCompleto(): string {
        console.log('Fazer alguma coisa antes');
        //usar o super te da acesso a propriedades da classe base que é a pessoa
        return super.getNomeCompleto();
    }
    
}

export class Cliente extends Pessoa { }

const pessoa = new Pessoa('Caio', 'Lima', 30, '000.000.000-00');
const aluno = new Aluno('Caio', 'Fulano', 30, '000.000.000-00', '0001');
const cliente = new Cliente('Beltrano', 'Lima', 30, '000.000.000-00');