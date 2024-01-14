import basePage from "../pages/basePage"
import homePage from "../pages/phpTravelsPages/homePage"

describe("teste de login",()=>{

    it.only("Login com sucesso",()=>{

        cy.visit("https://phptravels.net/")

       /* basePage.findElementByClassAndContent(".nav-item.dropdown","Account").click()
        basePage.findElementByClassAndContent("a","Login").click()

        basePage.validateCurrentUrl("/login")*/

        homePage.navigateToLoginPage()
    })

})