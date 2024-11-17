const logoutElementLocators = require('../page_elements/LogoutPageElemnts.json')
class LogoutPageAction{

    //Method to return Locator for logout 
    getLogoutButton(){
        cy.get(logoutElementLocators.accountButton).click()
        return cy.get(logoutElementLocators.logoutButton);
    }

    // Method to check logout button is exist and visible 
    isLogoutVisible(){
        this.getLogoutButton().should('exist').and('be.visible')
    }

    // Method to perform the logout action
    clickOnLogout(){
        
        this.getLogoutButton().click({force:true})
        cy.clearAllCookies() //To clear all the cookies
    }


}
export default LogoutPageAction;