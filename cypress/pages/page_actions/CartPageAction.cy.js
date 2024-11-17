const cartLocators = require('../page_elements/CartPageElements.json')
class CartPageAction {

  // Method to visit cart page
    visitCart(){
        cy.get(cartLocators.cart).click()
    }

    // Method to setProduct quantity
    setProductQuantity(quantity){
        cy.get(cartLocators.quantity).select(quantity)
    }
  
    //Method for proceed to checkout
    proceedToCheckout() {
      cy.get(cartLocators.checkout).click()
    }


  
  }
  
  export default CartPageAction;
  