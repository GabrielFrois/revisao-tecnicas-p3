export class Pessoa {
    // Atributos da classe
    nome: string;
    email: string;
    nasc: Date;

    // Construtor: inicializa os atributos com os valores recebidos
    constructor(nome: string, email: string, nasc: Date) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }

    // Método que imprime os dados básicos da pessoa
    imprimir(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Email: ${this.email}`);
        
        // Formata a data de nascimento no padrão brasileiro (dd/mm/aaaa)
        console.log(`Data Nasc: ${this.nasc.toLocaleString('pt-BR', {
            timeZone: 'UTC',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        })}`);
    }

    // Método que calcula a idade exata da pessoa com base em hoje
    idade(): number {
        const hoje = new Date();
        const nascimento = new Date(this.nasc);

        let idade = hoje.getFullYear() - nascimento.getFullYear();

        // Verifica se ainda não fez aniversário este ano
        const aindaNaoFezAniversario =
            hoje.getMonth() < nascimento.getMonth() ||
            (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate());

        if (aindaNaoFezAniversario) {
            idade--; // Diminui 1 ano se ainda não fez aniversário
        }

        return idade;
    }

    // Método que calcula quantos anos bissextos a pessoa já viveu
    numBissextos(): number {
        const hoje = new Date();
        const anoNascimento = this.nasc.getFullYear();
        const anoAtual = hoje.getFullYear();

        const mesHoje = hoje.getMonth();
        const diaHoje = hoje.getDate();
        const mesNasc = this.nasc.getMonth();
        const diaNasc = this.nasc.getDate();

        let ultimoAno = anoAtual;

        // Se ainda não fez aniversário E o ano atual é bissexto, não conta esse ano
        const aindaNaoFezAniversario =
            mesHoje < mesNasc || (mesHoje === mesNasc && diaHoje < diaNasc);

        if (aindaNaoFezAniversario && this.isBissexto(anoAtual)) {
            ultimoAno--; // Exclui o ano atual da contagem
        }

        let count = 0;
        // Conta os anos bissextos de anoNascimento até ultimoAno
        for (let ano = anoNascimento; ano <= ultimoAno; ano++) {
            if (this.isBissexto(ano)) {
                count++;
            }
        }

        return count;
    }

    // Método auxiliar privado que verifica se um ano é bissexto
    private isBissexto(ano: number): boolean {
        // Regra do ano bissexto: múltiplo de 4, não de 100, ou múltiplo de 400
        return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
    }

    // Método que retorna a faixa etária da pessoa com base na idade
    faixaEtaria(): string {
        const idade = this.idade();

        if (idade < 13) return 'Criança';
        if (idade < 18) return 'Adolescente';
        if (idade < 60) return 'Adulto';
        if (idade < 100) return 'Idoso';
        return 'Matusalém'; // Para 100 anos ou mais
    }
}