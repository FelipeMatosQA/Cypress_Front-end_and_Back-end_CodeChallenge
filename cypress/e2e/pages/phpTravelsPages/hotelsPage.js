
import { da } from "@faker-js/faker"
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

    invokeTextMonth(){
        return basePage.findElement(".datepicker-days  .table-condensed .switch").first().invoke('text')
    },

    selectDay(day){
        basePage.findELementByXpath(`//td[@class="day "][text()="${day}"]`).click()
    },


    selectDate(){
        let date = new Date()
        date.setDate(date.getDate() + 60)

        console.log(date)

        const expectedMonth = date.toLocaleString('En-US',{month:'long'})
        const monthInNumber = date.getMonth() + 1
        const year = date.getFullYear()
        const day = date.getDate()
        const expectMonthAndYear = expectedMonth+ " "+ year

        console.log("expectedMonth===" +expectedMonth)

        console.log("monthInNumber===" +monthInNumber)

        console.log("year===" +year)
        console.log("expectMonthAndYear===" +expectMonthAndYear)
        console.log("diaa=="+ day)

        basePage.findElement("#checkin").click()

        let mes_ano = []
        
        this.invokeTextMonth().then((text)=>{
            mes_ano.push(text)
            console.log("MEs ano= "+ mes_ano[0])
            console.log("expected = "+ expectMonthAndYear)
            if(mes_ano[0]==expectMonthAndYear){
                this.selectDay(day)
                console.log("dentro do if ")
            }else if(mes_ano[0]!==expectMonthAndYear){
                console.log("dentro do else ")
                let i = 0
                basePage.findElement(".datepicker.dropdown-menu .datepicker-days > .table-condensed > thead > :nth-child(1)  th:nth-child(3) > svg").first().click()
                basePage.findElement(".datepicker.dropdown-menu .datepicker-days > .table-condensed > thead > :nth-child(1)  th:nth-child(3) > svg").first().click()
                /*while(mes_ano[0].toString()!==expectMonthAndYear.toString()){

                    basePage.findElement(".datepicker.dropdown-menu .datepicker-days > .table-condensed > thead > :nth-child(1)  th:nth-child(3) > svg").first().click()
                    basePage.findElement(".datepicker.dropdown-menu .datepicker-days > .table-condensed > thead > :nth-child(1)  th:nth-child(3) > svg").first().click()
                    
                    console.log("dentro do while=="+mes_ano[0])
                    basePage.findElement(".datepicker-days  .table-condensed .switch").first().invoke('text').then((text)=>{
                        mes_ano.splice(0,0,text.toString())
                    })   
                }*/
                //basePage.findElement(".datepicker.dropdown-menu .datepicker-days > .table-condensed > thead > :nth-child(1)  th:nth-child(3) > svg").first().click()
               
                if(mes_ano[0]==expectMonthAndYear) this.selectDay(day)
            }
        })

        //if(mes_ano[0]==expectMonthAndYear){
        //    this.selectDay(day)
        //    console.log("dentro do if ")
       // }else if(mes_ano[0]!==expectMonthAndYear){
        //    console.log("dentro do else ")
        //    basePage.findElement(".datepicker.dropdown-menu .datepicker-days > .table-condensed > thead > :nth-child(1)  th:nth-child(3) > svg").first().click()
           /*while(mes_ano[0]!==expectMonthAndYear){
            basePage.findElement(".datepicker.dropdown-menu .datepicker-days > .table-condensed > thead > :nth-child(1)  th:nth-child(3) > svg").first().click()
        
            this.invokeTextMonth().then((text)=>{
                mes_ano.splice(0,0,text)
                console.log(mes_ano[0])
            })*/
        //    if(mes_ano[0]==expectMonthAndYear) this.selectDay(day)
        //}
           
        },
        /*cy.get('.datepicker.dropdown-menu .datepicker-days > .table-condensed > thead > :nth-child(1) > .switch').first()
            .invoke("text")
            .then((text)=>{
                if(text !== expectMonthAndYear){
                    let currentMonthAndYear = text
                    while(currentMonthAndYear !== expectMonthAndYear){

                        basePage.findElement(".datepicker.dropdown-menu .datepicker-days > .table-condensed > thead > :nth-child(1)  th:nth-child(3) > svg").first().click()
                        cy.get('.datepicker.dropdown-menu .datepicker-days > .table-condensed > thead > :nth-child(1) > .switch').first().invoke("text")
                            .then((newMonthAndYear) => {
                                currentMonthAndYear = newMonthAndYear;
                              })
                     }
                }
                
        })*/
        

    

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
         basePage.findELementByXpath(`//div[@class="card-body p-1 overflow-hidden"]//span[text()="Rating ${stars}"]/parent::small/following-sibling::a`).first().click()
    }

    
}