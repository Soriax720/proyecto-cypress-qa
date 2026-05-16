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

  })
})