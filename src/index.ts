// A classe Cliente herda da classe Pessoa e adiciona o atributo saldo
import { Cliente } from "./Cliente";

// Cria um objeto Date representando 01 de novembro de 1965 (0 = janeiro, 10 = novembro)
let nasc = new Date(1965, 10, 1);
// Cria um objeto Cliente chamado "Fulano"
let cliente = new Cliente("Fulano", "fulano@gmail.com", nasc, 500);

cliente.imprimir();

// Atualiza a variável 'nasc' com nova data: 10 de outubro de 2001
nasc = new Date(2001, 9, 10);
// Cria um novo cliente "Beltrano" com os novos dados
cliente = new Cliente("Beltrano", "beltrano@gmail.com", nasc, 1500);

cliente.imprimir();