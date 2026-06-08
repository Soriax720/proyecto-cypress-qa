const pageLogin = require('../support/page_objects/pageLogin')
const pageHome = require('../support/page_objects/pageHome')

Cypress.Commands.add('login', (user, password) => {
    pageLogin.typeUserName(user);
    pageLogin.typePassword(password);
    pageLogin.clickLoginButton();
})
Cypress.Commands.add('prepareGuestShoppingCart' ,() => {
    pageHome.verifyBooksLoaded();
    pageHome.clickAddToCartButton();
    pageHome.validateToastMessage();
})
Cypress.Commands.add('deleteCartAPI', (userId, token) => {
    cy.request({
        method: 'DELETE',
        url: `https://app.bookdbqa.online/api/shoppingcart/${userId}`,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: token

        },

    })
})
Cypress.Commands.add('postCheckOutAPI', (userId, token, codeResponse) => {

    cy.request({
        method: 'POST',
        url: `https://app.bookdbqa.online/api/CheckOut/${userId}`,
        failOnStatusCode: false, // importante para que cypress no falle automaticamente ante un error 400 o 500
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: token,
        },
        body:
        {
            "orderDetails": [
                {
                    "book": {
                        "bookId": 3,
                        "title": "Harry Potter and the Prisoner of Azkaban",
                        "author": "JKR",
                        "category": "Romance",
                        "price": 213,
                        "coverFileName": "c63ade52-3f90-41fa-980a-1136b6ad2128HP3.jpg"
                    },
                    "quantity": 1
                }
            ],
            "cartTotal": 213
        }
    }).then((response) => {
        expect(response.status).to.eq(codeResponse)
    })

})