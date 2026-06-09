/// <reference types="cypress" />
import user from '../../fixtures/user.json'
import books from '../../fixtures/books.json'

describe('Casos de prueba API | Luis Viera', () => {

    it('API | Completar formulario de Shipping Address y realizar Place Order exitosamente', () => {
        const book = books[0]; 

        // Armamos el payload EXACTO que pide Swagger (Libro + Envío)
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

        // 1. Precondición: Agregar libro al carrito
        cy.addBookToCartAPI(user.UserId, book.bookId, user.token);

        // 2. Acción y Validación: Checkout exitoso (200 OK)
        cy.checkoutShippingAPI(user.UserId, user.token, payloadSuccess, 200);
    });

    it('API | Error al realizar checkout con datos de envío incompletos', () => {
        const book = books[0];
        
        // Mismo payload, pero vaciando campos obligatorios de envío
        const payloadIncomplete = {
            "name": "Luis Viera",
            "addressLine1": "", 
            "addressLine2": "Departamento 4B",
            "pincode": "",      
            "state": ""         
        };

        // 1. Precondición: Agregar libro al carrito
        cy.addBookToCartAPI(user.UserId, book.bookId, user.token);

        // 2. Acción y Validación: Checkout falla (Ahora da 500 por regla de negocio, no por error de payload)
        cy.checkoutShippingAPI(user.UserId, user.token, payloadIncomplete, 500);
    });

});