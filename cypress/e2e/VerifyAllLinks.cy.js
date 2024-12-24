// Imports LoginPage class for actions related to the login page.
import LoginPage from "../pages/page_actions/LoginPageAction.cy";
// Imports HomePage class for actions related to the homepage.
import HomePage from "../pages/page_actions/HomePageAction.cy";


// Creating instances of the imported page classes for use in the tests.
const loginAction = new LoginPage();
const homepageAction = new HomePage();

// import data from fixture files
const loginData = require('../fixtures/LoginData.json');

describe("puma website", () => {

    before(() => {
        loginAction.visitLoginPage(loginData.url)// Navigates to the login page.
        loginAction.fillEmail(loginData.email)// Enters the email for login.
        loginAction.fillPassword(loginData.password)// Enters the password for login.
        loginAction.isLoginVisible()//Check login button is exist and visible
        loginAction.clickOnLogin()// Clicks the login button to submit the login form.
    });
    it('Verify all the Navigation links Present in NavBar is working', () => {
        homepageAction.visitHomepage()//Navaigate to homepage
        homepageAction.isAllNavbarLinksWorking();//check all the navigation bar links are working
    })
    it('Verify all the Footer links are working', () => {
        homepageAction.isAllFooterLinksWorking()//check all the footer links are working
    })

  })