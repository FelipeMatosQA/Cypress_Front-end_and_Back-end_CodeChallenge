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

    it("Validar Obrigatoriedade do campo {FirstName}",()=>{
        
        registerPage.checkRadio("F")
        //registerPage.fillFirstName(faker.person.firstName())
        registerPage.fillLastName(faker.person.lastName())
        registerPage.fillCompanyName("QualityMap")
        registerPage.fillPassword(faker.internet.password())
        registerPage.fillEmail(faker.internet.email())
        const day = faker.number.int({min:1,max:31}).toString()
        const month = faker.number.int({min:1,max:12}).toString()
        const year = faker.number.int({min:1914,max:2024}).toString()
        registerPage.fillDate(day,month,year)
       
        registerPage.clickBtnRegister()
        
        registerPage.validateRequiredFieldMessage("First name is required.")
    })

    it("Validar Obrigatoriedade do campo {LastName}",()=>{
        
        registerPage.checkRadio("F")
        registerPage.fillFirstName(faker.person.firstName())
        //registerPage.fillLastName(faker.person.lastName())
        registerPage.fillCompanyName("QualityMap")
        registerPage.fillPassword(faker.internet.password())
        registerPage.fillEmail(faker.internet.email())
        const day = faker.number.int({min:1,max:31}).toString()
        const month = faker.number.int({min:1,max:12}).toString()
        const year = faker.number.int({min:1914,max:2024}).toString()
        registerPage.fillDate(day,month,year)
       
        registerPage.clickBtnRegister()
        
        registerPage.validateRequiredFieldMessage("Last name is required.")
    })

    it("Validar Obrigatoriedade do campo {Email}",()=>{
        
        registerPage.checkRadio("F")
        registerPage.fillFirstName(faker.person.firstName())
        registerPage.fillLastName(faker.person.lastName())
        registerPage.fillCompanyName("QualityMap")
        registerPage.fillPassword(faker.internet.password())
        //registerPage.fillEmail(faker.internet.email())
        const day = faker.number.int({min:1,max:31}).toString()
        const month = faker.number.int({min:1,max:12}).toString()
        const year = faker.number.int({min:1914,max:2024}).toString()
        registerPage.fillDate(day,month,year)
       
        registerPage.clickBtnRegister()
        
        registerPage.validateRequiredFieldMessage("Email is required.")
    })

    it("Validar Obrigatoriedade do campo {Password} e {Confirm Password}",()=>{
        
        registerPage.checkRadio("F")
        registerPage.fillFirstName(faker.person.firstName())
        registerPage.fillLastName(faker.person.lastName())
        registerPage.fillCompanyName("QualityMap")
        //registerPage.fillPassword(faker.internet.password())
        registerPage.fillEmail(faker.internet.email())
        const day = faker.number.int({min:1,max:31}).toString()
        const month = faker.number.int({min:1,max:12}).toString()
        const year = faker.number.int({min:1914,max:2024}).toString()
        registerPage.fillDate(day,month,year)
       
        registerPage.clickBtnRegister()
        
        registerPage.validateRequiredFieldMessage("Password is required.Password is required.")
        
    })

    it.only("Validar Obrigatoriedade do campo {Confirm Password}",()=>{
        
        registerPage.checkRadio("F")
        registerPage.fillFirstName(faker.person.firstName())
        registerPage.fillLastName(faker.person.lastName())
        registerPage.fillCompanyName("QualityMap")
        const password = faker.internet.password()
        registerPage.passwordField().type(password)
        //registerPage.fillPassword(faker.internet.password())
        registerPage.fillEmail(faker.internet.email())
        const day = faker.number.int({min:1,max:31}).toString()
        const month = faker.number.int({min:1,max:12}).toString()
        const year = faker.number.int({min:1914,max:2024}).toString()
        registerPage.fillDate(day,month,year)
       
        registerPage.clickBtnRegister()
        
        registerPage.validateRequiredConfirmPasswordMessage("Password is required.")
    })

    it.only("Validar Obrigatoriedade do campo {Password}",()=>{
        
        registerPage.checkRadio("F")
        registerPage.fillFirstName(faker.person.firstName())
        registerPage.fillLastName(faker.person.lastName())
        registerPage.fillCompanyName("QualityMap")
        const password = faker.internet.password()
        registerPage.confirmPasswordField().type(password)
        //registerPage.fillPassword(faker.internet.password())
        registerPage.fillEmail(faker.internet.email())
        const day = faker.number.int({min:1,max:31}).toString()
        const month = faker.number.int({min:1,max:12}).toString()
        const year = faker.number.int({min:1914,max:2024}).toString()
        registerPage.fillDate(day,month,year)
       
        registerPage.clickBtnRegister()
        
        registerPage.validateRequiredPasswordMessage("Password is required.")
        
    })
})