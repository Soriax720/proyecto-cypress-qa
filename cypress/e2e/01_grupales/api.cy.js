/// <reference types="cypress" />
import user from '../../fixtures/user.json'
describe('Caso de prueba de APIs', () => {
    it('API | Comprar carrito exitosamente', () => {
        cy.postCheckOutAPI(user.UserId, user.token, 200)



    })
    it('API | Error al comprar carrito sin token', () => {

        cy.postCheckOutAPI(user.UserId, '', 401)


    })



})