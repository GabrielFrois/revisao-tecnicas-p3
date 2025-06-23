import { Pessoa } from './Pessoa';

// Define a classe Cliente como uma extensão da classe Pessoa
// Ou seja, Cliente terá tudo o que Pessoa tem, e ainda pode ter atributos e métodos próprios
export class Cliente extends Pessoa {
    // Atributo adicional exclusivo de Cliente
    saldo: number;

    // Construtor da classe Cliente
    constructor(nome: string, email: string, nasc: Date, saldo: number) {
        // Chama o construtor da superclasse (Pessoa) com os três primeiros parâmetros
        super(nome, email, nasc);

        // Inicializa o atributo saldo com o valor recebido
        this.saldo = saldo;
    }

    // Método sobrescrito (override) da superclasse
    // Ele mostra todos os dados relevantes de um Cliente no console
    imprimir(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`e-mail: ${this.email}`);
        // Data de nascimento formatada como dd/mm/aaaa (com timezone UTC)
        console.log(`Data Nasc.: ${this.nasc.toLocaleString('pt-BR', {
            timeZone: 'UTC',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        })}`);
        console.log(`Idade: ${this.idade()} anos`);
        console.log(`Faixa Etária: ${this.faixaEtaria()}`);
        console.log(`Anos Bissextos: ${this.numBissextos()}`);
        console.log(`Saldo: ${this.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    }
}
