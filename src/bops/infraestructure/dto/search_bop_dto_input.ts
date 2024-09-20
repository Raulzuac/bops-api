export interface SearchBopDtoInput {
    criteria: string[];
    start_date: String; // 10/10/2021
    end_date: String;   // 10/10/2021
}

/*
    Criteria es un array que contiene los distintos criterios de búsqueda, entre varios criterios 
    vendrán unos comodines que se se utilizarán para indicar la cantidad de palabras que se pueden
    separar los criterios de búsqueda. Por ejemplo si buscamos ['Oposiciones','$20','Deporte'],
    buscaremos todos los bops que contengan las palabras 'Oposiciones' y 'Deporte' y que estén separadas
    por 20 palabras o menos.
*/