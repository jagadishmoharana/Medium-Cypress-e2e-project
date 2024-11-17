const homePageElementLocators = require('../page_elements/HomePageElements.json')

class HomePageAction {

    // Method to visit homepage
    visitHomepage(){
        cy.get(homePageElementLocators.home).click()
    }
  
    // method to check search field is exist and visible
    isSearchVisible(){
        cy.get(homePageElementLocators.search.searchField).should('exist').and('be.visible')
    }

    // Method to perform a search
    searchForProduct(productName) {

        cy.get(homePageElementLocators.search.searchField).type(productName);
        cy.get(homePageElementLocators.search.searchButton).click();
    }

    // Method to select a product
    selectProductFromSearchList(name){
        cy.get(homePageElementLocators.search.ProductList).each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                if (text.trim().includes(name)) {
                    cy.wrap($el).click();
                }
            });
        })
    }


    // Method to verify working of navigation links
    verifyWorkingOfLink(locator){
      let brokenLinks = 0;
      let activeLinks = 0;
  
      cy.get(locator).each((el,index)=>{
        const link = el.attr('href');
        if(link){
          cy.request({url:link ,failOnStatusCode: false , log:false}).then((response)=>{
            const text = el.text();
            if(response.status >= 400){
              
              cy.log(`${text} is a XX broken link XX`)
              brokenLinks++;
            }
            else{
              cy.log(`${text} is an Active link.`)
              activeLinks++;
            }
          })
        }
        
      })
      .then((el)=>{
        cy.log("Total links with href attribute is :"+el.length)
        cy.log("No. of broken links found :"+brokenLinks)
        cy.log("No. of active links found :"+activeLinks)
       })
    }


    isAllNavbarLinksWorking(){
     const locator = homePageElementLocators.navbarLinks;
     this.verifyWorkingOfLink(locator);
     
    }
    isAllFooterLinksWorking(){
        const locator = homePageElementLocators.footerLinks;
        this.verifyWorkingOfLink(locator);
    }
    
}
  
export default HomePageAction;

  