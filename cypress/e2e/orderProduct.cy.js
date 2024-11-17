// Importing the necessary Page Object Model classes for different pages in the application.
import LoginPage from "../pages/page_actions/LoginPageAction.cy";// Imports LoginPage class for actions related to the login page.
import LogoutPage from "../pages/page_actions/LogoutPageAction.cy";// Imports LogoutPage class for actions related to user logout.
import HomePage from "../pages/page_actions/HomePageAction.cy";// Imports HomePage class for actions related to the homepage.
import ProductPage from "../pages/page_actions/ProductPageAction.cy";// Imports productPage class for actions related to the checkout process.
import CartPage from "../pages/page_actions/CartPageAction.cy";// Imports cartPage class for actions related to the cart process.
import CheckoutPage from "../pages/page_actions/CheckoutPageAction.cy";// Imports Checkout class for actions related to the checkout process.

// Creating instances of the imported page classes for use in the tests.
const loginAction = new LoginPage();
const logoutAction = new LogoutPage();
const homepageAction = new HomePage();
const productAction = new ProductPage();
const cartAction = new CartPage();
const checkoutAction = new CheckoutPage();


// import data from fixture files
const loginData = require('../fixtures/LoginData.json');
const searchData = require('../fixtures/SearchData.json');
const productData = require('../fixtures/ProductData.json')
const checkoutData = require('../fixtures/CheckoutData.json')

describe('should perform the complete workflow:login, search product, select product, add to cart, chekout, confirm order and logout', () => {
    
    // Test case for the complete user workflow: login, search product, select product, add to cart, chekout, confirm order and logout
          
    // login actions
    it('should perform the login actions', () => {
        loginAction.visitLoginPage(loginData.url)// Navigates to the login page.
        loginAction.fillEmail(loginData.email)// Enters the email for login.
        loginAction.fillPassword(loginData.password)// Enters the password for login.
        loginAction.isLoginVisible();//Check login button is exist and visible
        loginAction.clickOnLogin()// Clicks the login button to submit the login form.
        // verify successfully login 
        cy.url().should('eq','https://in.puma.com/in/en/account');
        cy.get('.heading-base').should('contain','Hello, Jagadish')
    })

    // homepage and Search actions
    it('should perform the homepage and Search actions', () => {
        homepageAction.visitHomepage(); // Navigates to the home page.
        homepageAction.isSearchVisible() //check search field should exist and visible
        homepageAction.searchForProduct(searchData.productName) // Enter product name in the search field and search
        homepageAction.selectProductFromSearchList(searchData.selectProduct); //select a perticular product
    })

    // Product page actions
    it('should perform the Product page actions', () => {
        productAction.selectProductSize(productData.productSize) //select product size
        productAction.addProductToCart()//Add product to the cart
        productAction.verifySuceesfull();//Verify successfully add to cart operation
    })

    // Cart actions
    it('should perform the Cart actions', () => {
        cartAction.visitCart() //Navigate to the cart
        cartAction.setProductQuantity(productData.quantity)//set product quantity
        cartAction.proceedToCheckout()//proceed to checkout
    
    })

    // Checkout actions
    it('should perform the Checkout actions', () => {
        checkoutAction.fillFirstName(checkoutData.firstName)//fill the firstname field
        checkoutAction.fillLastName(checkoutData.lastName)//fill the lastname field
        checkoutAction.fillPinCode(checkoutData.pincode)//fill the pin code
        checkoutAction.fillAddressLine1(checkoutData.address1)//fill the address
        checkoutAction.fillCity(checkoutData.city)//fill the city name
        checkoutAction.selectState(checkoutData.state)//select the state name
        checkoutAction.fillEmail(checkoutData.email)//fill email field
        checkoutAction.fillPhone(checkoutData.phone)//fill phone number 
        checkoutAction.ClickOnContinueToPayment()//continue to payment
        checkoutAction.selectCodPaymentMethod()//select a payment method 
        checkoutAction.clickOnPlaceOrder()//click on placeorder
    })

    // Logout actions
    it('should perform the Logout actions', () => {
        homepageAction.visitHomepage()//visit to homepage to access logout option
        logoutAction.isLogoutVisible()//check logout button is visible
        logoutAction.clickOnLogout()//logout from the website
    });
    
});