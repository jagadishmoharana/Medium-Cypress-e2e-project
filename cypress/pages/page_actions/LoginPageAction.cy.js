const logElementLocators = require('../page_elements/LoginPageElements.json')
class LoginPageAction{

    // Method to directly visit to the login page
    visitLoginPage(url){
        cy.clearAllCookies()
        cy.visit(url);
    }

    // Method to enter the email into the email input field
    fillEmail(email){
        cy.get(logElementLocators.LoginElementLocators.email).type(email)
    }

    // Method to enter the password into the password input field
    fillPassword(password){
        cy.get(logElementLocators.LoginElementLocators.password).type(password)
    }

    // Method to check login button is exist and visible
    isLoginVisible(){
        cy.get(logElementLocators.LoginElementLocators.login).should('exist').and('be.visible')
    }

    // Method to click the login button to submit the login form
    clickOnLogin(){
        cy.get(logElementLocators.LoginElementLocators.login).click()
    }
}
export default LoginPageAction;