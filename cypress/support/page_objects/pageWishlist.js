class pageWishlist {
    clickRemoveFromWishlist() {
        cy.get('button').contains('Remove from Wishlist').click();
    }

    validateEmptyWishlist() {
        cy.contains('Your wishlist is empty.').should('be.visible');
    }
}
module.exports = new pageWishlist();