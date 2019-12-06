import { DateTime } from "ionic-angular";

export class ProdutoModel {
    public placeId: number = 0;
    public foto: string = '';
    public preco: number;
    public duracao: DateTime;
    public idCategoria: number = 0;
    public pontuacao: number = 0;
}