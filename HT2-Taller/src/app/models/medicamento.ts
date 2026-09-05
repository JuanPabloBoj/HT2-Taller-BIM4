export interface Medicamentos {
    codigoMedicamento: number,
    nombre: string;
    categoria: string;
    precio: number;
    stock: number;
    descripcion: string;
    fechaVencimiento: string;
    requiereReceta?: boolean;
}
