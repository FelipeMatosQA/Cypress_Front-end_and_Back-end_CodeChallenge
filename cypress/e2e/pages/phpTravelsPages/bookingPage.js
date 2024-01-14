import basePage from "../basePage"

export default {

    //elements

    personalInformationFirstName(){
        return basePage.findElement('input[name="user[first_name]"]')
    },

    personalInformationLastName(){
        return basePage.findElement('input[name="user[last_name]"]')
    },

    personalInformationEmail(){
        return basePage.findElement('input[name="user[email]"]')
    },

    personalInformationPhone(){
        return basePage.findElement('input[name="user[phone]"]')
    },

    personalInformationNationality(){
        return basePage.findElement('option[value="IT"][selected="selected"]').fisrt()
    },

    adultTravellerFirstNameByIndex(index){
        return cy.xpath(`//div[@class="card-header"] [text()=" Travellers ${index} "]/following-sibling::div //input[@name="firstname_${index}"]`)
    },
    adultTravellerLastNameByIndex(index){
        return cy.xpath(`//div[@class="card-header"] [text()=" Travellers ${index} "]/following-sibling::div //input[@name="lastname_${index}"]`)
    },

    childTravellerFistNameByIndex(index){
        return cy.xpath(`//div[@class="card-header"] [text()=" Travellers ${index} "]/following-sibling::div //input[@name="child_firstname_${index}"]`)
    },
    childTravellerLastNameByIndex(index){
        return cy.xpath(`//div[@class="card-header"] [text()=" Travellers ${index} "]/following-sibling::div //input[@name="child_lastname_${index}"]`)
    },

    childAgeByIndex(index){
        return basePage.findElement(`select.form-select.child_age_${index}`)
    },

    paymentMethodPayLater(){
        return basePage.findElement("#gateway_pay_later")
    },

    agreeToAllCheckBox(){
        return basePage.findElement("#agreechb")
    },

    bookingButton(){
        return basePage.findElement("#booking")
    },

    //actions

    validatePersonalInformation(fisrtName,lastName,email,phone){
        this.personalInformationFirstName().should("have.value",fisrtName+" ")
        this.personalInformationLastName().should("have.value",lastName)
        this.personalInformationEmail().should("have.value",email)
        this.personalInformationPhone().should("have.value",phone)
    },

    fillAdultTravelersNameByIndex(index,fisrtName,lastName){
        this.adultTravellerFirstNameByIndex(index).type(fisrtName)
        this.adultTravellerLastNameByIndex(index).type(lastName)
    },
    
    fillChildTravelersNameByIndex(index,fisrtName,lastName){
        this.childTravellerFistNameByIndex(index).type(fisrtName)
        this.childTravellerLastNameByIndex(index).type(lastName)
    },

    validateChildAgeByIndex(index,age){
        this.childAgeByIndex(index).should("have.value",age)
    },

    selectPaymentMethocPayLater(){
        this.paymentMethodPayLater().click()
    },

    agreeTermsAndConditions(){
        //this.agreeTermsAndConditions().check({force:true})
        basePage.findElement("#agreechb").check({force:true})
    },

    clickBookingConfirmBtn(){
        this.bookingButton().click({force:true})
    }






    




}