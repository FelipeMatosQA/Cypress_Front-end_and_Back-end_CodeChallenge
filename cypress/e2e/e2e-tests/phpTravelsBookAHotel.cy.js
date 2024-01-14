import loginPage from "../pages/phpTravelsPages/loginPage"
import credentials from "../../fixtures/phpTravelsCredentials.json"
import dashboardPage from "../pages/phpTravelsPages/dashboardPage"
import hotelsPage from "../pages/phpTravelsPages/hotelsPage"
import homePage from "../pages/phpTravelsPages/homePage"
import specificHotelPage from "../pages/phpTravelsPages/specificHotelPage"
import bookingPage from "../pages/phpTravelsPages/bookingPage"
import {faker} from "@faker-js/faker"

describe("Reserva de Hotel",()=>{

    beforeEach("Login",()=>{
        cy.visit("https://phptravels.net/")

        homePage.navigateToLoginPage()
        loginPage.performLogin(credentials.email,credentials.password)
        dashboardPage.validateLogin(credentials.fullName)
    })

    it("Reversar um hotel para multiplos hospedes e confirmar as informações",()=>{
        dashboardPage.navigateToHotels()
        
        hotelsPage.selectCity("Dubai")
        //hotelsPage.selectDate()
        hotelsPage.selectTravelers("Italy","IT","3")
        hotelsPage.selectHotelByStarts("5")
        

        //FALTA PEGAR OS VALORES DOS ASSERTS DO HOTEL AQUI
        specificHotelPage.clickSelectRoom()
        specificHotelPage.clickBookNow()
        
        bookingPage.validatePersonalInformation(credentials.fisrtName, credentials.lastName,credentials.email,credentials.phone)
        
        const adults={
            "adult1_fisrtName":faker.person.firstName(),
            "adult1_lastName": faker.person.lastName(),
            "adult2_fisrtName":faker.person.firstName(),
            "adult2_lastName": faker.person.lastName(),
            "adult3_fisrtName":faker.person.firstName(),
            "adult3_lastName": faker.person.lastName(),
        }

        const childs={
            "child1_fisrtName":faker.person.firstName(),
            "child1_lastName": faker.person.lastName(),
            "child2_fisrtName":faker.person.firstName(),
            "child2_lastName": faker.person.lastName(),
        }

        //bookingPage.fillAdultTravelersNameByIndex(1,faker.person.firstName(),faker.person.lastName())
        bookingPage.fillAdultTravelersNameByIndex(1,adults.adult1_fisrtName,adults.adult1_lastName)
        bookingPage.fillAdultTravelersNameByIndex(2,adults.adult2_fisrtName,adults.adult2_lastName)
        bookingPage.fillAdultTravelersNameByIndex(3,adults.adult3_fisrtName,adults.adult3_lastName)

        bookingPage.validateChildAgeByIndex(1,"3")
        bookingPage.validateChildAgeByIndex(2,"3")
       
        bookingPage.fillChildTravelersNameByIndex(1,childs.child1_fisrtName,childs.child1_lastName)
        bookingPage.fillChildTravelersNameByIndex(2,childs.child1_fisrtName,childs.child1_lastName)

        bookingPage.selectPaymentMethocPayLater()
        bookingPage.agreeTermsAndConditions()
        bookingPage.clickBookingConfirmBtn()

    })
})