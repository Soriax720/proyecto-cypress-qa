import user from '../../fixtures/user.json'
import url from '../../fixtures/url.json'
import books from '../../fixtures/books.json'
const pageHome = require('../../support/page_objects/pageHome')
const componentNav = require('../../support/page_objects/componentNav')
const pageShoppingCart = require('../../support/page_objects/pageShoppingCart')
const pageCheckOut = require('../../support/page_objects/pageCheckout')
const pageMyOrders = require('../../support/page_objects/pageMyOrders')

describe('Casos de prueba de FRONT', () => {
  it('Comprar carrito exitosamente y visualizar orden de compra', () => {
    const bookTest = books[0];
    cy.deleteCartAPI(user.UserId, user.token);
    cy.visit(url.login)
    cy.login(user.name, user.password);



    cy.url().should('include', url.home)
    pageHome.validateBookTitle(bookTest.title);
    componentNav.verifyCartBadgeCount('0')


    pageHome.clickAddToCartButton();
    pageHome.validateToastMessage();



    componentNav.verifyCartBadgeCount('1')
    componentNav.clickShoppingCart()


    pageShoppingCart.checkVisibleBook(bookTest.title)

    pageShoppingCart.clickCheckoutButton()



    cy.url().should('include', url.checkout)
    pageCheckOut.verifyPurchasedBook(bookTest.title)

    
    pageCheckOut.verifyAllShippingFormFields();

    pageCheckOut.fillCompleteShippingForm(
      user.shipping.name,
      user.shipping.addressLine1,
      user.shipping.addressLine2,
      user.shipping.pincode,
      user.shipping.state
    );

   
    pageCheckOut.clickPlaceOrder();
    cy.url().should('include', url.myorders)
    //pageMyOrders.verifyOrderCreated();
    pageMyOrders.clickFirstPurchaseOrder();
    pageMyOrders.verifyPurchasedBook(bookTest.title)
  })
})