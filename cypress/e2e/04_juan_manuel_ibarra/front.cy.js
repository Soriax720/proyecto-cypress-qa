/// <reference types="cypress" />
import user from '../../fixtures/user.json'
import url from '../../fixtures/url.json'

const pageHome = require('../../support/page_objects/pageHome')
const componentNav = require('../../support/page_objects/componentNav')
const pageWishlist = require('../../support/page_objects/pageWishlist')

describe('Caso de prueba FRONT | Juan Manuel Ibarra', () => {

    it('Agregar libro a Wishlist desde Home y eliminarlo desde página Wishlist', () => {
        const bookName = 'Harry Potter and the Chamber of Secrets';

        
        cy.deleteWishlistAPI(user.UserId, user.token);
        cy.visit(url.login);
        cy.login(user.name, user.password);

        // 2. Agregar a Wishlist desde el Home
        pageHome.validateBookTitle(bookName);
        componentNav.verifyWishlistBadgeCount('0'); 
        pageHome.addBookToWishlistFromCard();
        componentNav.verifyWishlistBadgeCount('1'); 

        // 3. Navegar a la página de Wishlist
        componentNav.clickWishlistIcon();
        cy.url().should('include', 'wishlist');

        // 4. Eliminar el libro y validar que quede vacía
        pageWishlist.clickRemoveFromWishlist();
        componentNav.verifyWishlistBadgeCount('0');
        pageWishlist.validateEmptyWishlist();
    });
});