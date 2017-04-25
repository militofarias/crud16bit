export class Camisetas {
    id: number;
    nome: string;
    tamP: number;
    tamM: number;
    tamG: number;
    tamGG: number;

    constructor(valores: Object = {}){
        Object.assign(this, valores);
    }
}
