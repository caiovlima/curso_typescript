// tipos básicos
let nome: string = 'teste';
let idade: number = 2;
let adulto: boolean = false;
let simbolo: symbol = Symbol('quaçquer simbolo');

//objetos
let pessoa: {
    nome: string,
    idade: number,
    adulto?: boolean
} = {
    nome: 'Caio',
    idade: 13,
    //adulto não é obrigatório, nesse caso ele será null ou false (false pois é tipo boolean)
};

//! tipo any
let qualquerCoisa: any = 'teste';
qualquerCoisa = true;
qualquerCoisa = 2;

// tipo void (não retorna nada ou no caso undefined)
function retornaVoid(): void {
    console.log('Sem retorno');
};

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
//ou
let arrayDeString: string[] = ["maçã", "pêra", "banana"];


//enums
enum Cores {
    vermelho = 0,
    verde = 1,
    amarelo = 2,
    azul = 3
}

console.log(Cores.vermelho); //vermelho
console.log(Cores[0]); //vermelho