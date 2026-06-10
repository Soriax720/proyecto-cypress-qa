class pageBookDetails {
    clickAddToCartButton() {
        cy.get('button').contains('Add to Cart').click()
    }

    clickAddToCartSimilarBooks(index) {
        cy.get('app-book-card').eq(index).find('button').contains('Add to Cart').click()
    }

    validateToastMessage(){
        cy.contains('One Item added to cart', { timeout: 10000 }).should('be.visible')
    }
    clickAddToWishlistButton() {
        cy.get('button').contains('Add to Wishlist').click();
    }

    validateWishlistToast() {
        cy.contains('Added to Wishlist!!!', { timeout: 10000 }).should('be.visible');
    }
} module.exports = new pageBookDetails();