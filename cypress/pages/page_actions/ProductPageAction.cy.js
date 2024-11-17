const productData = require('../page_elements/ProductPageElements.json')
class ProductPageAction {
 
    // Method to return locator for product size
    setProductSize(){
        return cy.get(productData.size)
    }

    // Select product size
    selectProductSize(size) {
      let sizeSelected = false; 
  
      this.setProductSize().each(($el) => {
          cy.wrap($el).invoke('text').then((text) => {
              if (text.trim() === size) {
                  cy.wrap($el).click();
                  sizeSelected = true; 
              }
          });
      }).then(() => {
          if (!sizeSelected) {
              this.setProductSize().first().click();
          }
      });
  }
  

    // Method to add product to the cart
    addProductToCart() {
      cy.get(productData.addToCart).click();
    }
  
    verifySuceesfull(){
      cy.get('[data-test-id="minicart-added-to-content"]')
      .should('be.visible')
      .within(() => {
        // Verify the "Added to cart" message is visible
        cy.get('[data-test-id="minicart-added-to-heading"]').should('contain.text', 'Added to cart');
        cy.get('[data-test-id="minicart-added-to-close"]').click()
      });
    }
  }
  
  export default ProductPageAction;
  