/// <reference types="cypress" />

describe('Casos de prueba API | Mateo Martorelli', () => {

    it.skip('API | Obtener libros similares a un libro existente exitosamente', () => {
        cy.getSimilarBooksAPI(2, 200);
    });

    it('API | Error al obtener libros similares con formato de ID inválido (Bug Backend)', () => {
        cy.getSimilarBooksAPI("A", 500); 
    });

});