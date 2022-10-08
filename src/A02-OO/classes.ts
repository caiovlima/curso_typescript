export class Empresa {
    //public: acesso de qualquer lugar
    public readonly name: string;
    //private acesso apenas dentro da classe
    private readonly colaboradores: Colaborador[] = [];
    //protected: acesso dentro da classe e nas subclasses que extendem dela
    protected readonly cnpj: string = '123';

    constructor(name: string) {
        this.name = name;        
    }

    adicionarColaborador(colaborador: Colaborador):void {
        this.colaboradores.push(colaborador);
    }
}

export class Colaborador {}

const empresa1 = new Empresa('Itaú');