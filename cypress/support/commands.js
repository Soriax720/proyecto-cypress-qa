const pageLogin = require('../support/page_objects/pageLogin')
const pageHome = require('../support/page_objects/pageHome')
const pageShoppingCart = require('../support/page_objects/pageShoppingCart')
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
        failOnStatusCode: false, 
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

Cypress.Commands.add('getBookAPI', (bookId, codeResponse) => {
    cy.request({
        method: 'GET',
        url: `https://app.bookdbqa.online/api/Book/${bookId}`,
        failOnStatusCode: false,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
            
        },
    }).then((response) => {
        expect(response.status).to.eq(codeResponse)
    })
    
})
// Comando para la precondición de Luis: Agregar libro al carrito
Cypress.Commands.add('addBookToCartAPI', (userId, bookId, token) => {
    cy.request({
        method: 'POST',
        url: `https://app.bookdbqa.online/api/ShoppingCart/AddToCart/${userId}/${bookId}`,
        failOnStatusCode: false,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: token // Toma el Bearer token de tu user.json
        }
    })
})

// Comando para el test principal de Luis: Checkout con datos de envío
Cypress.Commands.add('checkoutShippingAPI', (userId, token, shippingData, expectedStatus) => {
    cy.request({
        method: 'POST',
        url: `https://app.bookdbqa.online/api/CheckOut/${userId}`,
        failOnStatusCode: false,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: token
        },
        body: shippingData // Le pasamos el JSON con los datos de envío
    }).then((response) => {
        expect(response.status).to.eq(expectedStatus)
    })
})
// Comando para obtener libros similares (Caso Mateo)
Cypress.Commands.add('getSimilarBooksAPI', (bookId, expectedStatus) => {
    cy.request({
        method: 'GET',
        url: `https://app.bookdbqa.online/api/Book/GetSimilarBooks/${bookId}`,
        failOnStatusCode: false 
    }).then((response) => {
        expect(response.status).to.eq(expectedStatus);
        
        // Si el caso es exitoso, validamos que devuelva una lista (array)
        if (expectedStatus === 200) {
            expect(response.body).to.be.an('array');
            expect(response.body.length).to.be.greaterThan(0);
        }
    });
});