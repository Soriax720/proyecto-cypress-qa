class pageHome {

    validateBookTitle(bookTitle) {
        cy.get('app-book-card').contains(bookTitle).should('be.visible')
    }
    clickAddToCartButton() {
        cy.get('button').contains('Add to Cart').click()
    }
    validateToastMessage(){
        cy.contains('One Item added to cart').should('be.visible')
    }


} module.exports = new pageHome();