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

        
        pageHome.validateBookTitle(bookName);
        componentNav.verifyWishlistBadgeCount('0'); 
        pageHome.addBookToWishlistFromCard();
        componentNav.verifyWishlistBadgeCount('1'); 

        
        componentNav.clickWishlistIcon();
        cy.url().should('include', 'wishlist');

        
        pageWishlist.clickRemoveFromWishlist();
        componentNav.verifyWishlistBadgeCount('0');
        pageWishlist.validateEmptyWishlist();
    });
});