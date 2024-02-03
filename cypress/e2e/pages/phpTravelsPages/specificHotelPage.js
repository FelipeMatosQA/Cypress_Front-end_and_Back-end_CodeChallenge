import { base } from "@faker-js/faker"
import basePage from "../basePage"

export default{

    //elements
    selectRoomButton(){
        return basePage.findElementByClassAndContent("a.d-none","Select Room ")
    },

    bookNowButton(){
        return basePage.findElement("button.btn.btn-primary.fw-bold.w-100.mt-3.mt-lg-0.mt-md-0.waves-effect")
    },
    hotelName(){
        return basePage.findElement(".h4.fw-bold.mb-0")
    },
    hotelLocation(){
        return basePage.findElement("div.d-flex.gap-1.align-items-center span.text--overflow")
    },

    //actions

    clickSelectRoom(){
        this.selectRoomButton().click()
    },
    
    clickBookNow(){
        this.bookNowButton().click()
        basePage.validateCurrentUrl("https://phptravels.net/hotels/booking")
    },

    getValuesOfHotelName(){
        return this.hotelName().invoke('text')
         
    },

    getValueOfHotelLocation(){
        return this.hotelLocation().invoke('text')
        
    },

    getValueOfHotelPrice(){
        return this.bookNowButton().invoke('text')
    },

}