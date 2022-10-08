//utilizando o extends keyof, você limita o generico para que K seja chave de O, pois o genérico pode ser qualquer coisa
//possibilitando dar conflitos
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
    cor: 'Rosa',
    vacinas: ['Vacina 1', 'Vacina 2'],
    idade: 10
}

const vacinas = obterChave(animal, 'vacinas');
console.log('Vacinas: ', vacinas);

export class Pessoa<T, U> {
    constructor(public nome: T, public idade: U) {
        
    }
}

//conseguimos inferir e reconhecer o tipo automaticamente
const pessoa1 = new Pessoa('Caio', 30);
const pessoa2 = new Pessoa(['Caio'], 30);

