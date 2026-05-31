class shoppingCart {
    clickCheckoutButton() {
        cy.get('button').contains('CheckOut').click()
    }

}module.exports = new shoppingCart()