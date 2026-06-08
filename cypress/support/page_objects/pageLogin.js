class pageLogin {

    typeUserName(name) {
        cy.get('input[formcontrolname="username"]').type(name)
    }
    typePassword(password) {
        cy.get('input[formcontrolname="password"]').type(password)
    }
    clickLoginButton() {
        cy.get('app-login button').contains('Login').click()
    }

    verifyUsernameFieldVisible(){
        cy.get('input[formcontrolname="username"]').should('be.visible')
    }
    passwordFieldVerification(){
        cy.get('input[formcontrolname="password"]').should('be.visible')
    }

} module.exports = new pageLogin();