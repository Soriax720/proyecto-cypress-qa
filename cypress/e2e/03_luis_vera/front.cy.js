/// <reference types="cypress" />
import user from '../../fixtures/user.json'
import url from '../../fixtures/url.json'
import books from '../../fixtures/books.json'

const pageHome = require('../../support/page_objects/pageHome')
const pageBookDetails = require('../../support/page_objects/pageBookDetails')
const componentNav = require('../../support/page_objects/componentNav')
const pageShoppingCart = require('../../support/page_objects/pageShoppingCart')

describe('Caso de prueba FRONT | Luis Viera', () => {  
    it('Agregar libro desde Book Details y otro desde Similar Books al carrito', () => {
        
        const firstBook = books[0];

        
        cy.deleteCartAPI(user.UserId, user.token);
        cy.visit(url.login);
        cy.login(user.name, user.password);

        
        cy.url().should('include', url.home);
        componentNav.verifyCartBadgeCount('0');

        
        pageHome.clickFirstBookCard();

        
        pageBookDetails.clickAddToCartButton();
        pageBookDetails.validateToastMessage();
        componentNav.verifyCartBadgeCount('1');

        
        pageBookDetails.clickAddToCartSimilarBooks(1); 
        pageBookDetails.validateToastMessage();
        componentNav.verifyCartBadgeCount('2');

        
        componentNav.clickShoppingCart();

        
        pageShoppingCart.checkVisibleBook(firstBook.title); 
        
        cy.log('Caso completado correctamente - 2 libros agregados al carrito');
    });
});