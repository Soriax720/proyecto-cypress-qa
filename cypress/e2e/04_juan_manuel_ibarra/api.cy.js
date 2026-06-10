/// <reference types="cypress" />
import user from '../../fixtures/user.json'

describe('Casos de prueba API | Juan Manuel Ibarra', () => {
    
    it('API | Agregar un libro a la Wishlist exitosamente (200 OK)', () => {
        const bookId = 2; // ID de Harry Potter
        
        cy.toggleWishlistAPI(user.UserId, bookId, user.token).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('API | Error al agregar un libro a la Wishlist sin Token de Autorización (401)', () => {
        const bookId = 2;
        
        // Le pasamos un string vacío en lugar del token para forzar el error de seguridad
        cy.toggleWishlistAPI(user.UserId, bookId, '').then((response) => {
            expect(response.status).to.eq(401);
        });
    });
});