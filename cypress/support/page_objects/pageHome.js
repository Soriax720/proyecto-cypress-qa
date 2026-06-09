class pageHome {
    verifyBooksLoaded() {
        cy.get('app-book-card').should('be.visible')
    }
    validateBookTitle(bookTitle) {
        cy.get('app-book-card').contains(bookTitle).should('be.visible')
    }
    clickAddToCartButton() {
        cy.get('button').contains('Add to Cart').click()
    }
    validateToastMessage(){
        cy.contains('One Item added to cart', { timeout: 10000 }).should('be.visible')
    }

    clickFirstBookCard() {
        cy.get('app-book-card').first().click()
    }
} module.exports = new pageHome();