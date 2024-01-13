import homepage from "../pages/nopCommercePages/homepage"
import registerPage from "../pages/nopCommercePages/registerPage"
import { faker } from "@faker-js/faker"
import registerResultPage from "../pages/nopCommercePages/registerResultPage"


describe("FEature de Registro",()=>{
    
    
    beforeEach("Visit register page",()=>{
        cy.visit("https://demo.nopcommerce.com/")
        homepage.navigateToRegisterPage()
    })

    it("Registro com sucesso",()=>{
        
        registerPage.checkRadio("F")
        registerPage.fillFirstName(faker.person.firstName())
        registerPage.fillLastName(faker.person.lastName())
        registerPage.fillCompanyName("QualityMap")
        registerPage.fillPassword(faker.internet.password())
        registerPage.fillEmail(faker.internet.email())
        const day = faker.number.int({min:1,max:31}).toString()
        const month = faker.number.int({min:1,max:12}).toString()
        const year = faker.number.int({min:1914,max:2024}).toString()
        registerPage.fillDate(day,month,year)
       
        registerPage.clickBtnRegister()
        registerResultPage.validateSucessfullRegister()
    })
})