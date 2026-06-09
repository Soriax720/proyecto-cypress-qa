/// <reference types="cypress" />
import url from '../../fixtures/url.json'
import books from '../../fixtures/books.json'

const pageHome = require('../../support/page_objects/pageHome')
const componentNav = require('../../support/page_objects/componentNav')
const pageShoppingCart = require('../../support/page_objects/pageShoppingCart')
const pageLogin = require('../../support/page_objects/pageLogin')

describe('Casos de prueba FRONT | individual ', () => {
    it('Verificar la redirección obligatoria al Login tras confirmar el carrito | Julio Soria', () => {

        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(url.home);
        const bookTest = books[0];
        componentNav.verifyLoginButtonVisible(); 

        cy.prepareGuestShoppingCart();

        componentNav.clickShoppingCart();
        pageShoppingCart.checkVisibleBook(bookTest.title);
        pageShoppingCart.checkVisibleCheckoutButton();

        pageShoppingCart.clickCheckoutButton();
        cy.url().should('include', url.login);
        pageLogin.verifyUsernameFieldVisible();
        pageLogin.verifyPasswordFieldVisible();
    });
})