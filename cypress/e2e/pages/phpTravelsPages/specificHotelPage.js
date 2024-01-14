import basePage from "../basePage"

export default{

    //elements
    selectRoomButton(){
        return basePage.findElementByClassAndContent("a.d-none","Select Room ")
    },

    bookNowButton(){
        return basePage.findElementByClassAndContent("button","Book Now")
    },

    //actions

    clickSelectRoom(){
        this.selectRoomButton().click()
    },
    
    clickBookNow(){
        this.bookNowButton().click()
        basePage.validateCurrentUrl("https://phptravels.net/hotels/booking")
    }
}