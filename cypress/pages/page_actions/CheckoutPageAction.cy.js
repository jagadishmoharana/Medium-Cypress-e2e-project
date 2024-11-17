const chekoutLocator = require('../page_elements/CheckoutElements.json')
class CheckoutPageAction{

     // Method to input first name into firstname field 
     fillFirstName(firstName){
        cy.get(chekoutLocator.firstName).clear().type(firstName,{force:true});
    }

    // Method to input last name into lastname field 
    fillLastName(lastName){
        cy.get(chekoutLocator.lastName).clear().type(lastName,{force:true});
    }

    // Method to input pincode to the pincode field
    fillPinCode(pincode){
        cy.get(chekoutLocator.pincode).clear().type(pincode)
    }

    // Method to input Address to the Address Line 1
    fillAddressLine1(address){
        cy.get(chekoutLocator.adddressLine1).clear().type(address)
    }

    // Method to input city to the city field
    fillCity(city){
        cy.get(chekoutLocator.city).clear().type(city)
    }

    // Method to select state 
    selectState(state_name){
        cy.get(chekoutLocator.state).select(state_name)
    }

    // Method to input email address into email field 
    fillEmail(email){
        cy.get(chekoutLocator.email).clear().type(email);
    }

    // Method to input  phone number into phone field 
    fillPhone(phone){
        cy.get(chekoutLocator.phoneNumber).clear().type(phone);
    }

    // Method to check the Enter a billing address
    checkBillingAddress(){
        cy.get(chekoutLocator.billingAddress).check();
    }

    // Method to click on continue payment 
    ClickOnContinueToPayment(){
        cy.get(chekoutLocator.continuePayment).click();
    }

    // Method to select cod payment method
    selectCodPaymentMethod(){
        cy.get(chekoutLocator.cashOnDelivery).click()
    }

    // Method to select online payment method
    selectOnlinePaymentMethod(){
        cy.get(chekoutLocator.upi).click()
    }

    // Method to click on place order
    clickOnPlaceOrder(){
        cy.get(chekoutLocator.placeOrder).click()
    }
    
}

export default CheckoutPageAction;