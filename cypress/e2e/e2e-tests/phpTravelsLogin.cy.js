import basePage from "../pages/basePage"
import dashboardPage from "../pages/phpTravelsPages/dashboardPage"
import homePage from "../pages/phpTravelsPages/homePage"
import loginPage from "../pages/phpTravelsPages/loginPage"
import credentials from "../../fixtures/phpTravelsCredentials.json"

describe("teste de login",()=>{

    it("Login com sucesso",()=>{

        cy.visit("https://phptravels.net/")

        homePage.navigateToLoginPage()
        loginPage.performLogin(credentials.email,credentials.password)
        dashboardPage.validateLogin(credentials.fullName)
    })

})