export class UserModel {
    public id: number;
    public email: string;
    public nome: string;
    public sobrenome: string;
    public senha: string;
    public tipoUser: number = 2;
    public telefone: string;
    public cpf: string;
    public foto: string;
    public error: {
        erro: boolean,
        message: string
    };

}