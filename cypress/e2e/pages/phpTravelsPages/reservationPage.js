import basePage from "../basePage"

export default {

    //Elements

    getTravelersNameByLine(line){
        return basePage.findELementByXpath(`//div[@class="card p-3 mx-auto"] //table[2]/tbody//tr[${line}]/th[3]`)
    },

    priceValue(){
        return basePage.findELementByXpath('//div[@class="col-md-3 text-center d-flex align-items-center justify-content-center mt-3"]//h5')
    },
    
    hotelName(){
        return basePage.findElement("h5.card-title.m-0")
    },


    //Actions

    getTextOfTravelersNameByLine(line){
        return this.getTravelersNameByLine(line).invoke('text')
    },

    getPriceValue(){
        return this.priceValue().invoke('text')
    },

    getHotelName(){
        return this.hotelName().invoke('text')
    }
}