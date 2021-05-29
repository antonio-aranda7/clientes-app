// En este archivo coloco las interfaces de TypeScript que definen los datos de mi aplicación.
export interface Cliente {
    id: number;
    nombre: string;
    cif: string;
    direccion: string;
    grupo: number;
  }
  
  export interface Grupo {
    id: number;
    nombre: string;
  }