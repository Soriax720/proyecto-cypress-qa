describe('Casos de prueba de FRONT', () => {
  it('Comprar carrito exitosamente y visualizar orden de compra', () => {
    //accion paso 1
    cy.visit('https://app.bookdbqa.online/login')
    cy.get('input[formcontrolname="username"]').type('Userad')
    //cy.get('#mat-input-9').type('Userad')
    cy.get('input[formcontrolname="password"]').type('Userad12')
    cy.get('app-login button').contains('Login').click()

    //respuesta del sistema paso 1:
    cy.url().should('include', 'https://app.bookdbqa.online/')
    cy.get('app-book-card').contains('Harry Potter and the Chamber of Secrets').should('be.visible')
    //cy.get('#mat-badge-content-0').contains('0').should('be.visible')

    //accion paso 2
    cy.get('button').contains('Add to Cart').click()

    //respuesta del sistema paso 2:
    cy.contains('One Item added to cart').should('be.visible')
    //accion paso 3:
    cy.get('.mdc-icon-button.mat-mdc-icon-button.mat-mdc-button-base.mat-unthemed').contains('shopping_cart').click()
    //respuesta del paso 3:
    cy.contains('Harry Potter and the Chamber of Secrets').should('be.visible')

    //accion paso 4
    cy.get('button').contains('CheckOut').click()

    //respuesta paso 4
    cy.url().should('include', '/checkout')
    cy.get('tr').eq(1).should('contain','Harry Potter and the Chamber of Secrets')
    cy.get('input[formcontrolname="name"]').should('be.visible')
    cy.get('input[formcontrolname="addressLine1"]').should('be.visible')
    cy.get('input[formcontrolname="addressLine2"]').should('be.visible')
    cy.get('input[formcontrolname="pincode"]').should('be.visible')
    cy.get('input[formcontrolname="state"]').should('be.visible')


  })
})