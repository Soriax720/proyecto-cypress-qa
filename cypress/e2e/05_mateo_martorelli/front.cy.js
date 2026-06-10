/// <reference types="cypress" />
import user from '../../fixtures/user.json'
import url from '../../fixtures/url.json'

const pageHome = require('../../support/page_objects/pageHome')
const pageBookDetails = require('../../support/page_objects/pageBookDetails')
const componentNav = require('../../support/page_objects/componentNav')

describe('Caso de prueba FRONT | Mateo Martorelli', () => {  

    it('Buscar un libro desde el buscador y añadirlo a la wishlist', () => {
        const libroDeseado = "The Chosen";

        
        cy.deleteWishlistAPI(user.UserId, user.token);
        cy.visit(url.login);
        cy.login(user.name, user.password);

        
        pageHome.searchBook(libroDeseado);
        pageHome.clickBookByTitle(libroDeseado);

        
        pageBookDetails.clickAddToWishlistButton();
        pageBookDetails.validateWishlistToast();
        componentNav.verifyWishlistBadgeCount('1');
    });

});