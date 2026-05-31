class componentNav {

    verifyCartBadgeCount(expectedCount) {
        cy.get('#mat-badge-content-0').contains(expectedCount).should('be.visible')
    }

    clickShoppingCart(){
        cy.get('.mdc-icon-button.mat-mdc-icon-button.mat-mdc-button-base.mat-unthemed').contains('shopping_cart').click()
    }



} module.exports = new componentNav();