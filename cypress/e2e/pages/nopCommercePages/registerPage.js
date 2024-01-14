import { base } from "@faker-js/faker"
import basePage from "../basePage"

export default{


    //elements

    fisrtNameField(){
        return basePage.findElement("#FirstName")
    },

    lastNameField(){
        return basePage.findElement("#LastName")
    },

    dayDateSelect(){
        return basePage.findElement('select[name="DateOfBirthDay"]')
    },

    monthDateSelect(){
        return basePage.findElement('select[name="DateOfBirthMonth"]')
    },
    yearDateSelect(){
        return basePage.findElement('select[name="DateOfBirthYear"]')
    },

    emailfield(){
        return basePage.findElement("#Email")
    },
    companyNameField(){
        return basePage.findElement("#Company")
    },

    newsLetterCheckBox(){
        return basePage.findElement("#Newsletter")
    },

    passwordField(){
        return basePage.findElement("#Password")
    },

    confirmPasswordField(){
        return basePage.findElement("#ConfirmPassword")
    },

    registerButton(){
        return basePage.findElement("#register-button")
    },
    passwordErrorMessage(){
        return basePage.findElement(".field-validation-error #Password-error")
    },
    passwordConfirmErrorMessage(){
        return basePage.findElement(".field-validation-error #ConfirmPassword-error")
    },

    errorMessage(){
        return basePage.findElement(".field-validation-error")
    },

    //Actions 

    fillFirstName(firstName){
        this.fisrtNameField().type(firstName)
            .should("have.value",firstName)
    },

    fillLastName(lastName){
        this.lastNameField().type(lastName)
            .should("have.value",lastName)
    },
    fillEmail(email){
        this.emailfield().type(email)
            .should("have.value",email)
    },
    fillCompanyName(companyName){
        this.companyNameField().type(companyName)
            .should("have.value",companyName)

    },
    fillPassword(passwordField){
        this.passwordField().type(passwordField)
        this.confirmPasswordField().type(passwordField)
    },
    clickBtnRegister(){
        this.registerButton().click()
    },

    

    fillDate(day,monthInNumbers,year){
        this.dayDateSelect().select(day)
            .should("have.value",day)
        this.monthDateSelect().select(monthInNumbers)
            .should("have.value",monthInNumbers)
        this.yearDateSelect().select(year)
            .should("have.value",year)
    },

    checkRadio(value){
        basePage.findElement(`input[type="radio"][value="${value}"]`).check()
        basePage.findElement(`input[type="radio"][value="${value}"]`).should("be.checked")
    },

    validateRequiredFieldMessage(message){
        this.errorMessage().should("have.text",message)
    },
    
    validateRequiredPasswordMessage(){
        this.passwordErrorMessage()
            .should("be.visible")
            .should("have.text","Password is required.")
    },

    validateRequiredConfirmPasswordMessage(){
        this.passwordConfirmErrorMessage()
            .should("be.visible")
            .should("have.text","Password is required.")
    }



}