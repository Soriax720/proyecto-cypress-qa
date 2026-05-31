class checkout{
    verifyPurchasedBook(bookTitle){
        cy.get('tr').eq(1).should('contain', bookTitle)
    }

    verifyNameField() {
        cy.get('input[formcontrolname="name"]').should('be.visible')
    }

    verifyAddressLine1Field() {
        cy.get('input[formcontrolname="addressLine1"]').should('be.visible')
    }

    verifyAddressLine2Field() {
        cy.get('input[formcontrolname="addressLine2"]').should('be.visible')
    }

    verifyPincodeField() {
        cy.get('input[formcontrolname="pincode"]').should('be.visible')
    }

    verifyStateField() {
        cy.get('input[formcontrolname="state"]').should('be.visible')
    }

    
    verifyAllShippingFormFields() {
        this.verifyNameField();
        this.verifyAddressLine1Field();
        this.verifyAddressLine2Field();
        this.verifyPincodeField();
        this.verifyStateField();
    }


    typeName(name){
        cy.get('input[formcontrolname="name"]').type(name)
    }

    typeAdressLine1(address){
        cy.get('input[formcontrolname="addressLine1"]').type(address)
    }

    typeAdressLine2(floor){
        cy.get('input[formcontrolname="addressLine2"]').type(floor)
    }

    typePincode(zipCode){
        cy.get('input[formcontrolname="pincode"]').type(zipCode)
    }

    typeState(state){
        cy.get('input[formcontrolname="state"]').type(state)
    }
    
    clickPlaceOrder() {
        cy.get('button').contains('Place Order').click()
    }

    fillCompleteShippingForm(name,address,floor,zipCode,state){
        this.typeName(name);
        this.typeAdressLine1(address);
        this.typeAdressLine2(floor);
        this.typePincode(zipCode);
        this.typeState(state)
    }

}module.exports = new checkout()