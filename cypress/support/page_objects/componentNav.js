class componentNav {
    verifyCartBadgeCount(expectedCount) {
        cy.get('#mat-badge-content-0').contains(expectedCount).should('be.visible')
    }

    clickShoppingCart(){
        cy.get('.mdc-icon-button.mat-mdc-icon-button.mat-mdc-button-base.mat-unthemed').contains('shopping_cart').click()
    }

    verifyLoginButtonVisible(){
        cy.get('button').contains('Login').should('be.visible')
    }

} module.exports = new componentNav();