/// <reference types="cypress" />
import user from '../../fixtures/user.json'
import books from '../../fixtures/books.json'

describe('Casos de prueba API | Luis Viera', () => {

    it('API | Completar formulario de Shipping Address y realizar Place Order exitosamente', () => {
        const book = books[0]; 

        
        const payloadSuccess = {
            "orderDetails": [
                {
                    "book": {
                        "bookId": book.bookId,
                        "title": book.title,
                        "author": book.author,
                        "category": book.category,
                        "price": book.price,
                        "coverFileName": book.coverFileName
                    },
                    "quantity": 1
                }
            ],
            "cartTotal": book.price,
            "name": "Luis Viera",
            "addressLine1": "Las Heras 2859",
            "addressLine2": "Las Heras 2859",
            "pincode": "123456",
            "state": "San Martín"
        };

        
        cy.addBookToCartAPI(user.UserId, book.bookId, user.token);

        
        cy.checkoutShippingAPI(user.UserId, user.token, payloadSuccess, 200);
    });

    it('API | Error al realizar checkout con datos de envío incompletos', () => {
        const book = books[0];
        
        
        const payloadIncomplete = {
            "name": "Luis Viera",
            "addressLine1": "", 
            "addressLine2": "Departamento 4B",
            "pincode": "",      
            "state": ""         
        };

        
        cy.addBookToCartAPI(user.UserId, book.bookId, user.token);

        
        cy.checkoutShippingAPI(user.UserId, user.token, payloadIncomplete, 500);
    });

});