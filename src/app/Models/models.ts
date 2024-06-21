export interface navSecc {
    Nombre: string,
    Valor: string,
    Activo: boolean,
    EsExterno?: boolean
}
export interface words {
    IdPalabra: number,
    Palabra: string,
    Significado: string,
    Fuente?: string
}
// export interface tools{
//     IdTema: number,
//     Tema: string,
//     Recurso: string,
//     Url: string,
//     Descripcion: string
// }
export interface experts{
    IdExperto: number,
    Nombre: string,
    Contacto: string,
    Url: string,
    Descripcion?: string
}
export interface institutions{
    IdInstitucion: number,
    Nombre: string,
    Url: string,
    Descripcion?: string
}
export interface books{
    IdLiteratura: number,
    Autor: string,
    Titulo?: string,
    Subtitulo?: string,
    Url?: string
}
export interface websites{
    IdSitio: number,
    Nombre: string,
    Url: string,
    Descripcion?: string
}

export interface htmlDocContent{
    Titulo: string,
    Contenido: string,
    Url: string
}