import { Filme } from './Filme';

export class CatalogoFilmes {
    private ListaDeFilmes: Filme[] = [];

    public adicionarFilme(novoFilme: Filme): void {

        if (novoFilme.avaliacao !== undefined) {
            if (novoFilme.avaliacao < 0 || novoFilme.avaliacao > 10) {
                console.log("Erro: A avaliação deve ser entre 0 e 10!");
                return;
            }
        }

        this.ListaDeFilmes.push(novoFilme);
        console.log('Filme "${novoFilme.titulo}" adicionado com sucesso')

    }

    public ListarFilmes(): Filme[] {
        return this.ListaDeFilmes;
    }


    public buscarPorTitulo(tituloDesejado: string): Filme[] {
        return this.ListaDeFilmes.filter(filme => filme.titulo.toLocaleLowerCase().includes(tituloDesejado.toLocaleLowerCase()))

    }

    public buscarGenero(generoDesejado: string): Filme[] {
        return this.ListaDeFilmes.filter(filme => filme.genero.toLocaleLowerCase().includes(generoDesejado.toLocaleLowerCase()))

    }

    public removerFilme(titulo: string): void {
        const index = this.ListaDeFilmes.findIndex(filme => filme.titulo.toLocaleLowerCase() === titulo.toLocaleLowerCase())
        if (index !== -1) {
            this.ListaDeFilmes.splice(index, 1)//aqui o splice corta o index do titulo e o 1 depois da virgu.la indica que é para tirar um item daquele index , ou seja o filme que está naquele index;
            console.log('Filme "${titulo}" removido do catalogo ')
        } else {
            console.log('Filme "${titulo}" mão encontrado')
        }
    }


}