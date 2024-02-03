import basePage from "../pages/basePage"
import dashboardPage from "../pages/phpTravelsPages/dashboardPage"
import homePage from "../pages/phpTravelsPages/homePage"
import loginPage from "../pages/phpTravelsPages/loginPage"
import credentials from "../../fixtures/phpTravelsCredentials.json"

describe.skip("teste de login",()=>{

    beforeEach("teste beforeEach",()=>{
        cy.visit("https://phptravels.net/")

        homePage.navigateToLoginPage()
    })

    it("Login com sucesso",()=>{

        //cy.visit("https://phptravels.net/")

        //homePage.navigateToLoginPage()
        loginPage.performLogin(credentials.email,credentials.password)
        dashboardPage.validateLogin(credentials.fullName)
    })

})