class orders {
    verifyOrderCreated(){
        cy.contains('Order placed successfully!!!', {timeout: 10000}).should('be.visible')
    }
    clickFirstPurchaseOrder(){
        cy.get('tbody').find('tr').eq(0).click()
    }
    verifyPurchasedBook(title){
        cy.contains('a', title).should('be.visible')
    }
}module.exports = new orders()