
import basePage from "../basePage"


export default {


    //elements 

    searchCityDropdown(){
        return basePage.findElement("#select2-hotels_city-container")
    },
    citySelectOption(){
        const element = "li.select2-results__option.select2-results__option"
        return element
    },

    containerElement(){
        return basePage.findElement(".mb-4.feature.hotels")
    },

    inputCity(){
        return basePage.findElement(".select2-search__field")
    },

    travelersAdultsPlusButton(){
        return basePage.findElement(".dropdown-menu.dropdown-menu-wrap .dropdown-item:nth-child(2) .qtyInc ")
    },

    travelersChildsPlusButton(){
        return basePage.findElement(".dropdown-menu.dropdown-menu-wrap .dropdown-item:nth-child(3) .qtyInc ")
    },

    nationalitySelect(){
        return basePage.findElement(".form-floating select")
    },

    searchForHotelButton(){
        return basePage.findElement(".col-lg-1 > button")
    },

    //Actions

    selectCity(city){
        this.searchCityDropdown().click()
        this.inputCity().type(city)
        basePage.findElementByClassAndContent(this.citySelectOption(),city)
            .should("be.visible")
            .click()
        this.searchCityDropdown().should("contain",city)   
    },


    selectDate(){
        let date = new Date()
        date.setDate(date.getDate() + 25)

        console.log(date)

        const expectedMonth = date.toLocaleString('En-US',{month:'long'})
        const monthInNumber = date.getMonth() + 1
        const year = date.getFullYear()
        const expectMonthAndYear = expectedMonth+ " "+ year

        basePage.findElement("#checkin").click()
        cy.get('.datepicker.dropdown-menu .datepicker-days > .table-condensed > thead > :nth-child(1) > .switch').first().invoke("text").then((text)=>{
           while(text!==expectMonthAndYear){

            basePage.findElement(".datepicker.dropdown-menu .datepicker-days > .table-condensed > thead > :nth-child(1)  th:nth-child(3) > svg").first().click()

           }
        })
        

    },

    selectTravelers(country,countryValue,childAge){
        basePage.findElement(".dropdown-toggle.dropdown-btn.travellers.d-flex.align-items-center.waves-effect").click()
       

        this.travelersAdultsPlusButton().click()
        
        this.travelersChildsPlusButton().click()
        this.travelersChildsPlusButton().click()
        
        
        this.selectChildAgeByIndex(childAge,1)
        
        this.selectChildAgeByIndex(childAge,2)

        this.nationalitySelect().select(country).should("have.value", countryValue)

       

        this.containerElement().click()
        

        this.searchForHotelButton().click()
    },

    selectChildAgeByIndex(age,index){
        basePage.findElement(`#append li:nth-child(${index}) select`).select(age).should("have.value",age)
    },

    selectHotelByStarts(stars){
    
         cy.xpath(`//div[@class="card-body p-1 overflow-hidden"]//span[text()="Rating ${stars}"]/parent::small/following-sibling::a`).first().click()
    }

    
}