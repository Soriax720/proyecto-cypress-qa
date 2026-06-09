/// <reference types="cypress" />
import book from '../../fixtures/books.json'
describe('Caso de prueba de APIs', () => {
    it('API | Obtener carrito de compras vacío exitosamente', () => {
        
        cy.getBookAPI(2, 200)


    })
    it('API | Error al intentar obtener un libro con ID inexistente', () => {
        cy.getBookAPI(9999, 404)
    })




})