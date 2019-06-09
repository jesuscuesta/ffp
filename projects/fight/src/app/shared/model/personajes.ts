export interface Personajes {
    id: number;
    nombre: string;
    energia: number;
    ataques: Ataque[];
}

export interface Ataque {
    nombre: string;
    valor: number;
}
