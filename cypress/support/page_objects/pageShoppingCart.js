class shoppingCart {
    clickCheckoutButton() {
        cy.get('button').contains('CheckOut').click()
    }
    checkVisibleBook(title){
        cy.contains(title).should('be.visible')
    }
    checkVisibleCheckoutButton(){
        cy.get('button').contains('CheckOut').should('be.visible')
    }
}module.exports = new shoppingCart()