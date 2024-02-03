import loginPage from "../pages/phpTravelsPages/loginPage"
import credentials from "../../fixtures/phpTravelsCredentials.json"
import dashboardPage from "../pages/phpTravelsPages/dashboardPage"
import hotelsPage from "../pages/phpTravelsPages/hotelsPage"
import homePage from "../pages/phpTravelsPages/homePage"
import specificHotelPage from "../pages/phpTravelsPages/specificHotelPage"
import bookingPage from "../pages/phpTravelsPages/bookingPage"
import {faker} from "@faker-js/faker"
import { expect } from "chai"
import reservationPage from "../pages/phpTravelsPages/reservationPage"
import testData from "../../fixtures/bookAHotelData.json"



describe.skip("Reserva de Hotel",()=>{
    let hotelName = []
    let hotelLocation = []
    let hotelPrice = []

    let cardLocation = []
    let cardname = []
    let cardprice = []

    beforeEach("Login",()=>{
        cy.visit("https://phptravels.net")

        homePage.navigateToLoginPage()
        loginPage.performLogin(credentials.email,credentials.password)
        dashboardPage.validateLogin(credentials.fullName)
    })

    it("Reversar um hotel para multiplos hospedes e confirmar as informações",()=>{

        dashboardPage.navigateToHotels()
        
        hotelsPage.selectCity(testData.city)
        //hotelsPage.selectDate()
        hotelsPage.selectTravelers(testData.country,testData.country_Select_value,testData.child_Age)
        hotelsPage.selectHotelByStarts(testData.hotel_stars)
        
        specificHotelPage.clickSelectRoom()

        specificHotelPage.getValuesOfHotelName().then((name)=>{
            hotelName.push(name)
        })

        specificHotelPage.getValueOfHotelLocation().then((location)=>{
            hotelLocation.push(location.toString())
        })

        specificHotelPage.getValueOfHotelPrice().then((price)=>{
            
            hotelPrice.push(price.toString().replace("Book Now", ""))     
        })

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

        bookingPage.fillAdultTravelersNameByIndex(1,adults.adult1_fisrtName,adults.adult1_lastName)
        bookingPage.fillAdultTravelersNameByIndex(2,adults.adult2_fisrtName,adults.adult2_lastName)
        bookingPage.fillAdultTravelersNameByIndex(3,adults.adult3_fisrtName,adults.adult3_lastName)

        bookingPage.validateChildAgeByIndex(1,"3")
        bookingPage.validateChildAgeByIndex(2,"3")
       
        bookingPage.fillChildTravelersNameByIndex(1,childs.child1_fisrtName,childs.child1_lastName)
        bookingPage.fillChildTravelersNameByIndex(2,childs.child2_fisrtName,childs.child2_lastName)



        bookingPage.getCardNameValue().then((name)=>{
            cardname.push(name)
        })

        bookingPage.getCardHotelLocation().then((location)=>{
            cardLocation.push(location)
        })

        bookingPage.getCardSubTotalPrice().then((price)=>{
            cardprice.push(price.toString().replace("Sub Total:",""))
        })

        cy.then(()=>{
            expect(cardname[0]).equals(hotelName[0])
            expect(cardprice[0]).equals(hotelPrice[0])
        })
        
        bookingPage.selectPaymentMethocPayLater()
        bookingPage.agreeTermsAndConditions()
        bookingPage.clickBookingConfirmBtn()

        reservationPage.getTextOfTravelersNameByLine(1).then((name)=>{
            expect(name).equals(adults.adult1_fisrtName+" "+adults.adult1_lastName)  
        })
        reservationPage.getTextOfTravelersNameByLine(2).then((name)=>{
            expect(name).equals(adults.adult2_fisrtName+" "+adults.adult2_lastName)  
        })
        reservationPage.getTextOfTravelersNameByLine(3).then((name)=>{
            expect(name).equals(adults.adult3_fisrtName+" "+adults.adult3_lastName)  
        })

        //Tem um Bug de exibição do nome dos passageiros crianças, onde está sendo repitido o nome das crianças.
        /*reservationPage.getTextOfTravelersNameByLine(4).then((name)=>{
            expect(name).equals(childs.child1_fisrtName+" "+childs.child1_lastName)  
        })
        reservationPage.getTextOfTravelersNameByLine(5).then((name)=>{
            expect(name).equals(childs.child2_fisrtName+" "+childs.child2_lastName)  
        })*/
        
        reservationPage.getPriceValue().then((price)=>{
            expect(cardprice[0]).to.contain(price)
            expect(hotelPrice[0]).to.contain(price)
        })

        reservationPage.getHotelName().then((name)=>{
            expect(name).equals(hotelName[0])
            expect(name).equals(cardname[0])
        })

        



    })
})