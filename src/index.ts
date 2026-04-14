console.log("🚨 ALERTA: O arquivo index.ts está sendo lido!");
import { Filme }  from "./Filme";
import { CatalogoFilmes } from "./CatalogoFilmes";
import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({input , output });

const meuCatalogo = new CatalogoFilmes();



async function iniciarMenu() {
  let rodando = true; 

  while (rodando) {
    console.log("\n===  MENU DO CATÁLOGO DE FILMES ===");
    console.log("1. Adicionar um novo filme");
    console.log("2. Listar todos os filmes");
    console.log("3. Buscar filmes por título");
    console.log("4. Buscar filmes por gênero");
    console.log("5. Remover um filme pelo título");
    console.log("0. Encerrar a aplicação");
    console.log("=======================================");

    
    const opcao = await rl.question("Escolha uma opção: ");

    
    switch (opcao) {
      case '1': // Adicionar 
        console.log("\n-- Adicionando Filme --");
        const titulo = await rl.question("Título: ");
        const ano = parseInt(await rl.question("Ano de lançamento: "));
        const genero = await rl.question("Gênero: ");
        const duracao = parseInt(await rl.question("Duração (minutos): "));
        
        
        const notaInput = await rl.question("Avaliação de 0 a 10 (ou aperte Enter para pular): ");
        
        const novoFilme: Filme = {
          titulo: titulo,
          anoLancamento: ano,
          genero: genero,
          duracaoMinutos: duracao,
          
          avaliacao: notaInput ? parseFloat(notaInput) : undefined
        };
        
        meuCatalogo.adicionarFilme(novoFilme);
        break;

      case '2': // Listar 
        console.log("\n-- Lista de Filmes --");
        
        console.table(meuCatalogo.ListarFilmes());
        break;

      case '3': // Buscar por Título 
        const buscaTitulo = await rl.question("\nDigite o título para buscar: ");
        console.table(meuCatalogo.buscarPorTitulo(buscaTitulo));
        break;

      case '4': // Buscar por Gênero 
        const buscaGenero = await rl.question("\nDigite o gênero para buscar: ");
        console.table(meuCatalogo.buscarGenero(buscaGenero));
        break;

      case '5': // Remover
        const tituloRemover = await rl.question("\nDigite o título do filme que deseja remover: ");
        meuCatalogo.removerFilme(tituloRemover);
        break;

      case '0': // Encerrar 
        console.log("\nEncerrando a aplicação... Até a próxima! 🎬");
        rodando = false; 
        rl.close(); 
        break;

      default: 
        console.log("\n❌ Opção inválida! Tente novamente.");
    }
  }
}


iniciarMenu();
